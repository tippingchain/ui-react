// src/components/notifications/NotificationProvider.tsx
import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { 
  Notification, 
  NotificationContextType, 
  NotificationProviderProps 
} from '../../types/notifications';
import { NotificationToast } from './NotificationToast';

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: React.FC<NotificationProviderProps> = ({
  children,
  maxNotifications = 5,
  defaultPosition = 'top-right',
  className = '',
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const timeoutRefs = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const clearTimeout = (id: string) => {
    const timeout = timeoutRefs.current.get(id);
    if (timeout) {
      global.clearTimeout(timeout);
      timeoutRefs.current.delete(id);
    }
  };

  const addNotification = useCallback((notification: Omit<Notification, 'id'>): string => {
    const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const newNotification: Notification = {
      ...notification,
      id,
    };

    setNotifications(prev => {
      const updated = [newNotification, ...prev];
      // Keep only maxNotifications most recent
      return updated.slice(0, maxNotifications);
    });

    // Auto-remove if duration is set
    if (notification.duration && notification.duration > 0) {
      const timeout = setTimeout(() => {
        removeNotification(id);
      }, notification.duration);
      timeoutRefs.current.set(id, timeout);
    }

    return id;
  }, [maxNotifications]);

  const removeNotification = useCallback((id: string) => {
    clearTimeout(id);
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const clearNotifications = useCallback(() => {
    // Clear all timeouts
    timeoutRefs.current.forEach(timeout => global.clearTimeout(timeout));
    timeoutRefs.current.clear();
    setNotifications([]);
  }, []);

  const updateNotification = useCallback((id: string, updates: Partial<Notification>) => {
    setNotifications(prev =>
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, ...updates }
          : notification
      )
    );

    // If updating duration, handle timeout
    if (updates.duration !== undefined) {
      clearTimeout(id);
      if (updates.duration > 0) {
        const timeout = setTimeout(() => {
          removeNotification(id);
        }, updates.duration);
        timeoutRefs.current.set(id, timeout);
      }
    }
  }, [removeNotification]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach(timeout => global.clearTimeout(timeout));
      timeoutRefs.current.clear();
    };
  }, []);

  const getPositionClasses = (position: typeof defaultPosition) => {
    const baseClasses = 'fixed z-50 pointer-events-none';
    switch (position) {
      case 'top-right':
        return `${baseClasses} top-4 right-4`;
      case 'top-left':
        return `${baseClasses} top-4 left-4`;
      case 'bottom-right':
        return `${baseClasses} bottom-4 right-4`;
      case 'bottom-left':
        return `${baseClasses} bottom-4 left-4`;
      case 'top-center':
        return `${baseClasses} top-4 left-1/2 transform -translate-x-1/2`;
      case 'bottom-center':
        return `${baseClasses} bottom-4 left-1/2 transform -translate-x-1/2`;
      default:
        return `${baseClasses} top-4 right-4`;
    }
  };

  const contextValue: NotificationContextType = {
    notifications,
    addNotification,
    removeNotification,
    clearNotifications,
    updateNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      
      {/* Notification Container */}
      <div className={`${getPositionClasses(defaultPosition)} ${className}`}>
        <div className="space-y-3 pointer-events-auto">
          {notifications.map((notification) => (
            <NotificationToast
              key={notification.id}
              notification={notification}
              onRemove={removeNotification}
              position={defaultPosition}
            />
          ))}
        </div>
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotifications = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
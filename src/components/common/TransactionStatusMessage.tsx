import React from 'react';

interface TransactionStatusMessageProps {
  status: 'idle' | 'processing' | 'success' | 'error';
  error?: Error | null;
  successMessage?: React.ReactNode;
  processingMessage?: string;
  className?: string;
}

export const TransactionStatusMessage: React.FC<TransactionStatusMessageProps> = ({
  status,
  error,
  successMessage = 'Transaction completed successfully!',
  processingMessage = 'Processing transaction...',
  className = ''
}) => {
  if (status === 'idle') return null;

  const statusStyles = {
    processing: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200'
  };

  return (
    <div className={`rounded-lg p-4 border ${statusStyles[status]} ${className}`}>
      {status === 'processing' && (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
          <span>{processingMessage}</span>
        </div>
      )}
      
      {status === 'success' && (
        <div className="flex items-start gap-2">
          <span className="text-green-600">✓</span>
          <div>{successMessage}</div>
        </div>
      )}
      
      {status === 'error' && error && (
        <div className="flex items-start gap-2">
          <span className="text-red-600">✗</span>
          <div>
            <p className="font-medium">Transaction failed</p>
            <p className="text-sm mt-1">{error.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};
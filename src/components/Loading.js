import React from 'react';
import './spinner.css';

export default function LoadingSpinner() {
  return (
    <div className="spinner-container" data-testid="loading-spinner">
      <div className="loading-spinner" />
      {' '}
      Loading
    </div>
  );
}

import React from 'react';

const Loading = ({ message = 'Loading...' }) => {
    return (
        <div className="loading-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Loading;
import React from "react";

export default function Loading({ label = "Loading…", inline = false }) {
  const text = <span className="font-mono text-sm text-muted-2">{label}</span>;
  if (inline) return text;
  return <div className="py-10 text-center">{text}</div>;
}

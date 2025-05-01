import React from 'react';
import ColorShowcase from '../../components/ColorShowcase';

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <ColorShowcase />
    </div>
  );
}
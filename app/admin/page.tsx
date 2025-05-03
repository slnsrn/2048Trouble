import React from 'react'
import ColorShowcase from '../../components/admin/ColorShowcase'
import Title from '@/components/Title'

export default function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <Title title="Admin Dashboard" />
      <ColorShowcase />
    </div>
  )
}

import React from 'react'

interface SettingsSectionProps {
  title: string
  items: React.ReactNode
}

const SettingsSection: React.FC<SettingsSectionProps> = ({ title, items }) => {
  return (
    <section className="settings-section">
      <h2>{title}</h2>
      <div className="settings-items">{items}</div>
    </section>
  )
}

export default SettingsSection

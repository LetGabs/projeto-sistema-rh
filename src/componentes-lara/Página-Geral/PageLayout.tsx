import React from 'react'

interface PageLayoutProps {
  sidebar: React.ReactNode
  children: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ sidebar, children }) => {
  return (
    <div className="container">
      {sidebar}
      <main>{children}</main>
    </div>
  )
}

export default PageLayout

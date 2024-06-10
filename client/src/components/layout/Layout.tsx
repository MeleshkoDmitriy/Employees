import React, { FC } from 'react'
import styles from './Layout.module.css'
import { Layout as AntDLayout } from 'antd'
import { Header } from '../header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <AntDLayout.Content style={{ height: '100%' }}>
        {children}
      </AntDLayout.Content>
    </div>
  )
}

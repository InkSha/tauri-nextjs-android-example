'use client'
import { invoke } from '@tauri-apps/api/core'
import { useEffect, useState } from 'react'

export interface DeviceInfo {
  name: string
  system: string
  version: string
}

export default function Info({ className }: { className: string }) {
  const [info, updateInfo] = useState<DeviceInfo>({
    name: 'unknow',
    system: 'unknow',
    version: 'unknow',
  })

  useEffect(() => {
    invoke<DeviceInfo>('get_info').then(updateInfo)
  }, [])

  return (
    <div className={className}>
      <h2>Device Info</h2>
      <p>Device Name: {info.name}</p>
      <p>System: {info.system}</p>
      <p>Version: {info.version}</p>
    </div>
  )
}

import React from 'react'
import styles from '@/styles/tools/tools.module.css'

import VoiceOverPage from '../components/VoiceOver/VoiceOverPage'
import VoiceOver from '../components/Layouts/VoiceOver'

const page = () => {
  return (
    
    <VoiceOver >
      <div >
      <VoiceOverPage/>
    </div>
    </VoiceOver>
    
  )
}

export default page
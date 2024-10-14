import React from 'react'
import styles from '@/styles/tools/tools.module.css'
import VideoCreation from '../components/Layouts/VideoCreation'
import VideoCreationPage from '../components/VideoCreation/VideoCreationPage'

const page = () => {
  return (
    
    <VideoCreation >
      <div >
      <VideoCreationPage/>
    </div>
    </VideoCreation>
    
  )
}

export default page
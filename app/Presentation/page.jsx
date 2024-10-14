import React from 'react'
import styles from '@/styles/tools/tools.module.css'
import Presentation from '../components/Layouts/Presentation'
import PresentationPage from '../components/Presentation/PresentationPage'

const page = () => {
  return (
    
    <Presentation> 
      <div >
      <PresentationPage/>
    </div>
    </Presentation>
    
  )
}

export default page
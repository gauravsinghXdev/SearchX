import React from 'react'
import styles from '@/styles/tools/tools.module.css'
import Presentation from '../components/Layouts/Presentation'
import PresentationPage from '../components/Presentation/PresentationPage'
import UploadImage from '../components/SlideCreations/UploadImage-6s'
import SlideTopSection from '../components/SlideCreations/SlideCreationTopSection'
import SlideCreation from '../components/Layouts/SlideCreation'
import SlideCreationBottom from '../components/SlideCreations/SlideCreationBottomSection'

const page = () => {
  return (
   <SlideCreation>
   <div>
    <SlideTopSection/>
    <UploadImage />
    <SlideCreationBottom/>
   </div>
   </SlideCreation>
  )
}

export default page
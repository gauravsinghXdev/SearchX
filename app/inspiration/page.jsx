
import React from 'react'
import styles from '@/styles/ImageCreation.module.css'
import ImageCreationNavbar from '@/app/components/navbars/ImageCreationNavbar'
import Inspirations from '../components/image-creation/Inspirations'
import Inspirationsidebar from '../components/sidebars/Inspirationsidebar'

const page = () => {
  return (
    <div className={styles.container}>
      <ImageCreationNavbar />
      <div className="flex flex-1">
        <Inspirationsidebar/>
        <Inspirations/>
      </div>
    </div>
  )
}

export default page
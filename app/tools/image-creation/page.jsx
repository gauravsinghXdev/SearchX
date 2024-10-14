import React from 'react'
import styles from '@/styles/ImageCreation.module.css'
import ImageCreationNavbar from '@/app/components/navbars/ImageCreationNavbar'
import ImageCreationSidebar from '@/app/components/sidebars/ImageCreationSidebar'
import ImageCreation from '@/app/components/image-creation/ImageCreation'

const page = () => {
  return (
    <div className={styles.container}>
      <ImageCreationNavbar />
      <div className="flex flex-1">
        <ImageCreationSidebar />
        <ImageCreation />
      </div>
    </div>
  )
}

export default page
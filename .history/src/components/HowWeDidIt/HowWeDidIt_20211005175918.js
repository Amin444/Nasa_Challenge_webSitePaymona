import React from 'react'
import './HowWeDidIt.css'
const HowWeDidIt = page => {
  page = page.page
  console.log(page)
  return (
    <div>
      {page === 1 && 
        <div className='rootPage1'>
          <span className='title'>Register at Space-Track</span>
        </div>
      }
    </div>
  )
}

export default HowWeDidIt

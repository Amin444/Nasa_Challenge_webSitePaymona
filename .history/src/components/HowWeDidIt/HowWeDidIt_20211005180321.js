import React from 'react'
import './HowWeDidIt.css'
const HowWeDidIt = page => {
  page = page.page
  console.log(page)
  return (
    <div>
      {page === 1 && 
        <div className='rootPage1'>
          <span className='titlePage1'>1. Register at Space-Track</span>
          <a></a>

        </div>
      }
    </div>
  )
}

export default HowWeDidIt

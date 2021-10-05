import React from 'react'
import './HowWeDidIt.css'
const HowWeDidIt = page => {
  console.log(page)
  page = page.page
  return (
    <div>
      {page && page === '1' && 
        <div className='rootPage1'>
            esgerhzsrh
        </div>
      }
    </div>
  )
}

export default HowWeDidIt

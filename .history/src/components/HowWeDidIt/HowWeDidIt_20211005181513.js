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
          <a className='textPage1' target='_blank' href='https://www.space-track.org'>Space-track</a>
          <span className='titlePage1'>2. Use your credentials and go to https://www.space-track.org/#recent</span>
          <a className='textPage1' target='_blank' href='https://www.space-track.org'>Copy data to text file. Data is in TLE format.</a>
          <span className='titlePage1'>3. How to understand Two line element data</span>
          <a className='textPage1' target='_blank' href='https://en.wikipedia.org/wiki/Two-line_element_set'>TLE data</a>
        
        </div>
      }
    </div>
  )
}

export default HowWeDidIt

import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './ScrollNav.module.css'
const ScrollNav = () => {

  const [active, setActive] = useState('section-1')

  useEffect(() => {
   
    window.scrollTo(0,0)

  }, [window.location.reload])

  useEffect(() => {
    
    const handleWindowScroll = () => {

      if (window.scrollY + window.innerHeight/2 < window.innerHeight*1)
        console.log(1)
      else if (window.scrollY + window.innerHeight/2 < window.innerHeight*1)
        console.log(2)

    }

    window.addEventListener('scroll', handleWindowScroll)

  }, [])

  return (
    <div className={styles.root}>
       <div className={styles.wrap}>

        <a 
          onClick={() => setActive('section-1')}
          className={classNames(styles.circle, active === 'section-1' ?  styles.active : null )}  href="#block1"></a>
          <div className={styles.line}></div>

        <a 
          onClick={() => setActive('section-2')}
          className={classNames(styles.circle, active === 'section-2' ?  styles.active : null )} href="#block2"></a>
          <div className={styles.line}></div>
        <a 
          onClick={() => setActive('section-3')}
          className={classNames(styles.circle, active === 'section-3' ?  styles.active : null )} href="#block3"></a>
          <div className={styles.line}></div>
        <a 
          onClick={() => setActive('section-4')}
          className={classNames(styles.circle, active === 'section-4' ?  styles.active : null )} href="#block4"></a>

      </div>
    </div>
  )
}

export default ScrollNav


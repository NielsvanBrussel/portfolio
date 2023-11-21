import React, { useRef, useEffect } from 'react'
import styles from '../styles/Section.module.css'
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'
import TechIcon from './TechIcon'

const Section = ({ item, index, mobileViewMode }) => {


  useEffect(() => {
    console.log(mobileViewMode)
  }, [mobileViewMode])

  return (
    <>
      <div className={styles.section__container__outer}>
          <div className={styles.section__container__inner}>
              <div className={styles.section__content__container}>
                <div className={styles.section__header__container}>
                  <h1>{item.title}</h1>
                </div>
                <div className={styles.section__flex__container}>
                  <div className={styles.section__flex__item}>
                    <div className={styles.section__desc__container}>
                          <p>{item.description}</p>
                          <p>{item.description2}</p>
                    </div>
                  </div>
                  <div className={styles.section__flex__item}>
                    <div className={styles.section__image__container}>
                        <img className={styles.img} src={item.img} alt="project" />
                    </div>
                  </div>
                </div>
                  <div className={styles.section__button__container}>
                    {!mobileViewMode && <h2>LINKS:</h2>}
                    <div>
                      <button title='GitHub Repository' onClick={() => window.open(item.githubLink)} className={`${styles.button} ${styles.button__small}`}><BsGithub size={18} /></button>
                    </div>
                    <div>
                      <button title='Live Version' onClick={() => window.open(item.liveLink)} className={`${styles.button} ${styles.button__small}`}><FaExternalLinkAlt size={18} /></button>
                    </div>
                  </div>
                  <div className={styles.section__tech__container}>
                    {!mobileViewMode && <h2>TECH:</h2>}
                      {item.tech.map(
                          (icon, i) => <TechIcon animating={index === item.id} key={i} index={i} name={icon} />
                      )}
                  </div>
              </div>
          </div>
      </div>
    </>

  )
}

export default Section
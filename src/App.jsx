import { useState, useEffect, useRef } from 'react'
import Experience from './Experience'
import styles from './styles/App.module.css'
import { PiArrowBendDownRightBold, PiArrowBendDownLeftBold } from 'react-icons/pi'
import { portfolioData } from './data'
import Section from './components/Section'

function App() {

  const initialWidth = window.innerWidth

  const [mobileViewMode, setMobileViewMode] = useState(initialWidth > 900 ? false : true)
  const [animating, setAnimating] = useState(false)
  const [carouselData, setCarouselData] = useState()
  const [index, setIndex] = useState(0)

  const carouselRef = useRef()


  const changeViewMode = () => {

    if (window.innerWidth < 900 && mobileViewMode === false) {
      setMobileViewMode(true)
    } else if (window.innerWidth > 900 && mobileViewMode === true) {
      setMobileViewMode(false)
    }
  }


  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform =  `translate3d(${index * -100}vw, 0, 0)`;
    }
  }, [index])
  

  const next = () => {
    if (!animating) {
      setAnimating(true)
      setTimeout(() => {
        setCarouselData(portfolioData)
      }, 1200);
    } else {
      setIndex(prevState => prevState + 1)
    }
  }

  const previous = () => {
    setIndex(prevState => prevState - 1)
  }

  window.addEventListener("resize", changeViewMode);


  return (
    <>
      <div className={styles.container__outer}>
        <div className={styles.container__inner}>
          { carouselData ?
            <div className={styles.carousel__outer}>
              <div ref={carouselRef} className={styles.carousel__inner}>
                {carouselData.map(
                    item => <Section mobileViewMode={mobileViewMode} index={index} key={item.id} item={item} />
                )}
              </div>
            </div> 
          :
            <div className={styles.container__intro}>
              <div className={`${styles.header__container__outer} ${styles.absolute__container__outer} ${animating ? styles.header__container__animation : null}`}>
                <div className={`${styles.header__container__inner} ${styles.absolute__container__inner}`}>
                  <h3></h3>
                  <h1 className={styles.intro__title}>PORTFOLIO </h1>
                  <h3>van Brussel Niels</h3>
                </div>
              </div>
              <div className={`${styles.experience__container} ${animating ? styles.experience__container__animation : null}`}>
                <Experience mobileViewMode={mobileViewMode}/>
              </div>
            </div>
          }
          { index + 1 < portfolioData.length &&
            <div className={`${styles.button__container__outer} ${styles.absolute__container__outer} ${animating ? carouselData ? styles.button__container__right : styles.button__container__animation : null}`}>
              <div className={`${styles.button__container__inner} ${styles.absolute__container__inner}`}>
                <button onClick={() => next()} className={`${styles.button} ${styles.button__large}`}><PiArrowBendDownRightBold size={32} /></button>
              </div>
            </div>
          }
          { index > 0 &&
            <div className={`${styles.button__container__outer} ${styles.absolute__container__outer} ${animating ? styles.button__container__left : null}`}>
              <div className={`${styles.button__container__inner} ${styles.absolute__container__inner}`}>
                <button onClick={() => previous()} className={`${styles.button} ${styles.button__large}`}><PiArrowBendDownLeftBold size={32} /></button>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App

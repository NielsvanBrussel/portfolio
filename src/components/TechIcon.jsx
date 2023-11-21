import React from 'react'
import styles from '../styles/TechIcon.module.css'
import { SiJavascript, SiCss3, SiHtml5, SiReact, SiBlender, SiThreedotjs, SiMongodb, SiSvelte, SiNodedotjs, SiD3Dotjs } from 'react-icons/si'

const TechIcon = ({ name, index, animating }) => {

    const animationDelayStyle = animating ? {animationDelay: `${1000 + (index * 500)}ms`} : { animation: 'none', opacity: 1}

    const iconComponent = () => {

        switch (name) {
            case "d3":
                return (
                    <SiD3Dotjs title='Javascript' className={styles.layer__icon} size={26}/>
                )
            case "javascript":
                return (
                    <SiJavascript title='Javascript' className={styles.layer__icon} size={26}/>
                )
            case "html":
                return (
                    <SiHtml5  title='HTML' className={styles.layer__icon} size={26}/>
                )
            case "css":
                return (
                    <SiCss3 title='CSS' className={styles.layer__icon} size={26}/>
                )
            case "threejs":
                return (
                    <SiThreedotjs title='ThreeJS' className={styles.layer__icon} size={26}/>
                )
                
            case "blender":
                return (
                    <SiBlender title='Blender' className={styles.layer__icon} size={26}/>
                ) 
            case "svelte":
                return (
                    <SiSvelte title='Svelte' className={styles.layer__icon} size={26}/>
                )
            case "react":
                return (
                    <SiReact title='React' className={styles.layer__icon} size={26}/>
                )
            case "node":
                return (
                    <SiNodedotjs title='NodeJS' className={styles.layer__icon} size={26}/>
                )
            case "mongodb":
                return (
                    <SiMongodb title='MongoDB' className={styles.layer__icon} size={26}/>
                )          
            default:
                return (
                    null
                )
        }
    }

    return (
        <div className={styles.layer__icon__container} style={animationDelayStyle}>
            {iconComponent()}
        </div>
    )

}

export default TechIcon
import React from 'react'
import {FaPizzaSlice ,FaHamburger} from 'react-icons/fa'
import {GiNoodles ,GiChopsticks} from 'react-icons/gi'
import styles from "../styles.module.css"
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const Categories = () => {
  return (
    <div className={styles.list}>
        <NavLink className={styles.listitem} to={"/cuisine/Italian"}>
            <FaPizzaSlice className={styles.fa}/>
            <h4>Italian</h4>
        </NavLink >
        <NavLink className={styles.listitem} to={"/cuisine/American"}>
            <FaHamburger className={styles.fa}/>
            <h4>American</h4>
        </NavLink>
        <NavLink className={styles.listitem} to={"/cuisine/Thai"}>
            <GiNoodles className={styles.fa}></GiNoodles>
            <h4>Thai</h4>
        </NavLink>
        <NavLink className={styles.listitem} to={"/cuisine/Japanese"}>
            <GiChopsticks className={styles.fa}/>
            <h4>Japanese</h4>
        </NavLink>
    </div>
  )
}

export default Categories

// NAVLINK here is type of an anchor tag where "to={url}" is the replacement of href in react and at that link react Routes will render that
//component which you have added in the "element={<Component/>}"

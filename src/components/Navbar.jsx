import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles.module.css"
import {FaPizzaSlice ,FaHamburger} from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
      <NavLink className={styles.listitem} to={"/"}>
            <FaPizzaSlice className={styles.fa}/>
        </NavLink >
        <input type="search" name="" id="" />

      </div>
  )
}

export default Navbar

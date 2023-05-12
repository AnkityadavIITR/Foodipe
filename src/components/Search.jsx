import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import searchc from '../searchc.module.css'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [searchinput,setSearchinput]=useState("")

  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate("/searched/"+searchinput);
    
  }

  return (
    <div >
      <form type="text" className={searchc.form} onSubmit={handleSubmit}>
        <FaSearch/>
        <input value={searchinput} type="text" onChange={(e)=>setSearchinput(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search

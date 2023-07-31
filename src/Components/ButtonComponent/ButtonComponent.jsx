import React, { useState, useEffect } from 'react'
import "./ButtonComponent.css"
import { 
    faHome, 
    faBoxOpen,
    faFaceFlushed,
    faSdCard,
    faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const icons = [
    faHome,
    faBoxOpen,
    faFaceFlushed,
    faSdCard,
    faCode,
];

function ButtonComponent() {
  const [view, setView] = useState(false)
  const [state, setState] =useState(faCode)

  function interval () {
    let randomIcon = icons[Math.floor(Math.random() * icons.length)]
    setState(randomIcon)
  }

  if (view) {
    var time = setTimeout(interval, 3000)
  } else {
    clearTimeout(time)
  }

  return (
    <div className='buttonComponent'>   
        {
            view && (
                <FontAwesomeIcon className="fa" icon={state} size="2x" />
            )
        } 
        <button className='button' onClick={() => setView(!view)}>
            Click!
        </button>
    </div>

  )
}

export default ButtonComponent
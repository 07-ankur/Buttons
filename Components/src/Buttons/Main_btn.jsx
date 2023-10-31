import React from 'react'
import './Main_btn.css'

export default function Main_btn({label,functionHandler}) {
  return (
    <button onClick={functionHandler} className="btn">
      {label}
    </button>
  )
}
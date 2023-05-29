import React from 'react'
import "./loader.css"
export default function Loader() {
  return (
    <>
    <div id="loader" data-wordload="Please Waiting" />
   
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        background: "lightgray",
        width: "100%"
      }}
    >
   
      <br />
      <div></div>
    </div>
  </>
  )
}

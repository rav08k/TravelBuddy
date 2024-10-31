import React from 'react'

function DefButton(props) {
  return (
    <button type={props.type} onClick={props.onClick} className={typeof props.extraClass !== "undefined" ? "def_btn " + props.extraClass : props.className} id={props.id}>{props.children}</button>
  )
}

export default DefButton
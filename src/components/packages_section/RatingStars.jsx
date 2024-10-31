import React from 'react'

function RatingStars(props) {
  return (
    <span className={"star "+ props.extraClass}>★</span>
  )
}

export default RatingStars
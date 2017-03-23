import React from 'react'

export default (props) => (
  <div>
    <p>{props.title}</p>
    <img src={props.src} />
    <p>{props.text}</p>
  </div>
)

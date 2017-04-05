import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <div>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/about">About</Link></p>
    <p><Link to="/video">Get a random video</Link></p>
  </div>
)

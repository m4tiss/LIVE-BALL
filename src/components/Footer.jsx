import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='git'>
        < a className='github' href="https://github.com/m4tiss" target="_blank"><AiOutlineGithub size={50} color='white' /></a>
       </div>
    </div>
  )
}

export default Footer
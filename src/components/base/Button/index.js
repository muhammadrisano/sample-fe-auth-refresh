import React, {memo} from 'react'

const Button = ({title, onClick}) => {
    console.log('component Button');
  return (
    <button onClick={onClick}>{title}</button>
  )
}

export default memo(Button)
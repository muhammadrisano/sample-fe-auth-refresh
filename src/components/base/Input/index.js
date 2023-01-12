import React, {memo} from 'react'

const Input = ({type = 'text',  ...props}) => {
    console.log('Component Input');
  return (
    <div>
       <input {...props} type={type} />
    </div>
  )
}

// Input.defaultProps = {
//     type: 'text'
//   };

export default memo(Input)
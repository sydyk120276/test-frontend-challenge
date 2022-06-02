import React from 'react'
import { useSelector } from 'react-redux'
import { useBeforeunload } from 'react-beforeunload'

const Startup = (props) => {
  const { basket } = useSelector((s) => s)

  return (
    <>
      {useBeforeunload(() => localStorage.setItem('basket', JSON.stringify(basket)))}
      {props.children}
    </>
  )
}

export default Startup

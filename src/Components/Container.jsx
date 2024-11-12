import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-refContainer mx-auto pt-10 ${className}`}>{children}</div>
  )
}

export default Container

import React from 'react'

const StyleList = ({children}) => {
    const style ={
        display:"flex" ,
        flexDirection: "row",
        textAlign:"center" ,
        marginTop:"50pt",
        border: "black" ,
    }
  return (
    <>
    <div style={style}>
        {children}
    </div>
    </>
  )
}

export default StyleList
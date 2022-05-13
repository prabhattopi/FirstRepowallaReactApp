import React from 'react'
// import "./footer.css"

export  const Footer = () => {
    let footerStyle={
     
    position: "relative",
    width: "100%",
    top:"100%",
    marginTop:"100px"
    
    // border:"2px solid red"
    }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>Copyright &copy;MyTodoList.com</footer>
  )
}

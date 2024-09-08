import React, { useState } from 'react'

const Darkmode = () => {
  const [theme, setTheme] =useState(false);

   const changeMode = () =>{
    let mode = document.body;
    mode.classList.toggle('dark');
    setTheme(theme=>!theme)
   }
  return (
    <div>
      <button className='dark:text-white' onClick={changeMode}>
       {theme ?  <i className="ri-sun-line"></i> : <i className="ri-moon-line"></i>}
        </button>
    </div>
  )
}

export default Darkmode

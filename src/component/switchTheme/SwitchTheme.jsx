import React, { useState } from 'react';
// import './SwitchTheme.css'
import '../button/Button.css'



const SwitchTheme = () => {
    
    const [isDark , setIsDark] = useState(false);
    
    const changeThemeHandler = () =>{
        if(isDark === false){
            setIsDark(true) //change state black to white
            document.body.style.backgroundColor = "white"
            
        }
        else{
            setIsDark(false) //change state black to white
            document.body.style.backgroundColor = "black"
           
        }

    }
  return (
   <>
    {/* <MyButton btnClassName ="changeColor" btnLabel="Change White" onbtnClick={changeThemeHandler}/> */}
    <button className="changeColor" onClick={changeThemeHandler}>Change {
        isDark == true? `Dark` : `White`
    }</button>
    {
        isDark  && <p>This theme is white</p>
    }
   </>
  );
}

export default SwitchTheme;

// {} ->conditional rendering

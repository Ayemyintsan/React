import React, { useState } from 'react';
import './Button.css'

const MyButton = ({btnClassName,btnLabel,onbtnClick}) =>{
    return(
        // <button className='btn increase'>Increment</button>
        <button className={`btn ${btnClassName}`} onClick= {onbtnClick}>{btnLabel}</button>
    )
}
const Button = () => {
    const [count,setCount] = useState(0); //[var, func] useState(initial state)
    // const [studentlist,setStudentList] = useState()// array=useState([]) obj=useState({})
    const incrementHandler = ()=>setCount(count+1)
    const decrementHandler = ()=>{
      // document.body.style.backgroundColor = 'red'
      
      (count>0 ? setCount(count-1):"")
      
    }
  return (
    //fragment <> instead of <div></div>
    <> 
      <p>
      My Count {count}
      </p>
      {/* <button className='btn increase'>Increment</button> */}
      <MyButton btnClassName = "increase" btnLabel="Increment" onbtnClick={incrementHandler}/>
      {/* no function
      <MyButton btnClassName = "increase" btnLabel="Increment" onbtnClick={()=>setCount(count+1)}/> */}
      <MyButton btnClassName = "decrease" btnLabel="Decrement" onbtnClick={decrementHandler}/>
      {/* <button className='btn decrease'>Decrement</button> */}
    </>
  );
}

export default Button;


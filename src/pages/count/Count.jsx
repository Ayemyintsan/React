import React, { useEffect, useState } from 'react';

const Count = () => {
    const [myCount, SetMyCount] = useState(0)
    const [isSubmit,SetIsSubmit] = useState(false)

    useEffect (() =>{
        SetMyCount(myCount+1)
    },[isSubmit])

    const submitHandler = ()=>{
        SetIsSubmit(!isSubmit)
    }

  return (
    <div> My Count {myCount}
        <button type='submit' onClick={submitHandler}>Submit</button>
    </div>
  );
}

export default Count;

// no dependency   render forever ----> use timer
// dependency      render first time -----> page reload
// [state] dependency render every state change -----> list

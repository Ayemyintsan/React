import React from 'react';
import Child2 from './Child2';


const Child1 = ({loginUser}) => {
  return (
    <div>
      <p>Child1 {loginUser}</p>
        <Child2 loginUser={loginUser} /> 
        


    </div>
  );
}

export default Child1
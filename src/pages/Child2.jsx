import React from 'react';
import Child1 from './Child1';
import Child3 from './Child3';

const Child2 = ({loginUser}) => {
  return (
    <div>
      
    <p>Child2 {loginUser}</p>
    <Child3 loginUser={ loginUser}/>
    </div>
  );
}

export default Child2;

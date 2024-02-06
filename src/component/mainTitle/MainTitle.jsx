import React from 'react';

const MainTitle = (props) => {
  // const MainTitle = ({title,second})=>{
  //   return(
  //     <h2>{title}{second}</h2>
  //   )
  // }
  const title = props.title;
  
  return (
    <div>
      <h2>{title}</h2>
      <h2>{props.second}</h2>
      <h3>{props.third}</h3>
    </div>
  );
}

export default MainTitle;


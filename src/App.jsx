// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MainTitle from './component/mainTitle/MainTitle'
import Button from './component/button/Button';
import Parent from './pages/Parent';
import SwitchTheme from './component/switchTheme/SwitchTheme';
import StudentList from './component/studentList/StudentList';
import Login from './pages/login/Login';
import Todo from './pages/component/Todo';
import Count from './pages/count/Count';

export function App() {
  // const [count, setCount] = useState(0)

  // return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  // )

  return(
    <div>
      {/* <MainTitle title="Title1" second="secondTitle"/> */}
      <MainTitle title="Title1"/>
      <MainTitle second="SecondTile"/>
      <MainTitle third="ThirdTitle"/>

      {/* <Button/>
     <Parent/>
     <SwitchTheme/>
     <StudentList/>
     <Login/> */}
    <Todo/>
    
    <Count/>

    </div>
  )
}

//  export default App
// export function App()

import React, { useState } from 'react'
// import MyContext from './myContext';
import x from './myContext';

function MyState(props) {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    // <MyContext.Provider value={state}>
    <x.Provider value={{ mode, toggleMode }}>
      {props.children}
    </x.Provider>
  )
}

export default MyState


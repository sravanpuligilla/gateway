import React from 'react';
import Demo from './demo';
import { StateProvider } from "./context/message-context";

const App = () => {
  const initialState = {
    message: "before click"
  };
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'getMessage':
        return {
          ...state,
          message: action.data
        };     
      default:
        return state;
    }
  };
  
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
        <div className="App">
           <Demo />
       </div>
    </StateProvider>
  );
}

export default App;

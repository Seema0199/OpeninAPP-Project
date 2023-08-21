import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [UserData, setUserData] = useState("");
  console.log('UserData', UserData)
  return (
    <div className='bg-[#F5F5F5]'>
      {
        UserData ? <Home {...UserData}/> : <Login setUserData={setUserData}/>
      }
    </div>
  );
}

export default App;
 
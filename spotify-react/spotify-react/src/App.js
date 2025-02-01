import {Header} from './components/header/Header';

import SideBar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import './mediaQuery.css'
import './vars.css'
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("")

  const getInputFunction = () => input 

  return (
    <div className="App">
      <div className="align">
        <SideBar />
        <main>
          <Header changeInputFunction={setInput}/>
          <Content getInputFunc={getInputFunction}/>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

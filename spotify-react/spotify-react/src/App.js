import Header from './components/header/Header';

import './components/sidebar-footer.css'  
import SideBar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';
import './mediaQuery.css'
import './vars.css'

function App() {
  return (
    <div className="App">
      <div className="align">
        <SideBar />
        <main>
          <Header />
          <Content />
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

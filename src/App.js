import './App.css';
import AppBar from './components/AppBar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className='global'>
     <AppBar/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;

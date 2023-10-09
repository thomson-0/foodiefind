
import './App.css';
import Catagory from './components/Catagory';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Page from './pages/Page';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Search/>
      <Catagory/>
        <Page/>
   </BrowserRouter>
    </div>
  );
}

export default App;

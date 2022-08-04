import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import Home from './components/Home/Home';
import AppRouter from './Routes/AppRouter';
import {BrowserRouter} from 'react-router-dom'
import {AuthProviders} from './components/Providers/AuthProviders'

function App() {
  return (
    <BrowserRouter>
      <AuthProviders>
        <AppRouter/>

      </AuthProviders>
    
     
      {/* <Test/>
      <Home/> */}
    
    </BrowserRouter>
     
      

  );
}

export default App;

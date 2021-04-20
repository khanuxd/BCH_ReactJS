import './App.css';
import Header from './components/Header';
import Nav from './components/Nav'
import Main from './components/Main';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;

import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import Main_router from './Components/Main_router';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main_router />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

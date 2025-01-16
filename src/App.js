import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent'; 
import Versus from './pages/Versus';
import SingleUser from './pages/SingleUser';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={MainContent} /> {/* MainContent is now the home page */}
            <Route path="/Codeforces-Analyzer/versus" component={Versus} />
            <Route path="/Codeforces-Analyzer/" component={SingleUser} /> {/* Optionally keep SingleUser here */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

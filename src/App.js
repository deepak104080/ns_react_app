import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import CounterFn from './CounterFn';
import Comp from './Comp';
import Error from './Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Name =() => {
    return<h1>Name Page</h1>;
  };
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="/contact/name" component={Name} />
            <Route path="/counterfn" component={CounterFn} />
            <Route path="/comp" component={Comp} />
            <Route component={Error} />
          </Switch>
        </div>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

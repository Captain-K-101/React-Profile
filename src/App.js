import './App.css';
import React,{Fragment} from 'react'
import { BrowserRouter as R, Route, Link,Switch,Redirect} from 'react-router-dom'
import Routing from './components/Routing'
import Nav from './components/Nav'

function App() {
  return (
    <R>
    <Nav />
    <main>
      <Routing />
    </main>
    </R>
  );
}


// /components
  
export default App;

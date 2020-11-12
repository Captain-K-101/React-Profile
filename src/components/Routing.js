import React,{Fragment} from 'react'
import { BrowserRouter as R, Route, Link,Switch,Redirect} from 'react-router-dom'
import {Home,About,Contact} from './Pages'

const Routing =()=>{
const isAuthenticated = true
return(
<Switch>
        <Route path='/' exact render={Home} />
      {
      isAuthenticated ? 
      <>
      <Route path="/about/:name"  component={About} />
      <Route path="/contact"  component={Contact} />
      </> : <Redirect to="/" />
      }
</Switch>
)
};

export default Routing;
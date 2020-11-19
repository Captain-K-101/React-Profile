import React,{Fragment} from 'react'
import {Redirect,useHistory,useLocation} from 'react-router-dom'
import Button from '@material-ui/core/Button'
export const Home = () => {
  return(
  <Fragment>
    <h1>Home</h1>
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
  </Fragment>
  )
  };
  
// About Page
export const About = ({match:{params:{name}},history}) => {

  return(
  <Fragment>
    
    <h1>About {name}</h1>
    <button onClick={() => history.push('/') } >Go to home</button>
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
    <FakeText />
  </Fragment>
  )
};
// Contact Page

export const Contact = () => {
  const history = useHistory();
   const {pathname}=useLocation();
  return (
  <Fragment>
  <h1> Location:{pathname}</h1>
    <h1>Contact</h1>
      <Button variant="contained" color="primary" onClick={() => history.push('/') }>
      Go to home
    </Button>
    <FakeText />
  </Fragment>
  )
  };

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)
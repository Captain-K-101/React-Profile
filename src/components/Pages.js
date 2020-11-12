import React,{Fragment} from 'react'
import {Redirect,useHistory,useLocation} from 'react-router-dom'
export const Home = () => {
  return(
  <Fragment>
    <h1>Home</h1>
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
    <button onClick={() => history.push('/') } >Go to home</button>
    <FakeText />
  </Fragment>
  )
  };

const FakeText = () => (
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)
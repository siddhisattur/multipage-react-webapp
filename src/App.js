import React from "react";
import { Switch , Route } from 'react-router-dom';
import Home from './Component/Home';
import Services from './Component/Services';
import Solutions from './Component/Solutions';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
import List from './Component/List';


const App = () => {
  return (
    <>
      <h1>Home Page</h1>
      <List/>
      
          {/* <Switch>
            <Route exact path='/' element={<Home />} />
            <Route path='/Services' component={<Services />} />
            <Route path='/Solutions' component={<Solutions />} />
            <Route path='/About' component={<About />} />
            <Route path='/Contact' component={<Contact />} />
            <Route  component={Error} />

          </Switch> */}
       
    </>
  )
}

export default App;
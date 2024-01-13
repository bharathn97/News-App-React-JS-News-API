import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const App=(props){
    return(
<Router>
      <div>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<News key='general' pageSize={12} country='us' category='general' />}></Route>
              <Route exact path='/business' element={<News key='business' pageSize={12} country='us' category='business' />}></Route>
              <Route exact path='/entertainment' element={<News key='entertainment' pageSize={12} country='us' category='entertainment' />}></Route>
              <Route exact path='/health' element={<News key='health' pageSize={12} country='us' category='health' />}></Route>
              <Route exact path='/science' element={<News key='science' pageSize={12} country='us' category='science' />}></Route>
              <Route exact path='/sports' element={<News key='sports' pageSize={12} country='us' category='sports' />}></Route>
              <Route exact path='/technology' element={<News key='technology' pageSize={12} country='us' category='technology' />}></Route>
            </Routes>
        </div>
                  </Router>
    );
}
export default App;

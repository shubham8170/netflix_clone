import React,{useEffect} from 'react';
import './App.css';
import Rows from './Rows';
// import request from 'request';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
import About from './About';
import LoginScreen from './LoginScreen';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';




function App() {

 

   const User=useSelector(selectUser);

 
  const dispatch = useDispatch();
 

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((userauth)=>{
      if(userauth){
        console.log("user info"+userauth);
        
        dispatch(login({
          uid:userauth.uid,
          email:userauth.email
        }))
      }
      else{
        dispatch(logout)
      }
    });
    return unsubscribe;
  }, [])





  return (
    <div className="App">
      

      <Router>
        {!User?(
          <LoginScreen/>
        ):(
        <Switch>

    <Route exact path="/"> 
          <Nav/>
      <Banner/>
      <Rows title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true}/>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      
      <About/>

         </Route>

          
      
         
        </Switch>
        )}
        
      </Router>
      

    </div>
  );
}

export default App;

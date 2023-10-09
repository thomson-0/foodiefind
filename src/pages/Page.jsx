import Home from "./Home";
import React from 'react'
import Cuisine from "./Cuisine";
import {Route,Routes } from "react-router-dom"
import Searchresult from "./Searchresult";
import Recipe from "./Recipe";

function Page() {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cuisine/:id" element={<Cuisine />} />
      <Route path="/Searchresult/:query" element={<Searchresult />} />
      <Route path="/recipe/:name" element={<Recipe/>} />   
</Routes>

  
    
  )
}

export default Page
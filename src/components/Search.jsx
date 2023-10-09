import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';


function Search() {
    const navigate=useNavigate()
    const [Input, setinput] = useState("")

 const handlesubmit= (e)=>{
        e.preventDefault();
        navigate('/Searchresult/'+ Input)
    }


   
  return (
    <SearchContainer>
      <SearchForm onSubmit={handlesubmit}>
        <FiSearch />
        <input type="text"  onChange={(e)=>setinput(e.target.value)} value={Input} placeholder='Search'/>
      </SearchForm>
    </SearchContainer>
  );
}
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #fff;
  width: 50%;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    width: 70%;
    background-color: #fff;
  }

  svg {
    margin-right: 0.5rem;
  }

  input {
    border: none;
    outline: none;
 
  }
`;

export default Search;

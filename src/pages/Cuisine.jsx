import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  const params = useParams();

  const getCuisine = async (name) => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=12cccb307e8c47f6a7730f8bf6a88b34&cuisine=${name}`);
      const data = await response.json();
      // console.log(data.results);
      setCuisine(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getCuisine(params.id);
  }, [params.id]);

  return (
    <Grid>
      {cuisine.map((item) => (
        <Card key={item.id}>
          <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        </Card>
      ))}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 1rem;
  }
`;



const Card = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 12rem; /* Adjust the height as needed */
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  a {
    text-decoration: none;
    display: block;
    position: relative;
    transition: background-color 0.3s;
  }

  a:hover {
    background-color: #f0f0f0;
  }


  a.active {
    background-color: red; 
  }

  p {
    text-align: center;
    padding: 1rem;
    font-weight: bold;
    color: #333333;
  }
`;


export default Cuisine;

import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

function Popular() {
  const [Popular, setPopular] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("popularRecipes");

    if (storedData) {
      setPopular(JSON.parse(storedData));
    } else {
      getPopular();
    }
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=12cccb307e8c47f6a7730f8bf6a88b34&number=9`
    );
    const data = await api.json();
    const recipes = data.recipes;
    localStorage.setItem("popularRecipes", JSON.stringify(recipes));
    setPopular(recipes);
  };
  return (
    <div>
      <Wrapper>
        <h3 style={{ marginBottom: "20px" }}>Popular Picks</h3>
        <Splide
          options={{
            perPage: window.innerWidth < 768 ? 1 : 4,
            arrows: false,
            pagination: false,
            gap: "2rem",
          }}
        >
          {Popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Grident />
                <Link to={`/recipe/${recipe.id}`} >
                <p>{recipe.title}</p>
                <img src={recipe.image} alt="" />
                </Link >
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  overflow: hidden;
`;

const Card = styled.div`
height: 14rem;
border-radius:2rem;
overflow: hidden;
position-realtive;

    img{
        border-radius:2rem;
        width:100%;
        position: absolute;
        left:0;
        width:100%;
        height:100%;
        object-fit: cover;
    }
    p{
        width: 100%;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 0%;
    top: 64%;
    transform: translate(-50%,0%);
    color: white;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    text-transform: capitalize;
    }
`;
const Grident = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  width: 100%;
  position: absolute;
  z-index: 10;
  border-radius: 2rem;
  height: 100%;
`;

export default Popular;

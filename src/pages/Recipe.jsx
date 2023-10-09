import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const params = useParams();
  const [detail, setDetail] = useState(null);
  const [activetab, setactivetab] = useState("Instructions");

  const getDetail = async (id) => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=12cccb307e8c47f6a7730f8bf6a88b34`
      );
      const data = await response.json();
      setDetail(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDetail(params.name);
  }, [params.name]);

  return (
    <div>
      {detail && (
        <RecipeContainer>
          <LeftSide>
            <h4>{detail.title}</h4>
            <img src={detail.image} alt={detail.title} />
          </LeftSide>
          <RightSide>
            <div style={{ marginBottom: "30px" }}>
              <GradientButton
                className={activetab === "Instructions" ? "active" : ""}
                onClick={() => setactivetab("Instructions")}
              >
                Instructions
              </GradientButton>
              <GradientButton
                className={activetab === "Ingredients" ? "active" : ""}
                onClick={() => setactivetab("Ingredients")}
              >
                Ingredients
              </GradientButton>
            </div>
            {activetab === "Instructions" && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: detail.summary }}></p>
                <p
                  dangerouslySetInnerHTML={{ __html: detail.instructions }}
                ></p>
              </div>
            )}

            {activetab === "Ingredients" && (
              <ul>
                {detail.extendedIngredients.map((Ingredient) => (
                  <li key={Ingredient.id}>{Ingredient.original}</li>
                ))}
              </ul>
            )}
          </RightSide>
        </RecipeContainer>
      )}
    </div>
  );
}

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: 243px;
    border-radius: 20px;
    margin-top: 50px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  height: max-content;
  gap: 20px;
`;

const GradientButton = styled.button`
  background: linear-gradient(135deg, #000000 0%, #333333 100%);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 30px;

  &:hover {
    background: linear-gradient(135deg, #333333 0%, #000000 100%);
  }

  &.active {
    background: white;
    border: 1px solid;
    color: black;
  }
`;

export default Recipe;

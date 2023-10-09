import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <CategoryList>
      <CategoryItem to={"./Cuisine/italian"}>
        <FaPizzaSlice />
        <h4>italian</h4>
      </CategoryItem>
      <CategoryItem to={"./Cuisine/indian"}>
        <FaHamburger />
        <h4>indian</h4>
      </CategoryItem>
      <CategoryItem to={"./Cuisine/thai"}>
        <GiNoodles />
        <h4>thai</h4>
      </CategoryItem>
      <CategoryItem to={"./Cuisine/japanese"}>
        <GiChopsticks />
        <h4>japanese</h4>
      </CategoryItem>
    </CategoryList>
  );
}
const CategoryList = styled.div`
  display: flex;
  justify-content: center;
`;

const CategoryItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  text-decoration: none;
  color: black;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    font-size: 40px;
    border-radius: 50%;
    padding: 10px;
    background-color: #f0f0f0;
  }

  h4 {
    margin-top: 5px;
  }
`;

export default Category;

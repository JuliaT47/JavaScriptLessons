// Lesson 42 CSS Stylizing
import React, { useState } from "react";
import styles from "./ProductList.module.css";
import classNames from "classnames";
import styled from "styled-components";
import harry from "./Harry.jpg.avif";
import luke from "./Luke.jpeg";
export const sleep = (duration) => {};

export const PERSONS = [
  {
    id: 1,
    personImage: harry,
    personName: "Harry",
    personSecondName: "Potter",
    isOnline: true,
  },
  {
    id: 2,
    personImage: luke,
    personName: "Luke",
    personSecondName: "Skywalker",
    isOnline: false,
  },
];

const Title = styled.h1`
  color: green;
`;

const Button = styled.button`
  border-radius: 10px;
  color: ${(props) => props.primary || "orange "};
  background-color: ${(props) => (props.state ? "white" : "brown")};
`;

const ProductList = () => {
  const [state, setState] = useState(false);
  const changeBColor = () => {
    setState(!state);
  };

  return (
    <div className={classNames(styles.container, { [styles.blueColor]: true })}>
      <Title>Some Title</Title>
      {PERSONS.map((person) => (
        <PersonListItem key={person.id} person={person} />
      ))}
      <Button primary={"orange "} state={state} onClick={changeBColor}>
        Change Color
      </Button>
    </div>
  );
};

export default ProductList;

const PersonListItem = ({ person }) => {
  const { personName, personImage, personSecondName, isOnline } = person;

  return (
    <div>
      <img src={personImage} alt={personName} width="400" height="400" />
      <h3>
        Full name: {personName} {personSecondName}
      </h3>
      <dv>{/* isOnline: <OnlineIcon /> */}</dv>
    </div>
  );
};

export { PersonListItem };

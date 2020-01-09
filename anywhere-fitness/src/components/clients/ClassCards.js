import React from "react";
import styled from "styled-components";

export default function ClassCards(props) {
  const Clas = styled.div`
    width: 450px;
    height: 250px;
    background-color: #bdbdbd;
    background: linear-gradient(#ff9233, #ffaa99);
    box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    margin: 1.5rem;
    opacity: 0.9;
  `;
  const Description = styled.div`
    border-top: 1px solid #bdbdbd;
  `;
  const Editbtn = styled.button`
    width: 195px;
    height: 22px;
    color: #1b1a1a;
    background-color: #bdbdbd;
    border: none;
    border-radius: 5px;
    font-family: raleway;
    font-weight: bold;
    padding: 0 4%;
  `;

  return (
    <Clas>
      <h2> {props.type}</h2>
      <h4>{props.name}</h4>
      <Description>
        <p>location: {props.location}</p>
        <p>{props.description}</p>
      </Description>
      <Editbtn>Edit</Editbtn>
    </Clas>
  );
}

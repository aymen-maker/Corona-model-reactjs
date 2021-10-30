import React from "react";
import styled from "styled-components";

const Pagination = ({
  noPrev,
  display,
  decrement = (f) => f,
  increment = (f) => f,
  submitForm = (f) => f,
}) => {
  return (
    <Wrapper noPrev={noPrev}>
      {noPrev ? null : <Button onClick={decrement}>Previous</Button>}
      {display ? (
        <Button onClick={submitForm}>Submit</Button>
      ) : (
        <Button onClick={increment}>Next</Button>
      )}
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: ${({ noPrev }) => (noPrev ? "flex-end" : "space-between")};
  margin-top: 10px;
  position: absolute;
  bottom: 0;
  right: 0;
`;
const Button = styled.div`
  padding: 5px 20px;
  border-radius: 5px;
  background-color: #57ffa1;
  cursor: pointer;
  color: #0a1318;
  transition: ease-in 0.1s;

  &:hover {
    background-color: #abffd0;
  }
`;

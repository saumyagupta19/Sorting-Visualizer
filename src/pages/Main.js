import React from "react";
import styled from "styled-components";

export default function Main({ data, curr, next }) {
  let width = 0;
  if (data.length < 10) {
    width = 500 / data.length;
  } else {
    width = 1000 / data.length;
  }
  return (
    <Container>
      {data.map((size, i) => (
        <Bar
          height={`${size}px`}
          width={`${width}px`}
          key={i}
          active={next === i}
          style={curr === i ? { background: "green" } : null}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-right: 50px;
  justify-content: center;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
`;

const Bar = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.active ? "red" : "#a9c5cf")};
  margin-right: 3px;
`;

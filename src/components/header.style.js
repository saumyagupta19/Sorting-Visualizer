import styled from "styled-components";

export const Button = styled.p`
  color: #fff;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  text-align: center;
  line-height:20px
  margin-bottom:10px;

  &:hover {
    color: #a9c5cf;
  }
`;
export const Sliderwrapper = styled.div`
  flex-direction: row;
  height: 10px;
  width: 100px;
  margin-top: 18px;
  padding-left: 100px;
  margin-left: -150px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  height: 65px;
  width: 100%;
  background-color: #000;
  padding-right: 0px;
  padding-left: 0px;
`;
export const Sortwrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  align-content: center;
  justify-content: space-around;
`;

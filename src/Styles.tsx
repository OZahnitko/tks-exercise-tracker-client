import styled from "styled-components";

export const BackgroundLayer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1597019558926-3eef445fdf60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=375&q=80");
  background-position: 0 20%;
  background-repeat: no-repeat;

  height: 50%;
`;

export const FirstLayer = styled.div`
  background-color: #5cb26e;
  border-radius: 40px 40px 0 0;
  bottom: 0;

  height: 65%;

  padding: 1rem;
  position: absolute;

  width: 100%;
`;

export const SecondLayer = styled.div`
  background-color: #f3efec;
  border-radius: 40px 40px 0 0;
  bottom: 0;

  height: 55%;

  position: absolute;

  width: 100%;
`;

export const ThirdLayer = styled.div`
  background-color: #fafafa;
  bottom: 0;

  height: 10%;

  position: absolute;

  width: 100%;
`;

export const RootWrapper = styled.div`
  height: 100%;

  position: relative;
`;

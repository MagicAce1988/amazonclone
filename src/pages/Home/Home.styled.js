import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  max-width: 1500px;
`;

export const HomeHeader = styled.div``;

export const ImageHeader = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -21vw;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Row = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;

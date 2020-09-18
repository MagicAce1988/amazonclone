import styled from "styled-components";

const colors = (props) => props.theme.colors.header;

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${(props) => colors(props).background};
`;

export const HeaderLogo = styled.img``;

export const HeaderSearch = styled.div``;

export const Input = styled.input``;

export const HeaderNav = styled.div``;

export const HeaderOption = styled.div``;

export const OptionLineOne = styled.span``;

export const OptionLineTwo = styled.span``;

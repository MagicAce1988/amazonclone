import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const colors = (props) => props.theme.colors.header;

export const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${(props) => colors(props).background};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderLogo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 18px;
  cursor: pointer;
`;

export const HeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

export const Input = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderOption = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: ${(props) => colors(props).option}; ;
`;

export const OptionLineOne = styled.span`
  font-size: 10px;
`;

export const OptionLineTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
`;

export const Search = styled(SearchIcon)`
  cursor: pointer;
  padding: 5px;
  height: 22px !important;
  background-color: ${(props) => colors(props).searchIcon}; ;
`;

export const HeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => colors(props).option}; ;
`;

export const HeaderBasketCount = styled(OptionLineTwo)`
  margin-left: 10px;
  margin-right: 10px;
`;

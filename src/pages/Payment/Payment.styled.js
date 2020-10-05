import styled from "styled-components";

const colors = (props) => props.theme.colors.payment;

export const Container = styled.div`
  display: flex;
  background: ${(props) => colors(props).bg};
`;

export const Info = styled.div`
  width: 100%;
  h1 {
    width: 100%;
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: ${(props) => colors(props).secondaryBg};
    border-bottom: 1px solid ${(props) => colors(props).border};

    a {
      text-decoration: none;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid ${(props) => colors(props).border};
`;

export const Title = styled.div`
  flex: 0.2;
`;

export const Address = styled.div`
  flex: 0.8;
`;

export const Items = styled(Address)``;

export const Details = styled(Address)``;

export const PaymentPrice = styled.div``;

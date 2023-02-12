import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const LinksContainer = styled.div`
  margin: 2px;
  display: flex;
  text-align: center;
`;

export const InLink = styled(Link)`
  margin: auto;
  padding: 5px;
`;

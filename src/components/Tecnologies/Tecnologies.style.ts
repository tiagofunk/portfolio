import styled from "styled-components";
import Theme from "../../theme/Theme";

const { fonts } = Theme;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  margin-left: 10rem;
  margin-top: 5.4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const Title = styled.div`
  font-size: ${fonts.size.large};
  
`;

export const AllImages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

export const Image = styled.img`
  margin: 2rem;
`;

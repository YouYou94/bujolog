import styled from 'styled-components';

export const ToolContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  background-color: white;

  transition: all 0.35s;

  @media screen and (min-width: 1024px) {
    height: 100%;

    left: ${prop => (prop.using ? '-100%' : '-210%')};
  }

  @media screen and (max-width: 1024px) {
    height: 30%;

    bottom: ${prop => (prop.using ? '0' : '-110%')};
  }
`;

export const ToolTitle = styled.h1`
  height: 5rem;

  padding-top: 1rem;
  margin-bottom: 2rem;

  font-family: 'GreatVibes';
  font-size: 3rem;

  text-align: center;

  @media screen and (max-width: 1024px) {
    height: 0;
    border-top: 1px solid rgb(220, 220, 220);
    font-size: 1.5rem;
  }
`;

export const ToolArticle = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;

  padding: 2rem;
`;

export const OptionWrapper = styled.div`
  min-width: 3rem;
  min-height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 1rem;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 1.5rem;

  background-color: white;

  cursor: pointer;

  &:hover {
    background-color: rgb(120, 200, 200);
  }

  @media screen and (max-width: 1024px) {
    min-width: 2rem;
    min-height: 2rem;
  }
`;

export const Option = styled.div`
  width: 50%;
  height: 50%;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

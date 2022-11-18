import styled from 'styled-components';

/* Tool */
export const ToolContainer = styled.div`
  position: absolute;
  left: 0;

  width: 100%;

  ${prop =>
    prop.using
      ? 'left: -100%; width: 100%; display:flex; flex-direction:column;'
      : 'left: -200%;'}

  height: 100%;

  border-right: 1px solid rgb(220, 220, 220);

  background-color: white;

  transition: all 0.35s;

  @media screen and (max-width: 1024px) {
    ${prop =>
      prop.using
        ? 'left: 0; width: 100%; display:flex; flex-direction:column;'
        : 'left: -200%;'}

    boder:none;
    background-color: rgb(251, 253, 252);
  }
`;

/* Header */
export const ToolTitle = styled.h1`
  height: 5rem;

  padding-top: 1rem;
  margin-bottom: 2rem;

  font-family: 'GreatVibes';
  font-size: 3rem;

  text-align: center;
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
`;

export const Option = styled.div`
  width: 50%;
  height: 50%;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

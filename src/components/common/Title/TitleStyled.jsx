import styled from 'styled-components';

export const Title = styled.h1`
  width: ${prop => prop.width}rem;

  font-family: 'Anton';
  font-size: ${prop => prop.size}rem;

  color: ${prop => prop.color};

  ${prop =>
    prop.isShadow ? 'text-shadow: 1.2rem 1.2rem 1.5rem rgb(0, 0, 0)' : ''};
`;

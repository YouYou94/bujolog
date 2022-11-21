import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  flex: 1;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

/* Header */
export const Header = styled.div`
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem 0;
`;

/* Section */
export const Section = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 1rem 2rem;
`;

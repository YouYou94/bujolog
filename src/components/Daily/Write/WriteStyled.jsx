import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

/* Header */
export const WriteHeader = styled.div`
  height: 6rem;

  padding: 2rem 2rem 0 2rem;
`;

/* Section */
export const WriteSection = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 0 2rem 2rem 2rem;
`;

/* Footer */
export const WriteFooter = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgb(220, 220, 220);

  background-color: white;
`;

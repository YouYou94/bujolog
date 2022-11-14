import styled from 'styled-components';

/* Header */
export const Title = styled.h1`
  margin: 0 1rem;

  font-family: 'CormorantGaramond';
  font-size: 2rem;

  cursor: pointer;
`;

/* Section */
export const AccodianContainer = styled.div``;

export const AccodianHeader = styled.div`
  height: 3rem;

  display: flex;
  align-items: center;

  border-bottom: 1px solid rgb(220, 220, 220);

  background-color: rgb(220, 220, 220, 0.3);

  cursor: pointer;
`;

export const AccodianArticle = styled.div`
  height: ${prop => (prop.isDisplay ? '9rem' : '0')};

  display: flex;
  flex-direction: column;

  border-bottom: 1px solid rgb(220, 220, 220);

  overflow: hidden;
  transition: all 0.35s;
`;

export const AccodianTitle = styled.h2`
  margin: 0 2rem;

  font-family: 'GowunDodum';
  font-size: 1.2rem;
`;

export const AccodianItem = styled.div`
  flex: 1;

  display: flex;
  align-items: center;

  padding-left: 7rem;

  cursor: pointer;

  &:hover {
    color: gray;
    background-color: rgb(220, 220, 220, 0.1);
  }
`;

/* Footer */
export const FooterWrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingButton = styled.button`
  width: 8rem;
`;

export const ContactSite = styled.a`
  margin: 0 0.5rem;
`;

export const ContactEmail = styled.a`
  margin: 0 0.5rem;
`;

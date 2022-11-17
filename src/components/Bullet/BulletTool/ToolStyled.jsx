import styled from 'styled-components';

/* Tool */
export const KeyToolContainer = styled.div`
  position: absolute;

  width: 100%;
  bottom: 0;
  left: 0;

  ${prop =>
    prop.isUsing
      ? 'height:calc(100%); display:flex; flex-direction:column; border-top: 100px solid rgb(220, 220, 220, .6); border-right: 30px solid rgb(220, 220, 220);'
      : 'height:0;'}

  background-color: white;

  transition: all 0.35s;
`;

export const ToolTopWrapper = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid rgb(220, 220, 220);
`;

export const ToolArticleWrapper = styled.div`
  flex: 1;
`;

/* Tool Top */
export const ToolTitle = styled.h1`
  margin: 0 2rem;

  font-family: 'CormorantGaramond';
  font-size: 2rem;
`;

export const ToolButton = styled.button`
  margin: 0 2rem;

  font-family: 'CormorantGaramond';
  font-size: 2rem;
`;

/* Tool Article */
export const ToolKeyWrapper = styled.div`
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margint-top: 1rem;
  padding: 0 3rem;

  background-color: white;
`;

export const ToolKey = styled.div`
  width: 2rem;
  height: 2rem;

  background-image: url(${prop => prop.icon});
  background-repeat: no-repeat;
  background-size: cover;
`;

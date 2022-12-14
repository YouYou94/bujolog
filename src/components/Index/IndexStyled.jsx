import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  height: 12rem;

  padding-top: 4rem;
`;

export const Title = styled.h1`
  width: 20rem;

  color: rgb(245, 245, 245);

  font-family: 'Anton';
  font-size: 7rem;

  user-select: none;
`;

export const IndexBox = styled.div`
  flex: 1;

  width: 20rem;

  margin-bottom: 3rem;
  border-radius: 1rem;
  padding: 3rem 1rem;

  background-color: rgb(10, 10, 10, 0.5);
`;

export const IndexMenu = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: none;

  gap: 1rem;
`;

export const IndexItem = styled.li`
  color: rgb(245, 245, 245);

  font-family: 'Anton';
  font-size: 1.5rem;

  cursor: pointer;

  transition: 0.2s all;

  &:hover {
    padding-left: 1.5rem;
  }
`;

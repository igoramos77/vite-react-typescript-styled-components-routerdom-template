import styled from 'styled-components';

export const HEADER_HEIGHT = 77;

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT + 'px'};
  padding: 0 1rem;
  background: ${({ theme }) => theme.cards.primary};
  border-bottom: 1px solid #ffffff24 !important;
  box-shadow: ${({ theme }) => theme.specific.headerBoxShadow};
  z-index: 2;

  > h1 {
    margin: 0;
  }

  > main {
    position: relative;
    display: flex;
    margin: 0 auto;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    max-width: 1320px;
  }
`;

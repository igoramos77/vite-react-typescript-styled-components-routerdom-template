import styled from 'styled-components';

export const Grid = styled.section`
  display: grid; 
  grid-template-columns: 1fr; 
  gap: 0px 0px; 
  color: ${({ theme }) => theme.text.primary} !important;
  background: ${({ theme }) => theme.background.primary} !important;
  grid-template-areas: 
    "Header"
    "Main"
    "Footer"; 
`;
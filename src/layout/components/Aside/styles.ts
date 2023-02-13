import styled from 'styled-components';

export const AsideContainer = styled.aside`
  position: relative;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.border.primary};
`;

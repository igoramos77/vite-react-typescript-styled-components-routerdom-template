import styled from 'styled-components';

import { HEADER_HEIGHT } from '../Header/styles';

export const ContentContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 0 auto;
  width: 100%;
  gap: 1rem;
  margin-top: ${HEADER_HEIGHT + 'px'};

  max-width: 1320px;
`;

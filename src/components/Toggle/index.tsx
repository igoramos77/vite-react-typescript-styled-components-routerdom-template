import React from 'react';

import { Container } from './styles';

interface IToggleProps {
  labelLeft?: string;
  labelRight?: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({ labelLeft, labelRight, checked, onChange }) => {

  return (
    <Container>
      <input type="checkbox" defaultChecked={checked} onChange={onChange} />
      <span />
    </Container>
  );
}

export default Toggle;
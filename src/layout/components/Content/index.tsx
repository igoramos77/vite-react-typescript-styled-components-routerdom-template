import React from 'react';
import Aside from '../Aside';

interface IContentProps {
  children: React.ReactNode;
}

import { ContentContainer } from './styles';

const Content: React.FC<IContentProps> = () => {
  return (
    <ContentContainer>
      <Aside />
      <main>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
        <h1>Content</h1>
      </main>
    </ContentContainer>
  );
}

export default Content;
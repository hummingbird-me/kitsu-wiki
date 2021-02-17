import React, { ReactElement } from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  children: ReactElement;
}

export default function EditGroup({ title, children }: Props): ReactElement {
  return (
    <Container>
      <legend>{title}</legend>
      <div className='field-group'>{children}</div>
    </Container>
  );
}

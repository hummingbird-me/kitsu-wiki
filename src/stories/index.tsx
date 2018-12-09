import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Example', module)
  .add('with text', () => <div>Example</div>)
  .add('with some emoji', () => (
    <div>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </div>
  ));

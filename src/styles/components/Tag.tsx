import styled from 'styled-components';

export const Tag = styled.div`
  --tag-padding: 5px;
  background-color: var(--generic-tag);

  padding: var(--tag-padding);
  border-radius: var(--rounded-input);
  vertical-align: middle;
`;

export const SubtypeTag = styled(Tag)`
  background-color: var(--media-subtype-tag);
  font-size: var(--font-me);
  max-height: calc(var(--font-me) + calc(var(--tag-padding) * 2));
`;

export default Tag;

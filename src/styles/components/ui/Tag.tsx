import styled from 'styled-components';

export const Tag = styled.div`
  --tag-padding: 6px;
  background-color: var(--generic-tag);
  font-weight: var(--bold);

  padding: var(--tag-padding) calc(var(--tag-padding) + 2px);
  border-radius: var(--rounded-input);
  vertical-align: middle;
`;

export const SubtypeTag = styled(Tag)`
  background-color: var(--media-subtype-tag);
  font-size: var(--font-me);
  max-height: calc(var(--font-me) + calc(var(--tag-padding) * 2));
`;

export default Tag;

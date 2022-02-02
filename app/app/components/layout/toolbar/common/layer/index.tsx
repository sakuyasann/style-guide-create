import { css, jsx } from '@emotion/react';
import React from 'react';
import { Section } from '..';

type Props = {
  onAdd: React.MouseEventHandler<HTMLButtonElement>
}

const Layer: React.FC<Props> = (props) => {
  const {
    onAdd,
    children
  } = props

  return (
    <>
      {/* @jsx jsx */}
      <Section title="Layer">
        <ul css={styles.list}>
          {children}
          <li css={styles.addListItem}>
            <button css={styles.addButton} onClick={onAdd}>Add new layer</button>
          </li>
        </ul>
      </Section>
    </>
  );
};

export default Layer;

const styles = {
  list: css`
    padding: 0 1rem;
  `,
  addListItem: css`
    margin-top: .5rem;
  `,
  addButton: css`
    display: block;
    width: 100%;
    font-size: 12px;
    text-align: center;
    color: var(--font-color-400);
  `
}
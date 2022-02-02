import { css, jsx } from '@emotion/react';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ProjectState, SelectedState } from '~/atoms';
import { Icon } from '~/components/parts'

const Layer = () => {
  const [active, setActive] = useRecoilState(SelectedState)
  const projectData = useRecoilValue(ProjectState)
  
  return (
    <>
      {/* @jsx jsx */}
      <div css={styles.container}>
        <p css={styles.heading}>SECTIONS</p>
        <ul css={styles.menu.wrap}>
          {projectData.order.map(data => {
            const isActive = active === data

            return (
              <li
                css={styles.menu.item}
                style={{
                  color: isActive ? 'var(--font-color-500)' : 'var(--font-color-300)',
                  cursor: isActive ? undefined : 'pointer'
                }}
                onClick={() => setActive(data)}
              >
                <div css={styles.menu.icon}><Icon type={data} size={20} /></div>
                <p css={styles.menu.text}>{data.toUpperCase()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  );
};

export default Layer;

const styles = {
  container: css`
    height: 100%;
    padding: 2rem 1rem;
    background-color: var(--background-base);
    border-right: 1px solid var(--border-color);
  `,
  heading: css`
    font-size: 13px;
    color: var(--font-color-300);
    font-weight: 500;
  `,
  menu: {
    wrap: css`
      margin-top: 1rem;
    `,
    item: css`
      width: 13.25rem;
      padding: .75rem 0;
      display: flex;
      align-items: center;
    `,
    icon: css`
      flex: 0 0 2rem;
      line-height: 1;
    `,
    text: css`
      flex: 1 1 auto;
      font-size: 15px;
    `
  }
}
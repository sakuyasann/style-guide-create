import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { RiDiscussFill } from 'react-icons/ri';
import { Stack } from '~/components/layout';

type Props = {
  data: {
    id: string;
    title: string;
    darkColor: string;
    lightColor: string;
    comment: string;
  }
}

const ListItem: React.FC<Props> = (props) => {
  const {
    data
  } = props

  const [color, setColor] = useState(data.lightColor)
  const [name, setName] = useState(data.title)

  useEffect(() => {

  }, [name, color])

  return (
    <>
      {/* @jsx jsx */}
      <li css={styles.listItem}>
        <Stack>
          <div>
            <label htmlFor="name" css={styles.label}>Color name</label>
            <div css={styles.name}>
              <input
                type="text"
                id="name"
                placeholder='Primary color'
                defaultValue={name}
                css={styles.input}
                onBlur={e => setName(e.target.value)}
              />
            </div>
            {name.length === 0 && <p css={styles.placeText}>Please enter color name.</p>}
          </div>
  
          <div>
            <label htmlFor="colorcode" css={styles.label}>Color code</label>
            <div css={styles.formWrap}>
              <div
                css={styles.colorBlock}
                style={{
                  backgroundColor: color
                }}
              ></div>
              <div css={styles.inputWrap}>
                <input
                  type="text"
                  placeholder='#ffffff'
                  id="colorcode"
                  css={styles.input}
                  defaultValue={color}
                  onBlur={(e) => setColor(e.target.value)}
                />
              </div>
              <button css={styles.comment}><RiDiscussFill /></button>
            </div>
          </div>
          
        </Stack>
        {color.length === 0 && <p css={styles.placeText}>Please enter a color code in the form HEX or RGB or HSL</p>}
      </li>
    </>
  );
};

export default ListItem;

const styles = {
  listItem: css`
    padding: .25rem 1rem;
  `,
  label: css`
    font-size: 12px;
    font-weight: 500;
    color: var(--font-color-300);
  `,
  name: css`
    border: 1px solid var(--border-color);
    border-radius: .25rem;
    margin-top: .25rem;

    input {
      padding: .2rem .25rem;
      font-size: 14px;
    }
  `,
  formWrap: css`
    display: flex;
    margin-top: .25rem;
    border: 1px solid var(--border-color);
    border-radius: .25rem;
  `,
  colorBlock: css`
    flex: 0 0 2rem;
    border-right: 1px solid var(--border-color);
    border-radius: .25rem;
  `,
  inputWrap: css`
    flex: 1 1 auto;
  `,
  input: css`
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 .5rem;
    outline: none;
    font-size: 14px;
  `,
  comment: css`
    flex: 0 0 auto;
    display: block;
    padding: .25rem .75rem;
    background-color: var(--color-gray-100);
  `,
  placeText: css`
    font-size: 12px;
    color: var(--font-color-300);
    margin-top: .25rem;
  `
}
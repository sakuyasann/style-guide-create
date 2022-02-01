import { css, jsx } from '@emotion/react';
import { RiMoonFill, RiMore2Fill, RiSave2Line, RiSunFill } from 'react-icons/ri';
import { Button, Logo, Spacer } from '~/components/parts';
import { Stack } from '..';
import Menu from './menubutton';
import ShareButton from './sharebutton';
import ToggleColorButton from './togglecolor';

const Header = () => {
  return (
    <>
      {/* @jsx jsx */}
      <header css={styles.header}>
        <div css={styles.inner}>
          <div css={styles.logo}>
            <Logo />
          </div>
          <Spacer />
          <Stack direction='row'>
            <ShareButton />
            <ToggleColorButton />
            <Menu />
          </Stack>
        </div>
      </header>
    </>
  );
};

export default Header;

const styles = {
  header: css`
    padding: .75rem 3rem;
    border-bottom: 1px solid var(--border-color);
  `,
  inner: css`
    display: flex;
    align-items: center;
  `,
  logo: css`
    width: 96px;
  `,
}

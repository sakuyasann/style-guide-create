import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { usePopper } from 'react-popper';

type Props = {
  Trigger: JSX.Element
}

const index: React.FC<Props> = (props) => {
  const {
    Trigger,
    children
  } = props
  const [isShow, setIsShow] = useState(false)
  const [referenceElement, setReferenceElement] = useState<Element | null | undefined>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null | undefined>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ]
  });

  const popper = css`
    opacity: ${isShow ? 1 : 0};
    pointer-events: ${isShow ? 'auto' : 'none'};
    transition: .2s ease-in-out;
  `
  
  return (
    <>
      {/* @jsx jsx */}
      <div css={popperStyles.wrap}>
        <div
          onClick={() => setIsShow(!isShow)}
          ref={setReferenceElement}
        >
          {Trigger}
        </div>
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          css={[popper]}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default index;

const popperStyles = {
  wrap: css`
    position: relative;
  `
}
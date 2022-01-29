import { css, Global } from "@emotion/react"

const DefaultStyle = () => {
  return (
    <>
      <Global styles={css`
        body {
          background-color: var(--background-color);
        }
      `} />
    </>
  )
}

export default DefaultStyle
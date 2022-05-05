import { Link as RouterLink } from 'react-router-dom'
import tw, { css, styled } from 'twin.macro' // eslint-disable-line no-unused-vars

export const SvgIcon = tw.svg`fill-current width[1em] height[1em] inline-block transition-colors flex-shrink-0 user-select[none] font-size[1.5em]`

export const LightButton = tw.button`
cursor-pointer text-gray-600 bg-transparent border-0 rounded-sm md:rounded-md text-sm hover:text-gray-800 outline-color[darkorange]`

const baseButtonStyles = tw`
font[inherit] text-sm no-underline md:padding[.8em 1em] padding[.5em .8em] bg-blue-600  
hover:bg-blue-700 active:bg-blue-900  text-white rounded-sm md:rounded-md leading-none whitespace-nowrap inline-block border-0 cursor-pointer transition-colors align-middle outline-offset[2px]
`
export const Button = styled.button(() => [
  baseButtonStyles,
  css`
    &:disabled {
      opacity: 0.5 !important;
      cursor: wait;
    }
  `,
])

export const ButtonLikeLink = styled(RouterLink)`
  ${baseButtonStyles}
`
export const VButton = styled(Button)(
  ({ variant }: { variant: 'contained' | 'outlined' }) => [
    tw`rounded-none`,
    variant === 'contained'
      ? tw`bg-blue-700  hover:bg-blue-800 text-white`
      : tw`bg-white hover:bg-gray-100 text-blue-900 `,
  ]
)

export const ButtonGroup = styled.div(() => [
  css`
    border-width: 1px;
    ${tw`rounded-sm md:rounded-md border-solid border-gray-600 sm:flex-none flex flex-auto`}
    button {
      flex: inherit;
    }
    > button + button {
      border-left-width: 1px;
      ${tw` border-l-gray-600`}
    }
    button:last-child {
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
    }
    button:first-child {
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    }
  `,
  tw`text-sm md:text-base w-full sm:w-auto`,
])

export const Link = styled(RouterLink)`
  text-decoration: none;
  ${tw`text-blue-600 hover:text-blue-800`}
`

export const EmptyLink = styled.button`
  text-decoration: none;
  ${tw`bg-transparent border-0 text-blue-600 hover:text-blue-800`}
`

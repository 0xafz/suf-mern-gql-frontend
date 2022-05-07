import tw, { styled } from 'twin.macro' //eslint-disable-line no-unused-vars
import { Link } from 'react-router-dom'
import { ComponentProps } from 'react'

const Container = tw.span`inline-flex items-center h-auto `

const TagWord = tw.span`inline-flex items-center h-auto rounded-md bg-blue-200 bg-opacity-75 `

interface TagProps extends ComponentProps<'span'> {
  to: string
  label?: string
  count?: number
}
const Tag = ({ to, children, label, count, ...rest }: TagProps) => (
  <Container {...rest}>
    <TagWord>
      <Link
        to={to}
        tw=" text-blue-600 no-underline text-xs padding[.2rem .5rem] outline-color[darkorange]"
      >
        {label}
      </Link>
    </TagWord>
    {count && (
      <span tw="text-sm text-gray-600 inline">&nbsp; {` × ${count}`}</span>
    )}
  </Container>
)

type TagsProps = {
  col?: boolean
  floatLeft?: boolean
}
export const Tags = styled.div((props: TagsProps) => [
  `
	span + span {
    ${props.col && props.col ? `margin-top: .5em` : `margin-left: .2em`}
	}
`,
  tw`flex flex-wrap`,
  props.col ? tw`flex-col` : tw`flex-row`,
  props.floatLeft && tw`float-left`,
])
export default Tag

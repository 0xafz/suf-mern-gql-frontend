import tw, { styled } from 'twin.macro' //eslint-disable-line no-unused-vars
import { ComponentProps } from 'react'
import Tag from './my-mui/Tag'

const Container = tw.span`inline-flex items-center h-auto `

interface TagProps extends ComponentProps<'span'> {
  href: string
  label?: string
  count?: number
}
export const TagWithCount = ({
  href,
  children,
  label,
  count,
  ...rest
}: TagProps) => (
  <Container {...rest}>
    <Tag tag="a" href={href}>
      {label}
    </Tag>
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

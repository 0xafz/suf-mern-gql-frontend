import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'

interface AvatarProps {
  to: string
  src: string
  alt: string
  styles?: {
    avatarRoot?: any
    img?: any
  }
}
const Avatar = (props: AvatarProps) => {
  const { src, alt, to, styles, ...rest } = props
  return (
    <Link
      href={to}
      css={[
        tw`min-w-[1rem] min-h-[1rem] rounded-md mr-2`,
        styles && styles.avatarRoot,
      ]}
      {...rest}
    >
      <Image
        src={src}
        alt={alt}
        css={[
          tw`text-transparent w-full h-full object-cover text-center rounded-[inherit]`,
          styles && styles.img,
        ]}
        layout="fill"
      />
    </Link>
  )
}

export default Avatar

import Image, { ImageProps } from 'next/image'

type AvatarImageProps = ImageProps

export function AvatarImage({
  width = 40,
  height = 40,
  alt,
  ...rest
}: AvatarImageProps) {
  return <Image width={width} height={height} alt={alt} {...rest} />
}

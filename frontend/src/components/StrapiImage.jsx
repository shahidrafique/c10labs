import Image from "next/image";

export default function StrapiImage({
  src,
  width,
  height,
  useNextImage,
  ...rest
}) {
  const fullSrc =
    (process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL) + src;
  return useNextImage ? (
    <Image src={fullSrc} width={width} height={height} {...rest} />
  ) : (
    <img src={fullSrc} {...rest} />
  );
}

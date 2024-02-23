export default function StrapiImage({ src, ...rest }) {
  return (
    <img
      src={(process.env.STRAPI_URL ?? process.env.NEXT_PUBLIC_STRAPI_URL) + src}
      {...rest}
    />
  );
}

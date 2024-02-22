export default function StrapiImage({ src, ...rest }) {
  return <img src={process.env.STRAPI_URL + src} {...rest} />;
}

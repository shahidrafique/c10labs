export default function strapiBuilder(query) {
  return (key) => (parser) => async () => {
    try {
      const res = await fetch(process.env.STRAPI_URL_GRAPHQL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const {
        data: { [key]: data },
      } = await res.json();
      return parser(data);
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}

export default function strapiBuilder(query) {
  return (key) => (parser) => async () => {
    try {
      const res = await fetch(process.env.STRAPI_URL_GRAPHQL, {
        method: "POST",
        cache: "no-store",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const r = await res.json();
      //console.log(r);
      const {
        data: { [key]: data },
      } = r;
      return parser(data);
    } catch (e) {
      console.log(e);
      return e;
    }
  };
}

async function redirects() {
  const res = await fetch(process.env.STRAPI_URL_GRAPHQL, {
    method: "POST",
    cache: "no-store",
    headers: { "content-type": "application/json" },
    body: `{"query": "query {redirects(pagination: {limit: 20}){data{attributes{to from}}}}"}`,
  });

  const { data } = await res.json();

  return (
    data?.redirects.data.map(
      ({ attributes: { to: destination, from: source } }) => ({
        source,
        destination,
        permanent: true,
      })
    ) ?? []
  );
}

module.exports = redirects;

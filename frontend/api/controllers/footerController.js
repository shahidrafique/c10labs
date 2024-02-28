import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import footer from "../queries/footer.gql";

const _getFooter = strapiBuilder(footer.loc.source.body)("footer")(
  attributesParser
);

export const getFooter = async () => {
  const data = await _getFooter();
  console.log("footer data", data);
  return data;
};

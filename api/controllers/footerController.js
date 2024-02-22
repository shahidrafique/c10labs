import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import footer from "../queries/footer.gql";

export const getFooter = strapiBuilder(footer.loc.source.body)("footer")(
  attributesParser
);

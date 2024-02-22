import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import home from "../queries/home.gql";

export const getHomePage = strapiBuilder(home.loc.source.body)("index")(
  attributesParser
);

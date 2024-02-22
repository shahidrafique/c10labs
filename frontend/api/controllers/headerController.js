import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import header from "../queries/header.gql";

export const getHeader = strapiBuilder(header.loc.source.body)("header")(
  attributesParser
);

import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import career from "../queries/careers.gql";

export const getCareerPage = strapiBuilder(career.loc.source.body)(
  "careersPage"
)(attributesParser);

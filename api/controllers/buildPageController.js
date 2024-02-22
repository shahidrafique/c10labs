import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import companies from "../queries/companies.gql";

export const getBuildPage = strapiBuilder(companies.loc.source.body)(
  "buildPage"
)(attributesParser);

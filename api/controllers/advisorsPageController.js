import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import advisors from "../queries/advisors.gql";

export const getAdvisorsPage = strapiBuilder(advisors.loc.source.body)(
  "advisorsPage"
)(attributesParser);

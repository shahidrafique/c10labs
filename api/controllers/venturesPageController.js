import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import ventures from "../queries/ventures.gql";

export const getVenturesPage = strapiBuilder(ventures.loc.source.body)(
  "venturesPage"
)(attributesParser);

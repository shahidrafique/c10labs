import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import process from "../queries/process.gql";

export const getProcessPage = strapiBuilder(process.loc.source.body)(
  "processPage"
)(attributesParser);

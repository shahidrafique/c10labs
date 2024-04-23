import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import companies from "../queries/companyHeader.gql";

export const getCompaniesPageHeader = strapiBuilder(companies.loc.source.body)(
  "companyHeader"
)(attributesParser);

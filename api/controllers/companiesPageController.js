import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import companies from "../queries/companies.gql";

export const getCompaniesPage = strapiBuilder(companies.loc.source.body)(
  "companyPage"
)(attributesParser);

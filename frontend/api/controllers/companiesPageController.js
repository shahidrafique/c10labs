import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import companies from "../queries/companies.gql";

export const getCompaniesPage = (slug = "") =>
  strapiBuilder(companies.loc.source.body.replace("%s", slug))(
    "companiesPages"
  )(attributesParser)();

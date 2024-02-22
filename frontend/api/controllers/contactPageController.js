import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import contact from "../queries/contact.gql";

export const getContactPage = strapiBuilder(contact.loc.source.body)(
  "contactPage"
)(attributesParser);

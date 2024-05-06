import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import upcoming from "../queries/upcoming.gql";

export const getUpcomingPage = strapiBuilder(upcoming.loc.source.body)(
  "upcomingPage"
)(attributesParser);

import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import team from "../queries/team.gql";

export const getTeamPage = strapiBuilder(team.loc.source.body)("ourTeam")(
  attributesParser
);

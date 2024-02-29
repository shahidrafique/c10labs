import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import jobs from "../queries/jobs.gql";

export const getJobs = strapiBuilder(jobs.loc.source.body)("posts")(
  attributesParser
);

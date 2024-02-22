import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import stories from "../queries/stories.gql";

export const getStoriesPage = strapiBuilder(stories.loc.source.body)(
  "storiesPage"
)(attributesParser);

import strapiBuilder from "../builders/strapiBuilder";
import attributesParser from "../parsers/attributesParser";
import post from "../queries/post.gql";

export const getPost = (id) =>
  strapiBuilder(post.loc.source.body.replace("%s", id))("posts")(
    attributesParser
  )();

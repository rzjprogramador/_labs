import { buildSchemaSync } from "type-graphql";

import Node from "./Node";

const schema = buildSchemaSync({
  resolvers: [],
});

export default schema;

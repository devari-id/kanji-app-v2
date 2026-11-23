import { defineRelations } from "drizzle-orm";
import * as schema from "./schema";

export const relations = defineRelations(schema, (r) => ({
  goiTable: {
    reibun: r.one.reibunTable({
      from: r.goiTable.id,
      to: r.reibunTable.goiId,
    }),
  },
}));

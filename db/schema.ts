import { InferSelectModel, relations } from "drizzle-orm";
import { pgTable, serial, text, timestamp, pgEnum } from "drizzle-orm/pg-core";

// Contacts table
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Types
export type Contact = InferSelectModel<typeof contacts>;

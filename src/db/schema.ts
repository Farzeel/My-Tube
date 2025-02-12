// db/schema/users.ts
import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  // Auto-increment primary key
  id: uuid("id").primaryKey().defaultRandom(),
  
  // Reference to Clerk's user ID
  clerkId: text("clerk_id").notNull().unique(),
  
  name: text("name").notNull(),
  profileImage: text("profile_image").notNull(),
  
  // Timestamps for record creation and last update
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (t)=>[uniqueIndex("clerk_id_idx").on(t.clerkId)]);
export const categories = pgTable("categories", {
  // Auto-increment primary key
  id: uuid("id").primaryKey().defaultRandom(),
  
  name: text("name").notNull(),
  
  description: text("description"),

  // Timestamps for record creation and last update
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow(),
}, (t)=>[uniqueIndex("name_idx").on(t.name)]);

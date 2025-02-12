// scripts/seed-categories.ts

import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryData = [
    "Technology",
    "Entertainment",
    "Sports",
    "Education",
    "comedy","Gaming", "News and politics", "people and blogs", "travel and events","pets and animal", "cars"
     ];
async function seedCategories() {



 
  const data = categoryData.map(name=>(

   { 
    name,
     "description" : `videos related to ${name.toLowerCase()}`
   }
  ))
  // Insert the category data into the database
  await db.insert(categories).values(data).execute();

  console.log("Categories seeded successfully!");
}

// Execute the seeding function
seedCategories()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error seeding categories:", error);
    process.exit(1);
  });

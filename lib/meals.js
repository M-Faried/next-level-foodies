import sql from "better-sqlite3";
const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug) => {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  // Take care not to use the slug directly in any query to the database.
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

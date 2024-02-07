// The following means that all the functions in this file will be treated as server actions
"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import slugify from "slugify";

export const shareMeal = async (formData) => {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };
  await saveMeal(meal);
  redirect(
    `meals/${slugify(meal.title, slugify(meal.title, { lower: true }))}`
  );
};

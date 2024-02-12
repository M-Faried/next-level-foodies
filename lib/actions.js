// The following means that all the functions in this file will be treated as server actions
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

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

  // Note: The following by itself and by default does only revalidate the mentioned
  // path and not its children.
  // revalidatePath("/meals");
  // revalidatePath("/meals", "page");

  // The following will revalidate meals and all of its children.
  // revalidatePath("/meals", "layout");

  revalidatePath("/meals");

  // Redirecting the user to the meals page.
  redirect("/meals");
};

import LoadingFallback from "@/components/loading-fallback";
import SingleMeal from "@/components/meals/single-meal";
import { getSingleMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// Note: Here is how to generate the metadata for the page dynamically.
export const generateMetadata = async ({ params }) => {
  // const meal = await getSingleMeal(params.mealSlug);
  // if (!meal) {
  //   notFound();
  // }
  return {
    title: params.mealsSlug,
    description: "The description of the meal:" + params.mealSlug,
  };
};

const MealDisplay = async ({ mealID }) => {
  const meal = await getSingleMeal(mealID);
  if (!meal) {
    // Note: Showing the closest not found in the tree. If there
    // weren't any, then it will display the error page.
    // Note: This will stop the rendering of the rest of
    // the component
    notFound();
  }
  return <SingleMeal meal={meal} />;
};

const MealDetailsPage = ({ params }) => {
  return (
    <Suspense
      fallback={<LoadingFallback message="Fetching Selected Meal..." />}
    >
      <MealDisplay mealID={params.mealsSlug} />
    </Suspense>
  );
};

export default MealDetailsPage;

import LoadingFallback from "@/components/loading-fallback";
import SingleMeal from "@/components/meals/single-meal";
import { getSingleMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
import { Suspense } from "react";

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

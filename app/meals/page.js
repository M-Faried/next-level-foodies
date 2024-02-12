import LoadingFallback from "@/components/loading-fallback";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";

// Note: You can either use "loading" reserved component name, or use suspense
// for better user experience and control on which part to display the
// the loading spinner at.

// Note: The following is different than the entire website. Each page can have
// its own metadata.
export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals shared by other contributors.",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<LoadingFallback message="Fetching Meals..." />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

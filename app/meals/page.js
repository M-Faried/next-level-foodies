import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./page.module.css";

// You can either use "loading" reserved component name, or use suspense
// for better user experience and control on which part to display the
// the loading spinner at.

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

const LoadingFallback = () => {
  return <h1 className={styles.loading}>Fetching Meals...</h1>;
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
        <Suspense fallback={<LoadingFallback />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

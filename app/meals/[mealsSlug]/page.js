import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const MealDetailsPage = ({ params }) => {
  const meal = getMeal(params.mealsSlug);

  if (!meal) {
    // Showing the closest not found in the tree. If there
    // weren't any, then it will display the error page.
    // NOTE: This will stop the rendering of the rest of
    // the component
    notFound();
  }

  // Replacing \n with html line breaks.
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={styles.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;

export default function MealPage({ params }) {
  return (
    <main>
      <h1>Meal Page</h1>
      <p>{params.meals}</p>
    </main>
  );
}

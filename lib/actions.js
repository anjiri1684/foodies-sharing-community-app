"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInavlidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInavlidText(meal.title) ||
    isInavlidText(meal.summary) ||
    isInavlidText(meal.instructions) ||
    isInavlidText(meal.creator) ||
    isInavlidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid inputs",
    };
  }
  await saveMeal(meal);
  redirect("/meals");
}

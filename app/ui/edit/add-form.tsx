"use client";

import { addPerson } from "@/app/lib/actions";

export default function AddForm() {
  return (
    <form action={addPerson}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="score">Score</label>
      <input type="number" id="score" name="score" />
      <label htmlFor="link">Link</label>
      <input type="url" id="link" name="link" />
      <button type="submit">Create Person</button>
    </form>
  );
}

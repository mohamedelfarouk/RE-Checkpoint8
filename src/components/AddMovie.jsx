import React, { useState } from "react";

function AddMovie({ onAdd }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovie = {
      title,
      desc,
      rating,
    };
    onAdd(newMovie);
    setTitle("");
    setDesc("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        margin: "5rem",
        display: "flex",
        justifyContent: "space-between",
        gap: "5rem",
        alignItems: "center",
      }}
    >
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </label>
      <label>
        Rating:
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovie;

// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.
import { useState } from "react";

let count = 1;

export default function App() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  function handleComment(e) {
    setInput(e.target.value);
  }

  function handleAddComment() {
    const comment = {
      id: count++,
      text: input,
    };

    setComments([...comments, comment]);
  }

  function handleRemove(id) {
    const filteredComments = comments.filter((comment) => comment.id != id);
    setComments(filteredComments);
  }

  return (
    <main>
      {comments.map((comment) => {
        return (
          <div>
            <p>{comment.text}</p>
            <button onClick={() => handleRemove(comment.id)}>Remove</button>
          </div>
        );
      })}

      <input type="text" onChange={handleComment} />
      <button onClick={handleAddComment}>Add</button>
    </main>
  );
}

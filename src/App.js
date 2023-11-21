import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
const initialCards = [
  {
    id: 1,
    front: "What is React?",
    back: "A library for managing user interfaces",
  },
  {
    id: 2,
    front: "Where do you make Ajax requests in React?",
    back: "The componentDidMount lifecycle event",
  },
  {
    id: 3,
    front: "What is JSX?",
    back: "Stands for JavaScript XML. It allows combining JavaScript with XML-like syntax.",
  },
  {
    id: 4,
    front: "What are React components?",
    back: "Components in React are independent, reusable pieces of the user interface that can be composed and managed separately. They consist of JavaScript code and can contain both logic and appearance.",
  },
  {
    id: 5,
    front: "How does React handle state?",
    back: "React uses state to manage data that can change over time and affect a component's behavior and appearance. When the state of a component changes, React automatically updates the interface to reflect those changes.",
  },
  {
    id: 6,
    front: "Explain the virtual DOM in React.",
    back: "The virtual DOM in React is an in-memory representation of the real DOM. React compares the virtual DOM with the actual DOM and only updates the parts of the actual DOM that have changed, which helps improve performance.",
  },
];

export default function App() {
  const [cardToShow, setCardToShow] = useState(null);
  const [isBackVisible, setIsBackVisible] = useState(false);
  const [newFront, setNewFront] = useState("");
  const [newBack, setNewBack] = useState("");

  const ShowRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * initialCards.length);
    const randomCard = initialCards[randomIndex];
    if (randomCard === cardToShow) {
      ShowRandomCard();
      return;
    }
    setCardToShow(randomCard);
    setIsBackVisible(false);
  };

  const ShowCardBack = () => {
    setIsBackVisible(!isBackVisible);
  };

  const AddCards = () => {
    const newCard = {
      id: initialCards.length + 1,
      front: newFront,
      back: newBack,
    };
    initialCards.push(newCard);
    setNewFront("");
    setNewBack("");
  };

  return (
    <div className="text">
      <input
        className="input-field"
        type="text"
        placeholder="Front"
        value={newFront}
        onChange={(e) => setNewFront(e.target.value)}
      />
      <input
        className="input-field"
        type="text"
        placeholder="Back"
        value={newBack}
        onChange={(e) => setNewBack(e.target.value)}
      />
      <button
        className="f text-cyan-300 text input-field w-auto hover:bg-cyan-200"
        onClick={AddCards}
      >
        <FaPlus />
      </button>
      <br />
      <button
        className="t font-bold text-cyan-500 m-5 hover:text-cyan-200 left-44 relative"
        onClick={ShowRandomCard}
      >
        Show Random Card
      </button>
      {cardToShow && (
        <div>
          <p
            onClick={ShowCardBack}
            className="s first-letter:text-cyan-500 first-letter:text-4xl text-cyan-300 text-3xl font-bold bg-rose-100 border-black border-2 h-96 w-1/4"
          >
            {isBackVisible ? cardToShow.back : cardToShow.front}
          </p>
        </div>
      )}
    </div>
  );
}

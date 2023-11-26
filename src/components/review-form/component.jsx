import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  raiting: 5,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: action.payload,
        text: DEFAULT_FORM_VALUE.text,
        raiting: DEFAULT_FORM_VALUE.raiting,
      };

    case "setText":
      return { ...state, text: action.payload };

    case "setRaiting":
      return { ...state, raiting: action.payload };

    default:
      return state;
  }
};

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="raiting">Raiting:</label>
        <input
          type="number"
          id="raiting"
          value={formValue.raiting}
          onChange={(event) =>
            dispatch({ type: "setRaiting", payload: event.target.value })
          }
        />
      </div>
    </div>
  );
};

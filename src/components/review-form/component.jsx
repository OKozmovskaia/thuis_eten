import { useReducer } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";

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
      <div className={styles.fieldContainer}>
        <label className={styles.formLabel} htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className={styles.formTextInput}
          value={formValue.name}
          onChange={(event) =>
            dispatch({ type: "setName", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.formLabel} htmlFor="text">
          Text
        </label>
        <input
          type="text"
          id="text"
          className={styles.formTextInput}
          value={formValue.text}
          onChange={(event) =>
            dispatch({ type: "setText", payload: event.target.value })
          }
        />
      </div>
      <div className={styles.fieldContainer}>
        <label className={styles.formLabel} htmlFor="raiting">
          Raiting
        </label>
        <Counter
          id="raiting"
          value={formValue.raiting}
          increment={() =>
            dispatch({ type: "setRaiting", payload: formValue.raiting + 0.5 })
          }
          decrement={() =>
            dispatch({ type: "setRaiting", payload: formValue.raiting - 0.5 })
          }
          min={1}
          max={5}
        />
      </div>
    </div>
  );
};

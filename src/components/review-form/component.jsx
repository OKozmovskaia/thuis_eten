const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  raiting: 5,
};

export const ReviewForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={DEFAULT_FORM_VALUE.name} />
      </div>
      <div>
        <label htmlFor="text">Text:</label>
        <input type="text" id="text" value={DEFAULT_FORM_VALUE.text} />
      </div>
      <div>
        <label htmlFor="raiting">Raiting:</label>
        <input type="number" id="raiting" value={DEFAULT_FORM_VALUE.raiting} />
      </div>
    </div>
  );
};

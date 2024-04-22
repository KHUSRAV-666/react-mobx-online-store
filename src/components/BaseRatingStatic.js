const BaseRatingStatic = ({ size, rate }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${"focus:outline-none"} ${
              index <= (rate)
                ? "text-x_green-500"
                : "text-x_neutral-700"
            }`}
          >
            <span className={`star ${size}`}>&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default BaseRatingStatic;

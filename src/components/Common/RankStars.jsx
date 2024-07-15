// eslint-disable-next-line react/prop-types
const RankStars = ({ starNumber, color = "black" | "white" }) => {
  return (
    <div className="d-flex gap-1 align-items-center">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index}>
          {index < starNumber ? (
            color === "white" ? (
              <img src="/images/icons/stare-fill-white.svg" />
            ) : (
              <img src="/images/icons/star.svg" />
            )
          ) : color === "white" ? (
            <img src="/images/icons/star-white.svg" />
          ) : (
            <img src="/images/icons/NoneFillstar.svg" />
          )}
        </div>
      ))}
    </div>
  );
};

export default RankStars;

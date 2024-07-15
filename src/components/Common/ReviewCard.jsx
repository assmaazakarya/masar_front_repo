import RankStars from "./RankStars";

function ReviewCard() {
  return (
    <div className="card p-3 mb-3 w-75 shadow-sm">
      <div className="d-flex flex-column  gap-2">
        <div className="d-flex align-items-center">
          <img
            src="/images/image 168.svg"
            alt="Reviewer"
            className="rounded-circle img-fluid"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
          <div className="text-center">
            <p className="m-0 fw-bold">Alisa P</p>
            <RankStars starNumber={5} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h6 className="card-title">Excellent course at a good pace</h6>
        <p className="card-text">
          The level was great for me. The content was very useful. I look
          forward to learning more about behavior change to apply it more in my
          work.
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;

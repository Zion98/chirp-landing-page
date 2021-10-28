import React from "react";
interface Details {
  profileName: string;
  twitterUserName: string;
  profileText: string;
  likes: string;
  dates: string;
  image: string;
}

const SecondCard = ({
  profileName,
  twitterUserName,
  profileText,
  likes,
  dates,
  image,
}: Details) => {
  return (
    <div className="secondcard">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="d-flex align-items-center">
            <img src={image} alt="twitter" />

            <div className="profile-names">
              <p>{profileName}</p>
              <p className="twitter-name">{twitterUserName}</p>
            </div>
          </div>
        </div>

        <i className="fab fa-twitter blue"></i>
      </div>

      <h2 className="gray font-normal font-one profile-text">{profileText}</h2>

      <div className="d-flex justify-content-between gray font-normal">
        <p className="">
          <i className="far fa-heart heart"></i> {likes}
        </p>
        <p className="">{dates}</p>
      </div>
    </div>
  );
};

export default SecondCard;

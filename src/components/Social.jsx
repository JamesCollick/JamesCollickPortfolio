import React from "react";

const SocialShare = [
  {
    iconName: "linked-in",
    link: "https://www.linkedin.com/in/jamescollick",
  },
  { iconName: "dribbble", 
    link: "https://dribbble.com/detroitsdevil" 
  },
  // { iconName: "twitter", 
  //   link: "https://twitter.com/" },
  // {
  //   iconName: "instagram",
  //   link: "https://www.instagram.com/",
  // },
  // {
  //   iconName: "tik-tok",
  //   link: "https://www.tiktok.com/",
  // },
];
const Social = () => {
  return (
    <div className="share">
      <span>Share:</span>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;

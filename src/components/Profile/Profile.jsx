import css from "./Profile.module.css";

import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaEllipsisVertical } from "react-icons/fa6";
import { SlUserFollow } from "react-icons/sl";

import profileData from "../../db/profile.json";

const Profile = () => {
  const {
    nickname,
    age,
    aesthetic_word,
    stats: { posts, followers, following },
    location,
    quote,
    img,
  } = profileData;

  return (
    <div className={css.wrap}>
      <div className={css.topProfile}>
        <button>
          <HiOutlineArrowNarrowLeft />
        </button>
        <p>{nickname}.www</p>
        <button>
          <IoNotificationsOutline />
        </button>
        <button>
          <FaEllipsisVertical />
        </button>
      </div>

      <div className={css.stats}>
        <div className={css.imageProfile}>
          <img width="200" src={img} alt={nickname} />
        </div>

        <div>
          <p>{posts}</p>
          <p>Posts</p>
        </div>
        <div>
          <p>{followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p>{following}</p>
          <p>Following</p>
        </div>
      </div>

      <p>⫯ {location}</p>
      <p>{age}een🦋</p>
      <p>•{aesthetic_word}•</p>
      <p>•{quote}•</p>

      <div className={css.nav}>
        <div>Following</div>
        <div>Message</div>
        <div>
          <SlUserFollow />
        </div>
      </div>
    </div>
  );
};

export default Profile;

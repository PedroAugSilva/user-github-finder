import { HiUsers } from "react-icons/hi";

const UserInfo = ({ userProfileImg, userName, userLogin, userFollowers, userFollowing }) => {
    return (
        <div className="profileInfo">
        <div className="profileName">
          <figure className="figure">
            <img src={userProfileImg} alt="alguma imagem" />
          </figure>
          <div className="nameArea">
            <h4>{userName}</h4>
            <span>{userLogin}</span>
          </div>
        </div>
        <div className="profileFollowes">
          <div className="followerArea">
            <span className="followers">
              <HiUsers className="icon-user" />
              {userFollowers} Followers
            </span>
            <span className="following">
              · {userFollowing} Following
            </span>
          </div>
        </div>
      </div>
    );
}

export default UserInfo;
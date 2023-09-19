import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { getFriends } from "../api/auth";
import { AuthContext } from "../provider/AuthPorvider";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";

const Messenger = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends(user.email).then((data) => setFriends(data));
  }, [user]);

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src={user.photoURL} alt="" />
                </div>
                <div className="name">
                  <h3>{user.displayName}</h3>
                </div>
              </div>

              <div className="icons">
                <div className="icon">
                  <BsThreeDots />
                </div>
                <div className="icon">
                  <FaEdit />
                </div>
              </div>
            </div>

            <div className="friend-search">
              <div className="search">
                <button>
                  <BiSearch />
                </button>
                <input
                  type="text"
                  className="form-control"
                  placeholder="search"
                />
              </div>
            </div>

            <div className="active-friends">
              <ActiveFriend />
            </div>

            <div className="friends">
              {friends && friends.length > 0
                ? friends.map((fd, indx) => (
                    <div key={indx} className="hover-friend">
                      <Friends friend={fd} />
                    </div>
                  ))
                : "No Friends"}
            </div>
          </div>
        </div>

        <RightSide />
      </div>
    </div>
  );
};

export default Messenger;

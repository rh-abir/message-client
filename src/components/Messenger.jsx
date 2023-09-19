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

  const [friends, setFriends] = useState([]);

  const [currentFriend, setCurrentFriend] = useState("");

  const [newMessage, setNewMessage] = useState("");

  const inputHandle = (e) => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(newMessage);
  };

  useEffect(() => {
    getFriends(user?.email).then((data) => setFriends(data));
  }, [user]);

  useEffect(() => {
    if (friends && friends.length > 0) {
      setCurrentFriend(friends[0]);
    }
  }, [friends]);

  console.log(user);

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img src={user?.photoURL} alt="" />
                </div>
                <div className="name">
                  <h3>{user?.displayName}</h3>
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
                    <div
                      key={indx}
                      onClick={() => setCurrentFriend(fd)}
                      className="hover-friend"
                    >
                      <Friends friend={fd} />
                    </div>
                  ))
                : "No Friends"}
            </div>
          </div>
        </div>
        {currentFriend ? (
          <RightSide
            currentFriend={currentFriend}
            inputHandle={inputHandle}
            newMessage={newMessage}
            sendMessage={sendMessage}
          />
        ) : (
          "Please selecet your friend"
        )}
      </div>
    </div>
  );
};

export default Messenger;

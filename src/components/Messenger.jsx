import { useContext, useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { getFriends } from "../api/auth";
import {
  ImageMessageSend,
  getMessage,
  messageSend,
} from "../api/messageAction";
import { AuthContext } from "../provider/AuthPorvider";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";

const Messenger = () => {
  const scrollRef = useRef();

  const { user, message, setMessage } = useContext(AuthContext);

  const [friends, setFriends] = useState([]);

  const [currentFriend, setCurrentFriend] = useState("");

  const [newMessage, setNewMessage] = useState("");

  // const [] = useState([]);

  const inputHandle = (e) => {
    setNewMessage(e.target.value);
  };

  // send message and get send message merge previous message
  const sendMessage = (e) => {
    e.preventDefault();

    const data = {
      senderName: user?.displayName,
      senderEmail: user.email,
      reseverEmail: currentFriend.email,

      message: {
        text: newMessage ? newMessage : "❤️",
        image: "",
      },
    };

    messageSend(data).then((mess) => setMessage((prev) => [...prev, mess]));
  };

  // get emuji and save new message
  const emojiSend = (emu) => {
    // console.log(emu);
    setNewMessage((pre) => `${pre}` + emu);
  };

  const imageSend = (event) => {
    if (event.target.files.length !== 0) {
      const imageName = event.target?.files[0];

      const formData = new FormData();
      formData.append("image", imageName);

      const url = `https://api.imgbb.com/1/upload?key=${"c60c31f11bc9fbfc3255c71c3908b8ee"}`;

      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          const imageUrl = imageData.data.display_url;
          const datas = {
            senderName: user?.displayName,
            senderEmail: user.email,
            reseverEmail: currentFriend.email,
            message: {
              text: "",
              image: imageUrl,
            },
          };

          ImageMessageSend(datas).then((mess) =>
            setMessage((prev) => [...prev, mess])
          );
          // console.log(datas);
        });

      // console.log(imageName);
    }
  };

  // get all user without current user
  useEffect(() => {
    getFriends(user?.email).then((data) => setFriends(data));
  }, [user]);

  // set a default friend
  useEffect(() => {
    if (friends && friends.length > 0) {
      setCurrentFriend(friends[0]);
    }
  }, [friends]);

  // get current user and friend message
  useEffect(() => {
    if (currentFriend && user) {
      const email = {
        myEmail: user.email,
        fdEmail: currentFriend.email,
      };

      // setMessage([]);

      getMessage(email).then((data) => {
        setMessage(data);
      });
    }
    // console.log(currentFriend.email);
  }, [currentFriend, user, setMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  console.log(message);

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
                      className={
                        currentFriend._id === fd._id
                          ? "hover-friend active"
                          : "hover-friend"
                      }
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
            message={message}
            scrollRef={scrollRef}
            emojiSend={emojiSend}
            imageSend={imageSend}
          />
        ) : (
          "Please selecet your friend"
        )}
      </div>
    </div>
  );
};

export default Messenger;

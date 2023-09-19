import { BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import FriendInfo from "./FriendInfo";
import Message from "./Message";
import MessageSend from "./MessageSend";

const RightSide = ({ currentFriend, inputHandle, newMessage, sendMessage }) => {
  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={currentFriend?.image} alt="" />
                    <div className="active-icon"></div>
                  </div>
                  <div className="name">
                    <h3>{currentFriend?.name}</h3>
                  </div>
                </div>

                <div className="icons">
                  <div className="icon">
                    <BiSolidPhoneCall />
                  </div>

                  <div className="icon">
                    <BiSolidVideo />
                  </div>

                  <div className="icon">
                    <label htmlFor="dot">
                      <HiDotsCircleHorizontal />
                    </label>
                  </div>
                </div>
              </div>

              <Message />
              <MessageSend
                inputHandle={inputHandle}
                newMessage={newMessage}
                sendMessage={sendMessage}
              />
            </div>
          </div>

          <div className="col-4">
            <FriendInfo currentFriend={currentFriend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

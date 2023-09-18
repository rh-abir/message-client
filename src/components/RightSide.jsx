import { BiSolidPhoneCall, BiSolidVideo } from "react-icons/bi";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import Message from "./Message";
import MessageSend from "./MessageSend";

const RightSide = () => {
  return (
    <div className="col-9">
      <div className="right-side">
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img
                      src="https://i.ibb.co/ZHYXD3r/10782719-19197274.jpg"
                      alt=""
                    />
                    <div className="active-icon"></div>
                  </div>
                  <div className="name">
                    <h3>Rakibul hasan</h3>
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
                    <HiDotsCircleHorizontal />
                  </div>
                </div>
              </div>

              <Message />

              <MessageSend />
            </div>
          </div>

          <div className="col-4">
            <h1>Friend information section</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;

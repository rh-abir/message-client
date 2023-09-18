import { BiSearch } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import ActiveFriend from "./ActiveFriend";
import Friends from "./Friends";
import RightSide from "./RightSide";

const Messenger = () => {
  console.log("hello");

  return (
    <div className="messenger">
      <div className="row">
        <div className="col-3">
          <div className="left-side">
            <div className="top">
              <div className="image-name">
                <div className="image">
                  <img
                    src="https://i.ibb.co/ZHYXD3r/10782719-19197274.jpg"
                    alt=""
                  />
                </div>
                <div className="name">
                  <h3>Rakib</h3>
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
              <div className="hover-friend active">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
              <div className="hover-friend">
                <Friends />
              </div>
            </div>
          </div>
        </div>

        <RightSide />
      </div>
    </div>
  );
};

export default Messenger;

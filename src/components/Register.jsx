import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="card-header">
          <h3>Register</h3>
        </div>

        <div className="card-body">
          <form action="">
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                placeholder="user name"
                className="form-control"
                id="username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                id="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="password"
                className="form-control"
                id="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                placeholder="confirm Password"
                className="form-control"
                id="confirmPassword"
              />
            </div>

            <div className="form-group">
              <div className="file-image">
                <div className="image"></div>

                <div className="file">
                  <label htmlFor="image">Upload Image</label>
                  <input type="file" className="form-control" id="image" />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input type="submit" className="btn" value="Register" />
            </div>

            <div className="form-group">
              <span>
                <Link to="/login">Login Your Account</Link>{" "}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

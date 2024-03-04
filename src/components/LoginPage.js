import React, { useRef } from "react";
import { group3img } from "../images";
import { Users } from "../constants/users";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const mailRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log(mailRef.current?.value);
    console.log(passRef.current?.value);
    const mail = mailRef.current?.value;
    const pass = passRef.current?.value;
    const user = Users.filter((user) => user.eMail === mail);
    console.log(user);
    if (user.length !== 0) {
      console.log("log");
      if (user[0].pass === pass) {
        navigate("/home");
      } else {
        alert("Password is incorrect! Please enter correct password!!");
      }
    } else {
      alert("Email is incorrect! Please enter correct mail-id!!");
    }
  };

  return (
    <div className="w-screen h-screen lg:py-20 md:py-60 py-32">
      <form
        className="flex justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="lg:w-2/6 w-3/5">
          <div className="flex justify-center">
            <img src={group3img} alt="group" />
          </div>
          <div className="text-center py-3">
            <p className="text-[#36A546CC]">We are electric</p>
          </div>
          <div className="py-9">
            <div>
              <input
                ref={mailRef}
                type="email"
                placeholder="E-Mail"
                className="w-full text-white rounded-full px-5 py-2 loginInput"
              />
            </div>
            <div className="py-5">
              <input
                ref={passRef}
                type="password"
                placeholder="Password"
                className="w-full rounded-full text-white px-5 py-2 loginInput"
              />
            </div>
          </div>
          <div>
            <button
              className="text-white loginButton rounded-full w-full py-2"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <div className="text-center py-4">
            <p className="text-[#36A546CC]">Forgot Password?</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

import Apple from "../../data/apple.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
function Signin() {
  const navigate = useNavigate();
  const clientId = process.env.REACT_APP_CLIENT;

  const handleCallback = (response) => {
    const user = jwtDecode(response.credential);

    localStorage.setItem("user", user.given_name || user.name);
    localStorage.setItem("picture", user.picture);

    navigate(`/${user.given_name}`);
  };

  useEffect(() => {
    /*global google */
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallback,
    });
    window.google.accounts.id.renderButton(document.getElementById("gsignin"), {
      theme: "custom",
      size: "medium",
      shape: "pill",
    });
    window.google.accounts.id.prompt();
  }, []);

  return (
    <div
      className="text-[black] sm:w-[385px] flex flex-col gap-5 "
      id="sign_in"
    >
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-4xl font-bold">Sign In</h1>
        <p>sign into your account</p>
      </div>
      <div className="flex gap-[25px] ">
        <button type="button" id="gsignin">
          {" "}
          Sign in with Google
        </button>
        <button
          type="button"
          className="px-4 py-2 text-xs rounded-2xl bg-white sm:w-[180px] h-[30px] text-gray-400 flex items-center  gap-[10px]"
        >
          {" "}
          <img src={Apple} alt="..." /> <span>Sign in with Apple</span>
        </button>
      </div>
    </div>
  );
}

export default Signin;

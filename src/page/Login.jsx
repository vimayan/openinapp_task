import Signin from "../component/Login/Signin";
import UserInput from "../component/Login/UserInput";

function Login() {
  return (
    <div
      className="bg-gray-100 h-[100vh] sm:flex gap-2 sm:gap-auto  "
      id="login"
    >
      <div className="board bg-[black] sm:w-5/12 xl:[588px] py-5 mb-10 sm:mb-0 sm:py-[50vh]">
        <span className="text-4xl lg:text-[72px] font-bold text-[white] ">
          Board.
        </span>
      </div>
      <div className="self-center max-h-[100vh] flex flex-col gap-4  items-center sm:mx-auto ">
        <div className="">
          <Signin />
        </div>
        <div className="">
          <UserInput />
        </div>
        <div className="">
          Don't have an account?{" "}
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="container text-[blue] text-start"
          >
            Register here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

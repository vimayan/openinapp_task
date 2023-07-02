function UserInput() {
  return (
    <div
      className=" bg-[white] rounded-md w-[340px] sm:w-[385px] flex flex-col gap-3 px-10 py-5 justify-center items-center "
      id="user_input"
    >
      <div className="container flex flex-col gap-1 text-start w-full">
        <label htmlFor="email" className="whitespace-nowrap">
          Email address
        </label>
        <input
          type="email"
          name="email"
          className="rounded-md p-1 ps-2 bg-gray-100 text-[black]"
          placeholder="enter mail"
        />
      </div>
      <div className="container flex flex-col gap-1 text-start">
        <label htmlFor="email" className="whitespace-nowrap">
          Email address
        </label>
        <input
          type="password"
          name="password"
          className="rounded-md p-1 ps-2 bg-gray-100"
          placeholder="enter password"
        />
      </div>
      <a
        href="http://"
        target="_blank"
        rel="noopener noreferrer"
        className="container text-[blue] text-start"
      >
        Forget Password
      </a>
      <button
        type="button"
        className="container  bg-[black] text-[white] rounded-md  h-[40px]"
      >
        Log In
      </button>
    </div>
  );
}

export default UserInput;

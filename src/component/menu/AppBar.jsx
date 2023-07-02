import InputGroup from "./InputGroup";
import Notification from "../../data/notification.svg";
import HamburgerMenu from "../../data/bars-solid.svg";
import Pic from "../../data/pic.jpg";

function AppBar({ handleToggle }) {
  const pic = localStorage.getItem("picture");

  return (
    <div className="bg-transparent text-[black] flex  justify-between gap-3 items-center">
      <div className="flex gap-3 md:gap-10">
        <button
          type="button"
          onClick={handleToggle}
          className={`lg:hidden relative left-1 w-5`}
        >
          <img src={HamburgerMenu} className="" alt="..." />
        </button>
        <div className=" text-lg md:text-2xl font-bold">Dashboard</div>
      </div>

      <div className="flex items-center gap-[20px]">
        <div>
          <InputGroup />
        </div>

        <img src={Notification} className="w-[18px] h-[20px]" alt="..." />
        <img
          className="w-[35px] h-[35px] rounded-full"
          src={pic || Pic}
          alt="..."
        />
      </div>
    </div>
  );
}

export default AppBar;

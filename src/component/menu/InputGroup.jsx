import Search from "../../data/Search.svg";

export default function InputGroup() {
  return (
    <div className="rounded-md shadow-sm relative">
      <input
        type="text"
        className="block container md:w-[180px] h-[30px] rounded-md border-0 px-2 md:px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        placeholder="search"
      />
      <button className="absolute top-0 right-0 h-full rounded-md border-0 bg-transparent py-0 px-3 text-gray-500 sm:text-sm">
        <img src={Search} className="mx-auto" alt="..." />
      </button>
    </div>
  );
}

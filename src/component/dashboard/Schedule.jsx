function Schedule() {
  return (
    <div
      className="xl:w-[480px] xl:h-[256px] rounded-2xl flex flex-col items-start ps-[50px] pe-[40px] py-[30px] gap-[25px] bg-[white] "
      id="Schedule"
    >
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[18px] font-bold">Today's schedule</h1>
        <span className="text-[12px] text-gray-500 whitespace-nowrap">See All {`>`}</span>
      </div>
      <div className="flex flex-col gap-[13px] text-nowrap">
        <div className="flex flex-col text-start ps-[15px] gap-[5px] border-l-[6px] border-green-400">
          <div className=" text-sm font-medium text-[DarkGray] ">
            Meeting with supplier from Kuta Bali
          </div>
          <div className=" text-xs text-gray-500">14.00-15.00</div>
          <div className=" text-xs text-gray-500">at Sunset Road,Kuta,Bali</div>
        </div>
        <div className="flex flex-col text-start ps-[15px] gap-[5px] border-l-[6px] border-blue-400">
          <div className=" text-sm font-medium text-[DarkGray]">
            Meeting with supplier from Kuta Bali
          </div>
          <div className=" text-xs text-gray-500">14.00-15.00</div>
          <div className=" text-xs text-gray-500">at Sunset Road,Kuta,Bali</div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

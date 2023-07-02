function Squares(props) {
  return (
    <div
      className={`text-[black] h-[120px] col-span-1 xl:w-[220px]  rounded-2xl  flex flex-col py-[20px] items-start justify-between bg-${props.bg}`}
      id="squares"
    >
      <img src={props.icon} alt="..." className="w-[20px] self-end me-[20px]" />
      <div className="flex flex-col  ">
        <div className="text-start text-sm font-medium ms-[25px]">
          {props.name}
        </div>
        <div className="text-start text-xl font-bold ms-[25px]">
          {props.value}
        </div>
      </div>
    </div>
  );
}

export default Squares;

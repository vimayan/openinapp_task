import Invalid from "../data/404 Error-amico.svg";

function InvalidRoute() {
  return (
    <>
      <div className="container m-12 h-[100vh]" id="invalidroute">
        <img src={Invalid} className="w-8/12 mx-auto h-[80vh]" alt="..." />
      </div>
    </>
  );
}

export default InvalidRoute;

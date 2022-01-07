import { useState } from "react";

export default function App() {
  return (
    <>
      <Component />
    </>
  );
}

function Component() {
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);
  // const endcss =
  // "order-1 bg-secondary bg-opacity-25 my-2 rounded-pill p-1 ps-2 text-end";
  let cnt = 0;
  function msghandling(e) {
    const newmsg = e.target.value;
    setmessage(newmsg);
  }
  function addmessage() {
    cnt++;
    cnt++;
    const newlist = [...list, message];
    setlist(newlist);
    setmessage("");
  }
  return (
    <div className="vh-100 ">
      <div className=" w-100 bg-dark bg-opacity-75 text-light d-flex py-2 align-items-center gap-2">
        <div>
          <h4 className="fs-3 ps-1"> MychatApp</h4>
        </div>
        <div className="fs-6 ">by VikramShinde 114-JH</div>
      </div>
      <div className="d-flex gap-2 ms-1 my-1 p-2 ">
        <div className="w-100">
          <input
            className="form-control "
            type="text"
            placeholder="type something..."
            value={message}
            onChange={msghandling}
          />
        </div>
        <div className="">
          <input
            className="btn btn-outline-info"
            type="button"
            value="Send"
            onClick={addmessage}
          />
        </div>
      </div>
      <div>
        {list.map((item) =>
          cnt % 2 === 0 ? (
            <div className=" border-1 bg-secondary bg-opacity-25 my-2 rounded-pill p-1 ps-2">
              {item}
            </div>
          ) : (
            <div className=" border-1 bg-secondary bg-opacity-25 my-2 rounded-pill p-1 pe-2 text-end">
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
}

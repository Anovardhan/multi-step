import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const App = () => {
  const [step, setstep] = useState(1);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [pincode, setpincode] = useState("");
  const handlenext = () => {
    setstep((pre) => pre + 1);
  };
  const handlepre = () => {
    setstep((pre) => pre - 1);
  };
  const formhandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="container">
        <form className="form-control m-4 d-block" onSubmit={formhandle}>
          {step === 1 && (
            <>
              <h1 className="fs-3  fst-italic">Personal information</h1>
              <label>Name : </label>
              <input
                type="text"
                placeholder="enter your name"
                className="m-1"
                required
                onChange={(e) => setname(e.target.value)}
                value={name}
                name="name"
              />
              <br></br>
              <label> Email : </label>
              <input
                type="email"
                placeholder="enter your email"
                className="m-2"
                required
                onChange={(e) => setemail(e.target.value)}
                value={email}
                name="name"
              />
              <br></br>
              <button className="btn btn-primary" onClick={handlenext}>
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="fs-3  fst-italic">Address</h1>
              <label> Adress : </label>
              <input
                type="text"
                placeholder="enter your name"
                className="m-1"
                required
                onChange={(e) => setaddress(e.target.value)}
                value={address}
                name="name"
              />
              <br></br>
              <label> pincode: </label>
              <input
                type="email"
                placeholder="enter your email"
                className="m-2"
                required
                onChange={(e) => setpincode(e.target.value)}
                value={pincode}
                name="name"
              />
              <br></br>
              <button className="btn btn-primary" onClick={handlenext}>
                submit
              </button>
              <button className="btn btn-primary float-end" onClick={handlepre}>
                previous
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <div className="text-center">
                <h1>Details</h1>
                <h1>Name : {name}</h1>
                <h1>Email : {email}</h1>
                <h1>Address : {address}</h1>
                <h1>Pincode : {pincode}</h1>
                <h1></h1>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};
export default App;

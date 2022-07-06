import { useState } from "react";
import "./App.css";
import { Pin } from "./Components/Pin";

function App() {
  const [otp, setOtp] = useState("");

  return (
    <div className="App">
      <Pin
        length={4}
        onChange={(value) => {
          setOtp(value);
        }}
      />
      <h1>OTP value is {otp}</h1>
    </div>
  );
}

export default App;

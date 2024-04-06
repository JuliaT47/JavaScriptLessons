import React, { useState } from "react";
import "./Home.css";
import RegistrationForm from "./RegistrationForm";
import AccountCard from "./AccountCard";

//Lesson 34
//1
// const Home = () => {
//   const [value, useValue] = useState(0);

//   const Change = () => {
//     useValue(value + 1);
//   };

//   return (
//     <div className="block">
//       <p>Counter</p>
//       <p>{value}</p>
//       <button onClick={Change}> Click </button>
//     </div>
//   );
// };
// export default Home;

//2
// const Home = () => {
//   const [name, setName] = useState("");
//   const [city, setCity] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [acc, setAcc] = useState(false);

//   const handleChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleChangeName = (e) => {
//     setName(e.target.value);
//   };

//   const handleChangeCity = (e) => {
//     setCity(e.target.value);
//   };

//   const handleChangePass = (e) => {
//     setPassword(e.target.value);
//   };

//   const onSubmitForm = () => {
//     setAcc(true);
//   };

//   return (
//     <div className="block">
//       {acc ? (
//         <AccountCard name={name} city={city} email={email} />
//       ) : (
//         <RegistrationForm
//           handleChangePass={handleChangePass}
//           handleChangeCity={handleChangeCity}
//           handleChangeName={handleChangeName}
//           handleChangeEmail={handleChangeEmail}
//           onSubmitForm={onSubmitForm}
//           name={name}
//           city={city}
//           password={password}
//           email={email}
//         />
//       )}
//     </div>
//   );
// };

// export default Home;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}> Натисни мене </button>
    </div>
  );
};
export default Counter;

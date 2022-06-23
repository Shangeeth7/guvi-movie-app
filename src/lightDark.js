import React, { createContext, useContext, useState } from "react";
import "./lightDark.css";

const themeLightDark = createContext();

function LightDarkExample() {
  const [mode, setMode] = useState("light");

  const styles = {
    background: mode === "light" ? "black" : "white",
  };
  return (
    <themeLightDark.Provider value={[mode, setMode]}>
      <div style={styles} className="App">
        <List setMode={setMode} mode={mode} />
      </div>
    </themeLightDark.Provider>
  );
}

const List = () => (
  <ul>
    <ListItem value="light 🌕" />
    <ListItem value="dark  🌑" />
  </ul>
);

const ListItem = ({ value }) => (
  <li>
    <Button value={value} />
  </li>
);

const Button = ({ value }) => {
  const [mode, setMode] = useContext(themeLightDark);
  const styles = {
    // background: mode === "light" ? "black" : "white" - overall BackGround
    // buttons's BackGround (Below this line )
    background: mode === "dark" ? "black" : "white",
    color: mode === "light" ? "black" : "white",
  };
  return (
    <button
      style={styles}
      onClick={() => setMode(value === "light 🌕" ? "light" : "dark")}
    >
      {value}
    </button>
  );
};

export { LightDarkExample };

// Using Props Drilling

// export default function App() {
//   const [mode, setMode] = useState("light");

//   const styles = {
//     background: mode === "light" ? "black" : "white",
//   };
//   return (
//     <div style={styles} className="App">
//       <List setMode={setMode} mode={mode} />
//     </div>
//   );
// }

// const List = ({ setMode, mode }) => (
//   <ul>
//     <ListItem value="light 🌕" setMode={setMode} mode={mode} />
//     <ListItem value="dark  🌑" setMode={setMode} mode={mode} />
//   </ul>
// );

// const ListItem = ({ value, setMode, mode }) => (
//   <li>
//     <Button value={value} setMode={setMode} mode={mode} />
//   </li>
// );

// const Button = ({ value, setMode, mode }) => {
//   const styles = {
//     // background: mode === "light" ? "black" : "white" - overall BackGround
//     // buttons's BackGround (Below this line )
//     background: mode === "dark" ? "black" : "white",
//     color: mode === "light" ? "black" : "white",
//   };
//   return (
//     <button
//       style={styles}
//       onClick={() => setMode(value === "light 🌕" ? "light" : "dark")}
//     >
//       {value}
//     </button>
//   );
// };

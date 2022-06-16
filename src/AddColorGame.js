import { useState } from "react";

export function AddColorGame() {
  const [color, setColor] = useState("red");
  let styles = {
    backgroundColor: color,
  };
  const colorList = ["blue", "red", "green", "black", "violet"];
  const [colorIn, setColorIn] = useState(colorList);

  return (
    <div>
      <input
        style={styles}
        onChange={(event) => {
          setColor(event.target.value);
        }}
        className="input-box"
        placeholder={"enter a color"}
        value={color}
      />
      <button onClick={() => setColorIn([...colorIn, color])}>Add Color</button>
      {colorIn.map((colorInList, index) => (
        // index and key are used to clear error in console
        <ColorBox key={index} colorBox={colorInList} />
      ))}
    </div>
  );
}

function ColorBox({ colorBox }) {
  const styles = {
    backgroundColor: colorBox,
    height: "25px",
    width: "250px",
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}

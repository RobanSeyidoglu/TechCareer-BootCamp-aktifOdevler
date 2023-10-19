import { useState } from "react";

function ResizableDiv() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  const handleSizeChange = () => {
    setWidth(width );
    setHeight(height);
  };

  return (
    <>
      <input type="number" placeholder="Width" value={width} />
      <input type="number" placeholder="Height" value={height} />
      <button onClick={handleSizeChange}>Change Size</button>
      <div
        style={{
          border: "1px solid black",
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
    </>
  );
}

export default ResizableDiv;

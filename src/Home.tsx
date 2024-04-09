import * as React from "react";

export default function Home(): React.ReactElement {
  const handleTest = () => {
    window.electronAPI.setTest("This is React Side");
  };

  return (
    <>
      <div>This is React Side</div>
      <button onClick={handleTest}>TEST</button>
    </>
  );
}

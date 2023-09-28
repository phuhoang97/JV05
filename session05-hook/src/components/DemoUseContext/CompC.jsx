import React, { useContext } from "react";
import { themeContext } from "./CompA";

function CompC() {
  const theme = useContext(themeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        perspiciatis commodi quis magni inventore accusantium quasi quia earum
        numquam voluptates.
      </p>
    </div>
  );
}

export default CompC;

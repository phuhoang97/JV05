import React from "react";
import { QRCode } from "antd";
import { Image } from "antd";

function DemoAntd() {
  return (
    <div>
      <QRCode errorLevel='H' value='https://www.google.com/' />
      <Image
        width={400}
        src='https://cdnimg.vietnamplus.vn/t660/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
      />
    </div>
  );
}

export default DemoAntd;

import {
  LogoAmazon,
  LogoFacebook,
  LogoGoogle,
  LogoMicrosoft,
  LogoTesla,
} from "src/assets";
import React from "react";
function Client() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6">
        <LogoAmazon className="mx-auto" />
      </div>
      <div className="w-1/6">
        <LogoMicrosoft className="mx-auto" />
      </div>
      <div className="w-1/6">
        <LogoTesla className="mx-auto" />
      </div>
      <div className="w-1/6">
        <LogoGoogle className="mx-auto" />
      </div>
      <div className="w-1/6">
        <LogoFacebook className="mx-auto" />
      </div>
    </div>
  );
}

export default Client;

import React, { useState } from "react";
import BaseIcon from "./BaseIcon";

const BaseLogo = () => {
  const [logoHover, setLogoHover] = useState(false);

  const logoMouseEnter = () => {
    setLogoHover(true);
  };

  const logoMouseLeave = () => {
    setLogoHover(false);
  };

  return (
    <div onMouseEnter={logoMouseEnter} onMouseLeave={logoMouseLeave}>
      {logoHover ? (
        <BaseIcon
          name="logo_h"
          classIcon="w-64 max-lg:w-48 max-[380px]:w-40 h-9 max-lg:h-8"
        />
      ) : (
        <BaseIcon
          name="logo"
          classIcon="w-64 max-lg:w-48 max-[380px]:w-40 h-9 max-lg:h-8"
        />
      )}
    </div>
  );
};

export default BaseLogo;

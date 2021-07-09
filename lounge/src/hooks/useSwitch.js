import React, { useState } from "react";

const useSwitch = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onClick = () => {
    setValue(!value);
  };
  return { value, onClick };
};

export default useSwitch;

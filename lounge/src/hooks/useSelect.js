import React, { useState } from "react";

const useSelect = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
  };

  return { value, onChange };
};

export default useSelect;

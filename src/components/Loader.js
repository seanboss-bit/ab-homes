import React, { useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  const [loading] = useState(true);

  return (
    <div className="loader">
      <ScaleLoader
        color={'#3f81ca'}
        loading={loading}
        size={150}
      />
    </div>
  );
};

export default Loader;

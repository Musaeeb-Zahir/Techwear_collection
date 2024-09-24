import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function Success() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        {loading === true ? (
          <PropagateLoader color="#36d7b7" />
        ) : (
          <div>
            <h2 className="text-3xl font-semibold mb-2 text-center">
              Order Successful!
            </h2>
            <p className="text-center">Order has been successsfully placed</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Success;

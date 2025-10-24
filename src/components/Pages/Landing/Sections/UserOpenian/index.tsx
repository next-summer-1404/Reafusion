import React from "react";
import Slider from "./Slider";

const UserOpenian = () => {
  return (
    <div className="pt-30 space-y-8">
      {/* section tapbar */}
      <h3 className="text-dark text-[24px] font-bold">
        مشتریان در باره ما چه می گویند ؟
      </h3>
      {/* section tapbar end */}
      {/* slider of the userOpenian about us */}
      <Slider />
      {/* slider of the userOpenian about us end */}
    </div>
  );
};

export default UserOpenian;

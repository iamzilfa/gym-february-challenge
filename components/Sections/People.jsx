import Image from "next/image";
import React from "react";
import Peop from "../../public/assets/images/people.jpeg";

const People = () => {
  return (
    <div>
      <Image src={Peop} alt="Peop" />
    </div>
  );
};

export default People;

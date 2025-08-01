import { useState } from "react";
import Accordian from "./Accordian";

const Men = () => {
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="font-bold text-xl mb-5">Filter Options</h1>
      {["Brand", "Mens", "Gender", "Kids"].map((title, index) => (
        // This is control component
        <Accordian
          key={index}
          title={title}
          open={open === index}
          setOpen={() => setOpen(index)}
        />
      ))}
    </div>
  );
};

export default Men;
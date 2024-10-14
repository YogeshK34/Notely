import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col">
      <Textarea
        variant="underlined"
        label={<span className="font-bold">Description</span>} // Making the label bold using a span
        labelPlacement="outside"
        placeholder="Enter your description"
        value={value}
        onValueChange={setValue}
        className="mb-0" // Ensure no margin at the bottom
      />
      {/* Display the value immediately below the Textarea without spacing */}
      <p className="text-default-500 text-small mt-0">: {value}</p>
    </div>
  );
}

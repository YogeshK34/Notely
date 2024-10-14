import React from "react";
import { Textarea } from "@nextui-org/react";

export default function App() {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col">
      <Textarea
        variant="underlined"
        label="Title"
        labelPlacement="outside"
        placeholder="Enter your title"
        value={value}
        onValueChange={setValue}
        className="mb-0 bg-zinc-500" // Ensure no margin at the bottom
      />
      {/* Display the value immediately below the Textarea without spacing */}
      <p className="text-default-500 text-small mt-0">Title: {value}</p>
    </div>
  );
}

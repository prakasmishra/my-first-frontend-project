"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputValue}`);
    // push(`/prediction/users`);
  };

  return (
    <div>
      <div>
        <h1>Enter your name ..</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Type your name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit" >Predict</button>
      </form>
    </div>
  )
}

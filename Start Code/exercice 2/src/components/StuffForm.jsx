import { useState } from "react";

export default function StuffForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, price });
    setName("");
    setPrice(0);
  };

  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" value={name} placeholder="Banana" onChange={(e) => setName(e.target.value)}/>

      <p>Stuff price</p>
      <input type="search" value={price} placeholder="15" onChange={(e) => setPrice(e.target.value)}/>

      <button type="submit">Add Stuff</button>
    </form>
  );
}

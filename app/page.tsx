"use client"
import { useEffect, useState } from "react";

export default function Home() {

  const [status, setStatus] = useState('Loading');

  const helloWorld = () => {
    fetch(`/api/python`, {
      method: "GET",
      headers: {
        'Content-Type': "application/json",
      },
    }).then(response => response.json())
      .then(data => { console.log(data); setStatus(data.message) })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    helloWorld();
  }, [])

  return (
    <main>
      {status}
    </main>
  );
}

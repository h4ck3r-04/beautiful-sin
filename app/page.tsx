"use client"
import { BASE_URL } from "@/constants/base";
import { useEffect, useState } from "react";

export default function Home() {

  const [status, setStatus] = useState('Loading');

  const helloWorld = () => {
    fetch(BASE_URL + `/api/python`, {
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
    <main className="min-h-screen">
      {status}
    </main>
  );
}

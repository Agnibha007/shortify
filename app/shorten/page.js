"use client"
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
      });
      
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };
      
      fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          seturl("");
          setshorturl("");
          setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
          console.log(result);
          alert(result.message);
        })
        .catch((error) => console.error(error));
    }
  return (
    <div className="mx-auto max-w-lg bg-blue-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs!</h1>
      <div className="flex flex-col gap-2">
        <input value={url} className="p-4 py-2 focus:outline-blue-600 rounded-md" type="text" placeholder="Enter your URL" onChange={e => {seturl(e.target.value)}}/>
        <input value={shorturl} className="p-4 py-2 focus:outline-blue-600 rounded-md" type="text" placeholder="Enter your prefered short URL" onChange={e => {setshorturl(e.target.value)}}/>
        <button className='bg-blue-500 hover:bg-blue-800 rounded-lg shadow-lg p-3 py-1 font-bold text-white my-3' onClick={generate}>Generate URL</button>
      </div>

      {generated && <code>
        Your Link: <Link className="hover:underline" target="_blank" href={generated}>{generated}</Link>
        </code>}

    </div>
  )
}

export default Shorten

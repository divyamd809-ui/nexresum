"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Example() {

    const [data, setData] = useState(null);

    useEffect(() => {
            const fetchData = async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
                console.log(response.data);


                setData(response.data);
            }
        fetchData()
    })



  return (
    <main>
          <h1>{data?.title}</h1>
          <h1>{data?.id}</h1>
    </main>
  );
}
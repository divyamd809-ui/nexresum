"use client";

import { useParams } from "next/navigation";



export default function DynamicPage() {

 const params = useParams();

  const {id} = params;
  return (
    <main>
      <h2 className="text- pt-20">{id}</h2>
    </main>
  );
}

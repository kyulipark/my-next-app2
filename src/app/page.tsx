"use client";

import { useRouter } from "next/navigation";

export default function Test () {
	const router = useRouter();
	
	const handleButtonClick = () => {
setTimeout(()=>{
  router.push("/test");
}, 1000)
	
	}

	return <button onClick={handleButtonClick}>클릭!</button>
}
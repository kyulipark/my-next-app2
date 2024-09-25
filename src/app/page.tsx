"use client";
import { useEffect } from "react";
import ClientExample from "./component/ClientExample";

// import { useRouter } from "next/navigation";

// export default function Test () {
// 	const router = useRouter();
	
// 	const handleButtonClick = () => {
// setTimeout(()=>{
//   router.push("/test");
// }, 1000)
	
// 	}

// 	return <button onClick={handleButtonClick}>클릭!</button>
// }

export default function Home() {
	console.log("안녕, 난 서버 컴포넌트야.")

	return <div className="p-8 m-4"> 안녕하세요! Next.js 입니다. 
	<ClientExample />
	</div>
}
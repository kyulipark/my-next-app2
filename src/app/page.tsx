import ProductList from "./_components/ProductList";

//SSG
export default async function Home(){

return(
	<div className="p-8 m-4">
	<h1>Sparta shop</h1>
		<ProductList />
  </div>
  )
}

export type product = {
	id: number;
	handle: string;
	availableForSale: boolean;
	isNew: boolean;
	title: string;
	description: string;
	descriptionHtml: string;
	options: {
	  name: string;
	  values: string[];
	}[];
	price: {
	  amount: string;
	  currencyCode: string;
	};
	images: string;
	seo: {
	  title: string;
	  description: string;
	};
	tags: string[];
	rating: number;
  };

// "use client";
// import { useEffect } from "react";
// import ClientExample from "./component/ClientExample";


// export default function Home() {

// 	useEffect(()=>{
// 		console.log("안녕, 난 클라이언트 컴포넌트야.")
// 	},[])

// 	return <div className="p-8 m-4"> 안녕하세요! Next.js 입니다. 
// 	<ClientExample />
// 	</div>
// }



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

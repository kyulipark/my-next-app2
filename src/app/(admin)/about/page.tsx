import { Metadata } from "next";
import Link from "next/link"

// export const metadata: Metadata = {
//     title: "안녕하세요 About App 입니다.",
//     description: "Generated by create next app",
//   };

type Props = {
    params: {
        id: string
    }
}

export const generateMetadata = ({params}:Props) => {
    return{
        title: "안녕하세요 About App 입니다.",
        description: "Generated by create next app",
    }
}

const AboutPage = () =>{
    return(
    <>
    <Link href={"/about2"}>about2로 가!</Link>
    </>
)}

export default AboutPage
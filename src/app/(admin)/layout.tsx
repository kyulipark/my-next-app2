"use client"
import { useEffect } from "react"

const AdminLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => {
    useEffect(()=>{
        console.log("렌더링 시 실행됩니다.")
    },[])

    return(
    <>
    <h1>admin Page 입니다!</h1>
    {children}
    </>
)}

export default AdminLayout
import NavBar from "@/components/NavBar";
import React from "react";


export type LayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({children}: LayoutProps) {
  return <>
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar/>
        <div>{children}</div>
      </main>
    </main>
  </>
}
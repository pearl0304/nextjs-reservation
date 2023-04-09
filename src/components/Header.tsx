"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";
import SearchBar from "@/components/SearchBar";

export default function Header() {

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          <div className="flex justify-center align-middle">
            <h3>Find your table for any occasion</h3>
            <div className="w-12 h-12"><img src='/images/rabbit.png'/></div>
          </div>
        </h1>
        <SearchBar/>
      </div>
    </div>


  )
}
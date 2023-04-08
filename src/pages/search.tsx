import Header from "@/components/search/Header";
import SideBar from "@/components/search/SideBar";
import RestaurantCard from "@/components/search/RestaurantCard";
import Seo from "@/common/Seo";

export default function Search() {
  return (
    <>
      <Seo title="SEARCH"/>
      <Header/>
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SideBar/>
        <div className="w-5/6">
          <RestaurantCard/>
        </div>
      </div>
    </>
  )
}
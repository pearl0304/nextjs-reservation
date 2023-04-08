import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import Seo from "@/common/Seo"

export default function Home() {
  return (
    <>
      <Seo title="HOME"/>
      <main>
        <Header/>
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          <RestaurantCard/>
        </div>
      </main>
    </>
  )
}

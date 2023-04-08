import RestaurantNavBar from "@/components/restaurant/RestaurantNavBar";
import Title from "@/components/restaurant/Title";
import Rank from "@/components/restaurant/Rank";
import Description from "@/components/restaurant/Description";
import Images from "@/components/restaurant/Images";
import Reviews from "@/components/restaurant/Reviews";
import ReservationCard from "@/components/restaurant/ReservationCard";
import RestaurantLayout from "@/components/restaurant/RestaurantLayout";
import Seo from "@/common/Seo";

export default function details() {
  return (
    <RestaurantLayout>
      <Seo title="DETAIL"/>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar/>
        <Title/>
        <Rank/>
        <Description/>
        <Images/>
        <Reviews/>
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard/>
      </div>
    </RestaurantLayout>
  )
}
import RestaurantNavBar from "@/components/restaurant/RestaurantNavBar";
import FoodMenu from "@/components/restaurant/FoodMenu";
import RestaurantLayout from "@/components/restaurant/RestaurantLayout";
import Seo from "@/common/Seo";

export default function Menu() {
  return (
    <RestaurantLayout>
      <Seo title="MENU"/>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar/>
        <FoodMenu/>
      </div>
    </RestaurantLayout>
  )
}
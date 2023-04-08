import Header from "@/components/restaurant/Header";
import {LayoutProps} from "@/common/RootLayout";


export default function RestaurantLayout({children}: LayoutProps) {
  return (
    <main>
      <Header/>
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  )
}
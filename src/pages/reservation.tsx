import NavBar from "@/components/NavBar";
import Header from "@/components/reservation/Header";
import Form from "@/components/reservation/Form";
import Seo from "@/common/Seo";

export default function Reservation() {
  return (
    <>
      <Seo title="RESERVATION"/>
      <div className="border-t h-screen">
        <div className="py-9 w-3/5 m-auto">
          <Header/>
          <Form/>
        </div>
      </div>
    </>
  )
}
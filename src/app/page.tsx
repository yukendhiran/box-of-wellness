import { Doodle } from "@/components/Doodle";
import { FoodItems } from "@/components/FoodItems";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Offers from "@/components/Offers";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <div className="relative bg-background">
      <Doodle />
      <div className="relative ">
        <Hero />
        <div className="flex flex-col z-20 mx-8 lg:mx-12 gap-y-12">
          <Offers />
          <Plans />
          <FoodItems />
        </div>
        <Footer />
      </div>
    </div>
  );
}

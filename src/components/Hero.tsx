import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex flex-col items-center h-screen justify-center align-middle ]">
      <div className="text-5xl bg-background lg:text-9xl text-primary flex flex-col items-center justify-center">
        <span className="flex">BOX OF</span>
        <br />
        <span> WELLNESS</span>
      </div>

      <div className="mt-10">
        <Link href={"https://wa.me/916374759268"}>
          <Button variant={"secondary"}>Contact</Button>
        </Link>
      </div>
    </div>
  );
}

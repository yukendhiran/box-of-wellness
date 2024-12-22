"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { offerQuery } from "@/lib/query";
import { Offer } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Offers() {
  return (
    <div>
      <div className="fixed bottom-6  right-10 ">
        <OfferCard />
      </div>
    </div>
  );
}

function OfferCard() {
  const [offer, setOffer] = useState<Offer[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const offers = await client.fetch(offerQuery);

        if (offers) {
          setOffer(offers);

          console.log(offers);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex">
        <Image
          src={"./arrow.svg"}
          alt="arrow"
          width={100}
          height={100}
          className=" -rotate-45  "
        />
      </div>
      <div className="flex gap-3">
        <Link href={"https://wa.me/916374759268"}>
          <Icon
            icon="uil:whatsapp-alt"
            width="38"
            height="38"
            className="text-primary"
          />
        </Link>
        <Popover>
          <PopoverTrigger>
            <Icon
              icon="iconamoon:discount-fill"
              width="38"
              height="38"
              className="text-primary"
            />
          </PopoverTrigger>
          <PopoverContent>
            {offer && (
              <div>
                <div>{offer[0].name}</div>
                <div>{offer[0].description}</div>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}

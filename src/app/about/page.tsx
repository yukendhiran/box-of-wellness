"use client";
import { aboutQuery } from "@/lib/query";
import { About } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [about, setAbout] = useState<About[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const about = await client.fetch(aboutQuery);

        if (about) {
          setAbout(about);

          console.log(about);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 flex justify-center">
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </header>
      <main>
        <h1 className="text-3xl text-foreground font-bold mb-4 text-center">
          About Our Company
        </h1>
        {about && (
          <p className="text-lg text-foreground leading-relaxed max-w-2xl mx-auto">
            {about[0].about}
          </p>
        )}
      </main>
    </div>
  );
}

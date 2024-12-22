"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { plansQuery } from "@/lib/query";
import { Plan } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

export function Plans() {
  const [plans, setPlans] = useState<Plan[]>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const plan = await client.fetch(plansQuery);

        if (plan) {
          setPlans(plan);

          console.log(plan);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch once on mount

  return (
    <div>
      <div className="text-4xl lg:text-6xl bg-background">Plans</div>
      <div className="flex overflow-x-auto space-x-6 mt-10">
        {plans &&
          plans.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col min-w-[250px] md:min-w-[320px] lg:min-w-[350px]"
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-3xl font-bold mb-2">₹{plan.price}/week</p>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <ul className="mb-6 flex-grow">
                  {plan.details.map((feature, i) => (
                    <li key={i} className="flex items-center mb-2">
                      <Badge variant="secondary" className="mr-2">
                        ✓
                      </Badge>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Subscribe</Button>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}

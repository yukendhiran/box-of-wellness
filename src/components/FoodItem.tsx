import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
interface FoodItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  dietType: "veg" | "non-veg";
  calories: number;
}

export function FoodItem({
  name,
  description,
  price,
  image,

  dietType,
  calories,
}: FoodItemProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        {image && (
          <Image
            src={urlFor(image).url()}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{name}</span>
          <Badge variant={dietType === "veg" ? "default" : "destructive"}>
            {dietType}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">₹{price.toFixed(2)}</span>
          <div className="flex gap-2">
            {/* <Badge variant="outline">{category}</Badge> */}
            <Badge variant="secondary">{calories} cal</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

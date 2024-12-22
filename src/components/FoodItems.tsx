"use client";
import { categoryQuery, productQuery } from "@/lib/query";
import { Category, GroupedProduct, Product } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { FoodItem } from "./FoodItem";

export function FoodItems() {
  const [categories, setCategories] = useState<Category[]>([]); // Changed to an array to hold categories
  const [products, setProducts] = useState<Product[]>([]); // Changed to an array to hold products
  const [catProdGroup, setCatProdGroup] = useState<GroupedProduct[]>([]); // Set catProdGroup as an array

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await client.fetch(categoryQuery);
        const productsData = await client.fetch(productQuery);

        if (categoriesData) {
          setCategories(categoriesData); // Store categories data
        }
        if (productsData) {
          setProducts(productsData); // Store products data
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Fetch once on mount

  useEffect(() => {
    if (categories.length > 0 && products.length > 0) {
      const groupedProducts = categories.map((category) => {
        const categoryProducts = products.filter(
          (product) => product.category._ref === category._id,
        );
        return {
          category,
          products: categoryProducts,
        };
      });
      setCatProdGroup(groupedProducts); // Update grouped data in state
    }
  }, [categories, products]); // Re-run when categories or products are updated

  return (
    <>
      <div className="text-4xl lg:text-6xl bg-background">Food</div>
      <div className="flex flex-col w-full">
        {catProdGroup.length > 0 &&
          catProdGroup.map(({ category, products }) => (
            <div key={category._id} className="my-6">
              <h2 className="text-2xl font-bold bg-background">
                {category.name}
              </h2>
              <p className="text-lg bg-background">{category.description}</p>
              <div className="flex overflow-x-auto space-x-6 mt-10">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product._id}
                      className="flex flex-col min-w-[230px] md:min-w-[250px] lg:min-w-[260px]"
                    >
                      <FoodItem
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        image={product.image}
                        calories={product.calories}
                        dietType={product.dietType}
                      />
                    </div>
                  ))
                ) : (
                  <p>No products available in this category</p>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

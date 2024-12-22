export interface About {
  about: string; // Matches the "about" field in your Sanity schema
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;

  image: string; // Replace `any` with the appropriate type if you use a specific Sanity image type
  category: {
    _ref: string;
  };
  dietType: "veg" | "non-veg";
  calories: number;
  slug: {
    current: string;
  };
}

export interface Category {
  _id: string;
  name: string;
  description?: string; // Optional, as it is not required in the schema
  slug: {
    current: string;
  };
}

export interface GroupedProduct {
  category: Category;
  products: Product[];
}

export interface Offer {
  _id: string;
  name: string;
  description: string;
  slug: {
    current: string;
  };
}

export interface Plan {
  _id: string;
  name: string;
  price: string;
  description: string;
  details: string[]; // An array of strings for the details
  slug: {
    current: string;
  };
}

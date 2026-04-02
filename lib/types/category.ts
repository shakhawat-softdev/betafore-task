/**
 * Category-related types
 */

export interface Category {
  id: number;
  name: string;
}

export interface CategoryProps {
  categories: Category[];
}

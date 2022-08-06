import { Product } from "../api/products"

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <a
    href={product.url}
    className="border border-solid mx-2 p-4 rounded-sm w-1/5 text-center hover:bg-lime-200/10 relative hover:-translate-y-1 transition"
  >
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>{product.type}</p>
  </a>
);
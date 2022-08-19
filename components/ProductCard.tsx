import Image from 'next/image'
import { Product } from "../api/products"
import { ProductBadge } from './ProductBadge';

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <a
    href={product.url}
    className="shadow shadow-slate-300 flex flex-col justify-between border border-solid border-md border-slate-300 bg-zinc-800 mx-2 p-4 rounded-sm w-5/6 sm:w-2/5 lg:w-1/5 text-center hover:bg-zinc-600 relative hover:-translate-y-1 transition pt-4 mb-2"
  >
    <div>
      <Image
        src={`/${product.img}`}
        alt={product.type}
        width={72}
        height={72}
      />
    </div>
    <h3 className="font-bold text-lg pt-6">
      {product.name}
      <ProductBadge status={product.status} />
    </h3>
    <p>{product.description}</p>
    <p className="text-sm capitalize">{product.type}</p>
  </a>
);
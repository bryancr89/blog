import Image from 'next/image'
import { Product, Status } from "../api/products"
import { ProductBadge } from './ProductBadge';

type ProductCardProps = {
    product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => (
  <a
    href={product.url}
    className="shadow shadow-slate-300 flex flex-col justify-between border border-solid border-slate-300 bg-slate-200 mx-2 p-4 rounded-sm w-1/5 text-center hover:bg-slate-100 relative hover:-translate-y-1 transition pt-4"
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
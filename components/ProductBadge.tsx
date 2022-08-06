import { Status } from "../api/products"

type ProductBadgeProps = {
    status: Status
}

export const ProductBadge = ({ status }: ProductBadgeProps) => {
  if (status === Status.DONE) return null;
  return <span className="border rounded-md bg-blue-600 text-xs p-1 relative -top-1 ml-1 text-white">{status}</span>;
}
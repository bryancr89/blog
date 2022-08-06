// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Product = {
  name: string;
  description: string;
  img: string;
  url: string;
  type: 'blog' | 'handbook' | 'software' | 'writing'
};

export const getProducts = (): Product[] => [
  { name: 'Newsletter',  type: 'writing', description: '', img: '', url: ''},
  { name: 'Scaling React Application', type: 'handbook', description: '', img: '', url: ''}
]

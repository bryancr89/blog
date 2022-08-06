export enum Status {
  NEW = "new",
  COMING_SOON = 'Comming Soon',
  DONE = 'Done'
}

export type Product = {
  name: string;
  description: string;
  img: string;
  url: string;
  type: 'blog' | 'handbook' | 'software' | 'writing',
  status: Status
};

export const getProducts = (): Product[] => [
  {
    name: "Newsletter",
    type: "writing",
    description: "",
    img: "newsletter.png",
    url: "",
    status: Status.DONE,
  },
  {
    name: "Scaling React Application",
    type: "handbook",
    description: "",
    img: "react.png",
    url: "",
    status: Status.COMING_SOON,
  },
];

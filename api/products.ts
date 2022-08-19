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
  type: 'blog' | 'handbook' | 'software' | 'writing' | 'coaching',
  status: Status
};

export const getProducts = (): Product[] => [
  {
    name: "Mentoring",
    type: "coaching",
    description: "",
    img: "code-mentor.png",
    url: "/mentoring",
    status: Status.DONE,
  },
  {
    name: "Scaling React Application",
    type: "handbook",
    description: "",
    img: "react.svg",
    url: "/scaling-react-app",
    status: Status.COMING_SOON,
  },
];

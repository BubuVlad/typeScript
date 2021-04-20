export interface ProductProps {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
}

export interface ProductData {
  [key:string]: string 
}

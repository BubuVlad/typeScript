import { ProductProps } from "./interfaces";

export class Product {
  private id: number;
  public name: string;
  public image: string;
  public description: string;
  public type: string;
  constructor(props:ProductProps) {
    this.id = props.id;
    this.name = props.name;
    this.image = props.image;
    this.description = props.description;
    this.type = props.type;
  }
}
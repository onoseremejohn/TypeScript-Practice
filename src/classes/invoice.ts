import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes
export default class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

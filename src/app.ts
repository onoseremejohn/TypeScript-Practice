import Invoice from "./classes/invoice.js";
import Payment from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import ListTemplate from "./classes/ListTemplate.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("tope", "web work", 250);
// docTwo = new Payment("mario", "plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne, docTwo);
// console.log(docs);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 410);

// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo);

// console.log(invoices);

// list template instance
const ul = document.querySelector(".item-list") as HTMLUListElement;
const list = new ListTemplate(ul);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = form.querySelector("#type") as HTMLSelectElement;
const tofrom = form.querySelector("#tofrom") as HTMLInputElement;
const details = form.querySelector("#details") as HTMLInputElement;
const amount = form.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "start");
});

const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "onos", age: 21 });

// console.log(docOne.name);

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: ResourceType;
  data: T;
}

const docThree: Resource<object> = {
  uid: 0,
  resourceName: "sso",
  data: { name: "Spider Mam" },
  resourceType: ResourceType.FILM,
};
const docFour: Resource<string[]> = {
  uid: 1,
  resourceName: "fiele",
  data: ["onos", "john"],
  resourceType: ResourceType.PERSON,
};

// console.log(docFour);
let arr = ["onos", 21, true];
let tup: [string, number, boolean] = ["onos", 7, false];
tup[0] = "ij";

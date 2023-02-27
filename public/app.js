import Invoice from "./classes/invoice.js";
import Payment from "./classes/payments.js";
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
const ul = document.querySelector(".item-list");
const list = new ListTemplate(ul);
const form = document.querySelector(".new-item-form");
const type = form.querySelector("#type");
const tofrom = form.querySelector("#tofrom");
const details = form.querySelector("#details");
const amount = form.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "start");
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
};
let docOne = addUID({ name: "onos", age: 21 });
const myObj = { uid: 0, resourceName: "sso" };

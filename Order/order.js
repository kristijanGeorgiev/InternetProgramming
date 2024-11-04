"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", setupInfrastructure);
let orders = [];
function setupInfrastructure() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield loadData();
        orders = data;
        const nameSorter = document.getElementById("sort-name");
        nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
        const idSort = document.getElementById("sort-id");
        idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
        const modal = document.getElementById("items-details");
        modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", () => {
            modal === null || modal === void 0 ? void 0 : modal.classList.add("hidden");
        });
        displayOrders(orders);
    });
}
const nameSorterFunction = (first, second) => first.customer_name.localeCompare(second.customer_name);
const idSorterFunction = (first, second) => first.order_id.localeCompare(second.order_id);
const SortByName = () => {
    const sortedOrders = orders.sort(nameSorterFunction);
    displayOrders(sortedOrders);
};
const SortById = () => {
    const sortedOrders = orders.sort(idSorterFunction);
    displayOrders(sortedOrders);
};
const loadData = () => __awaiter(void 0, void 0, void 0, function* () {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data9/order.json";
    const response = yield fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = yield response.json();
    return data;
});
const displayOrders = (orders) => {
    const container = document.getElementById("order-container");
    if (!container)
        return;
    container.innerHTML = "";
    for (const order of orders) {
        const orderRow = generateOrderRow(order);
        container.appendChild(orderRow);
    }
};
const generateOrderRow = (order) => {
    const row = document.createElement("div");
    row.classList.add("order-row");
    const idCell = document.createElement("div");
    idCell.classList.add("order-data", "order-order_id");
    idCell.innerHTML = order.order_id;
    row.appendChild(idCell);
    const customerCell = document.createElement("div");
    customerCell.classList.add("order-data", "order-customer_name");
    customerCell.innerHTML = order.customer_name;
    row.appendChild(customerCell);
    const order_dateCell = document.createElement("div");
    order_dateCell.classList.add("order-data", "order-order_date");
    order_dateCell.innerHTML = order.order_date;
    row.appendChild(order_dateCell);
    const itemsCell = document.createElement("div");
    itemsCell.classList.add("order-data", "order-items");
    itemsCell.innerHTML = 'View Items';
    itemsCell.addEventListener("click", () => {
        const itemmodal = document.getElementById("items");
        itemmodal.classList.remove("hidden");
        const modalHeader = document.querySelector("#items-details-content h2");
        modalHeader.innerText = `Selected items for ${order.customer_name}`;
        const itemsList = document.getElementById("items-details-list");
        itemsList.innerHTML = "";
        for (const items of order.items) {
            const itemsItem = document.createElement("li");
            itemsItem.innerText = `${items.item_id} (${items.item_name} ${items.quantity} ${items.price} ${items.totalamount} ${items.status})`;
            itemsList.appendChild(itemsItem);
        }
    });
    row.appendChild(itemsCell);
    return row;
};

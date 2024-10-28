"use strict";
document.addEventListener("DOMContentLoaded", setupInfrastructure);
let orders = [];
async function setupInfrastructure() {
    const data = await loadData();
    orders = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter === null || nameSorter === void 0 ? void 0 : nameSorter.addEventListener("click", SortByName);
    const idSort = document.getElementById("sort-id");
    idSort === null || idSort === void 0 ? void 0 : idSort.addEventListener("click", SortById);
    const modal = document.getElementById("orderdetail-details");
    modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", () => {
        modal === null || modal === void 0 ? void 0 : modal.classList.add("hidden");
    });
    displayOrders(orders);
}
const nameSorterFunction = (first, second) => first.customer.localeCompare(second.customer);
const idSorterFunction = (first, second) => first.id - second.id;
const SortByName = () => {
    const sortedOrders = orders.sort(nameSorterFunction);
    displayOrders(sortedOrders);
};
const SortById = () => {
    const sortedOrders = orders.sort(idSorterFunction);
    displayOrders(sortedOrders);
};
const loadData = async () => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data3/orders.json";
    const response = await fetch(dataUri);
    if (!response.ok) {
        throw new Error("The data is not there");
    }
    const data = await response.json();
    return data;
};
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
    idCell.classList.add("order-data", "order-id");
    idCell.innerHTML = order.id.toString();
    row.appendChild(idCell);
    const customerCell = document.createElement("div");
    customerCell.classList.add("order-data", "order-customer");
    customerCell.innerHTML = order.customer;
    row.appendChild(customerCell);
    const totalpriceCell = document.createElement("div");
    totalpriceCell.classList.add("order-data", "order-totalprice");
    totalpriceCell.innerHTML = order.totalprice;
    row.appendChild(totalpriceCell);
    const OrderDetailsCell = document.createElement("div");
    OrderDetailsCell.classList.add("orderdetail-data", "order-orderdetails");
    OrderDetailsCell.addEventListener("click", () => {
        const modal = document.getElementById("orderdetails-details");
        modal.classList.remove("hidden");
        const modalHeader = document.querySelector("#orderdetails-details-content h2");
        modalHeader.innerText = `Selected OrderDetail for ${order.customer}`;
        const orderdetailList = document.getElementById("orderdetails-details-list");
        orderdetailList.innerHTML = "";
        for (const orderdetails of order.OrderDetails) {
            const orderdetailItem = document.createElement("li");
            orderdetailItem.innerText = `${orderdetails.Product} (${orderdetails.Quantity} ${orderdetails.Price})`;
            orderdetailList.appendChild(orderdetailItem);
        }
    });
    row.appendChild(OrderDetailsCell);
    return row;
};

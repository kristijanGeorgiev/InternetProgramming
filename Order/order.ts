interface Items {
    item_id: string;
    item_name: string;
    quantity: number;
    price: number;
    totalamount: number;
    status: string;
}
interface Order {
    order_id: string;
    customer_name: string;
    order_date: string;
    items: Items[];
}
type OrderSorter = (first: Order, second: Order) => number;

document.addEventListener("DOMContentLoaded", setupInfrastructure);

let orders: Order[] = [];

async function setupInfrastructure() {
    const data = await loadData();
    orders = data;
    const nameSorter = document.getElementById("sort-name");
    nameSorter?.addEventListener("click", SortByName);

    const idSort = document.getElementById("sort-id");
    idSort?.addEventListener("click", SortById);

    const modal = document.getElementById("items-details");
    modal?.addEventListener("click", () => {
        modal?.classList.add("hidden");
    });
    displayOrders(orders);
}

const nameSorterFunction: OrderSorter = (first, second) => first.customer_name.localeCompare(second.customer_name);
const idSorterFunction: OrderSorter = (first, second) => first.order_id.localeCompare(second.order_id);

const SortByName = () => {
    const sortedOrders = orders.sort(nameSorterFunction);
    displayOrders(sortedOrders);
}

const SortById = () => {
    const sortedOrders = orders.sort(idSorterFunction);
    displayOrders(sortedOrders);
}
const loadData = async (): Promise<Order[]> => {
    const dataUri = "https://raw.githubusercontent.com/kristijanGeorgiev/InternetProgramming/refs/heads/main/data9/order.json"
    const response = await fetch(dataUri);

    if (!response.ok) {
        throw new Error("The data is not there");
    }

    const data: Order[] = await response.json();
    return data;
}

const displayOrders = (orders: Order[]) => {
    const container = document.getElementById("order-container");
    if (!container) return;

    container.innerHTML = "";

    for (const order of orders) {
        const orderRow = generateOrderRow(order);
        container.appendChild(orderRow);
    }
}

const generateOrderRow = (order: Order) => {
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
        const itemmodal = document.getElementById("items")!;
        itemmodal.classList.remove("hidden");

        const modalHeader = document.querySelector("#items-details-content h2")! as HTMLHeadingElement;
        modalHeader.innerText = `Selected items for ${order.customer_name}`;

        const itemsList = document.getElementById("items-details-list")! as HTMLUListElement;
        itemsList.innerHTML = "";
        for (const items of order.items) {
            const itemsItem = document.createElement("li");
            itemsItem.innerText = `${items.item_id} (${items.item_name} ${items.quantity} ${items.price} ${items.totalamount} ${items.status})`;
            itemsList.appendChild(itemsItem);
        }
    })
    row.appendChild(itemsCell);
    return row;
}
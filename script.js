// script.js

// Initial order counts
let orderCounts = {
    totalOrders: 0,
    pendingOrders: 0,
    orderPlaced: 0,
    confirmedOrders: 0,
    processedOrders: 0,
    shippedOrders: 0
};

// Function to update the order counts on the screen with a smooth transition
function updateOrderCounts() {
    const orderTypes = ['totalOrders', 'pendingOrders', 'orderPlaced', 'confirmedOrders', 'processedOrders', 'shippedOrders'];

    orderTypes.forEach(type => {
        const element = document.getElementById(type);
        const currentCount = parseInt(element.querySelector('p').innerText);
        const newCount = orderCounts[type];

        // Smooth animation effect for count changes
        let start = currentCount;
        let end = newCount;
        let step = (end - start) / 30;
        let counter = start;

        function increment() {
            if (Math.abs(counter - end) > Math.abs(step)) {
                counter += step;
                element.querySelector('p').innerText = Math.round(counter);
                requestAnimationFrame(increment);
            } else {
                element.querySelector('p').innerText = end;
            }
        }

        increment();
    });
}

// Simulate updating the order counts with random numbers
function simulateOrderCountUpdate() {
    orderCounts.totalOrders = Math.floor(Math.random() * 1000);
    orderCounts.pendingOrders = Math.floor(Math.random() * orderCounts.totalOrders);
    orderCounts.orderPlaced = Math.floor(Math.random() * orderCounts.totalOrders);
    orderCounts.confirmedOrders = Math.floor(Math.random() * orderCounts.orderPlaced);
    orderCounts.processedOrders = Math.floor(Math.random() * orderCounts.confirmedOrders);
    orderCounts.shippedOrders = Math.floor(Math.random() * orderCounts.processedOrders);

    updateOrderCounts();
}

// Event listener for the button to update order counts
document.getElementById('updateButton').addEventListener('click', simulateOrderCountUpdate);

// Initial load
updateOrderCounts();

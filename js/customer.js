// Функции для работы с вкладками клиента
function showCustomerTab(tabId) {
    // Сначала деактивируем все кнопки и вкладки
    document.querySelectorAll('#customer-screen nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('#customer-screen .tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Затем активируем нужную кнопку и вкладку
    document.getElementById(`${tabId}-tab-btn`).classList.add('active');
    document.getElementById(`${tabId}-tab`).classList.add('active');
    
    // Отдельная обработка для успешного оформления заказа
    if (tabId === 'order-success') {
        document.getElementById('order-success').classList.add('active');
    }
}

// Функция для оформления заказа
function submitOrder() {
    showCustomerTab('order-success');
}
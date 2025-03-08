// Функции для работы с вкладками фермера
function showFarmerTab(tabId) {
    document.querySelectorAll('#farmer-screen nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('#farmer-screen .tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(`${tabId}-tab-btn`).classList.add('active');
    document.getElementById(`${tabId}-tab`).classList.add('active');
}

// Функции для работы с подвкладками товаров
function showProductsSubTab(tabId) {
    document.querySelectorAll('#products-tab .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('#products-tab .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Функции для работы с подвкладками заказов
function showOrdersSubTab(tabId) {
    document.querySelectorAll('#farmer-orders-tab .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('#farmer-orders-tab .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
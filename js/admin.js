// Функции для работы с вкладками администратора
function showAdminTab(tabId) {
    document.querySelectorAll('#admin-screen nav button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('#admin-screen .tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(`${tabId}-tab-btn`).classList.add('active');
    document.getElementById(`${tabId}-tab`).classList.add('active');
}

// Функции для работы с подвкладками рынков
function showMarketSubTab(tabId) {
    document.querySelectorAll('#admin-markets-tab .tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('#admin-markets-tab .tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    event.target.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}
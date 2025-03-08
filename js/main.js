// Переменная для хранения типа пользователя
let userType = '';

// Функция для переключения экранов
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Функция для установки типа пользователя
function setUserType(type) {
    userType = type;
    document.getElementById('login-title').textContent = `Вход для ${type === 'customer' ? 'покупателя' : type === 'farmer' ? 'фермера' : 'администратора'}`;
}

// Функция для входа в систему
function login() {
    if (userType === 'customer') {
        showScreen('customer-screen');
    } else if (userType === 'farmer') {
        showScreen('farmer-screen');
    } else if (userType === 'admin') {
        showScreen('admin-screen');
    }
}

// Функция для загрузки содержимого экранов
function loadScreenContent(screenId, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById(screenId).innerHTML = html;
        })
        .catch(error => {
            console.error(`Ошибка загрузки ${url}:`, error);
        });
}

// Общие функции
function addToCart() {
    alert('Товар добавлен в корзину');
}

function updateQuantity(button, change) {
    const quantityElement = button.parentElement.querySelector('span');
    let quantity = parseInt(quantityElement.textContent);
    
    quantity += change;
    if (quantity < 1) {
        if (confirm('Удалить товар из корзины?')) {
            button.closest('.cart-item').remove();
        } else {
            quantity = 1;
        }
    }
    
    quantityElement.textContent = quantity;
}
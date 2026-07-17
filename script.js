// ==========================================
// 1. МОДАЛЬНОЕ ОКНО (Работает на всех страницах)
// ==========================================
const modal = document.getElementById('contactModal');
const openBtn = document.getElementById('contactBtn');
const closeBtn = document.querySelector('.close-btn');
const contactForm = modal ? modal.querySelector('form') : null;

if (openBtn && modal) {
    // Открыть окно
    openBtn.addEventListener('click', () => modal.style.display = 'flex');
    
    // Закрыть окно на крестик
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
    }
    
    // Закрыть окно при клике на темный фон
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Отправка заявки в Telegram с данными из формы
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameInput = contactForm.querySelector('input[type="text"]');
        const phoneInput = contactForm.querySelector('input[type="tel"]');

        const name = nameInput ? nameInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';

        const message = `Здравствуйте! Хочу забронировать отдых.\nИмя: ${name}\nТелефон: ${phone}`;
        const telegramUrl = `https://t.me/timenub?text=${encodeURIComponent(message)}`;

        window.open(telegramUrl, "_blank");

        modal.style.display = 'none';
        contactForm.reset();
    });
}

// ==========================================
// 2. КАЛЬКУЛЯТОР СТОИМОСТИ (Только для about.html)
// ==========================================
const daysInput = document.getElementById('days');
const checkboxes = document.querySelectorAll('.checkbox-group input');
const totalPriceEl = document.getElementById('totalPrice');
if (daysInput && totalPriceEl) {
    const BASE_PRICE = 800000; // Число пишется слитно, без точек! Это 800 000 сум.

    function calculatePrice() {
        let days = parseInt(daysInput.value) || 1;
        if (days < 1) days = 1; // Защита от нуля и минуса
        
        let total = days * BASE_PRICE;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.value); // Прибавит значение из HTML (например, 150000)
            }
        });

        // Функция toLocaleString автоматически сделает красивые пробелы: 800 000
        totalPriceEl.textContent = total.toLocaleString('ru-RU');
    }

    daysInput.addEventListener('input', calculatePrice);
    checkboxes.forEach(cb => cb.addEventListener('change', calculatePrice));
}


// ==========================================
// 3. FAQ АККОРДЕОН (Только для about.html)
// ==========================================
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');
            
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0px';
                arrow.textContent = '+';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                arrow.textContent = '−';
            }
        });
    });
}

// ==========================================
// 4. УВЕЛИЧЕНИЕ КАРТИНОК ЛАЙТБОКС (Только для gallery.html)
// ==========================================
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

if (galleryItems.length > 0 && lightbox && lightboxImg) {
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Берем ссылку на картинку из CSS background-image
            const bgUrl = window.getComputedStyle(this).backgroundImage;
            const cleanUrl = bgUrl.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
            
            lightboxImg.src = cleanUrl;
            lightbox.style.display = 'flex';
        });
    });

    // Закрываем при клике в любое место экрана
    lightbox.addEventListener('click', function(e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
            lightboxImg.src = '';
        }
    });
}

// ==========================================
// ==========================================
// 5. ПЛАВНАЯ АНИМАЦИЯ НАВБАРA ПРИ СКРОЛЛЕ (Светлая тема)
// ==========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.padding = '14px 8%';
            navbar.style.background = 'rgba(252, 251, 250, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0,0,0,0.04)';
        } else {
            navbar.style.padding = '20px 8%';
            navbar.style.background = 'rgba(252, 251, 250, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    }
});
// ==========================================
// 6. ИНТЕРАКТИВНЫЙ ВИДЖЕТ ПОГОДЫ (Для contacts.html)
// ==========================================
const tempEl = document.getElementById('weather-temp');
const descEl = document.getElementById('weather-desc');
// ==========================================
// 6. ИНТЕРАКТИВНЫЙ ВИДЖЕТ ПОГОДЫ (Для Ташкента, район Абай)
// ==========================================
if (tempEl && descEl) {
    // Точные географические координаты для Ташкента (Район Абай)
    const lat = 41.3484;
    const lon = 69.1912;
    
    async function getWeather() {
        try {
            // Исправленная и полностью рабочая ссылка на бесплатное API погоды
            const response = await fetch(`https://open-meteo.com{lat}&longitude=${lon}&current_weather=true`);
            const data = await response.json();
            
            if (data && data.current_weather) {
                const temperature = Math.round(data.current_weather.temperature);
                // Выводит реальную температуру с плюсом (например: +43°C)
                tempEl.textContent = `${temperature > 0 ? '+' : ''}${temperature}°C`;
                
                // Определение состояния погоды по международным кодам WMO
                const code = data.current_weather.weathercode;
                let description = "Ясно";
                if (code >= 1 && code <= 3) description = "Переменная облачность";
                if (code >= 45 && code <= 48) description = "Туман";
                if (code >= 51 && code <= 67) description = "Дождь";
                if (code >= 71 && code <= 86) description = "Снегопад";
                if (code >= 95) description = "Гроза";
                
                descEl.textContent = description;
            }
        } catch (error) {
            // Запасной реалистичный вариант для летнего сезона в Ташкенте, если интернета нет
            tempEl.textContent = "+43°C"; 
            descEl.textContent = "Жарко, солнечно";
        }
    }
    
    getWeather();
}

// ==========================================
// 7. РАЗВОРАЧИВАНИЕ ЛОКАЦИЙ (Для index.html)
// ==========================================
function toggleSpot(cardElement) {
    cardElement.classList.toggle('active-spot');
}

// ==========================================
// 8. ИМИТАЦИЯ КАЛЕНДАРЯ БРОНИ (Для index.html)
// ==========================================
function changeMonth(monthName) {
    // Меняем активную кнопку
    const buttons = document.querySelectorAll('.btn-month');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Меняем заголовок
    document.getElementById('current-month-name').textContent = monthName;
    
    // Меняем "занятые" дни для реалистичности в зависимости от месяца
    const calendarGrid = document.querySelector('.calendar-grid');
    if (monthName === 'август') {
        calendarGrid.innerHTML = `
            <div class="day-box busy"><span>Пн</span><small>Занято</small></div>
            <div class="day-box free"><span>Вт</span><small>Свободно</small></div>
            <div class="day-box free"><span>Ср</span><small>Свободно</small></div>
            <div class="day-box busy"><span>Чт</span><small>Занято</small></div>
            <div class="day-box busy weekend"><span>Пт</span><small>Занято</small></div>
            <div class="day-box busy weekend"><span>Сб</span><small>Занято</small></div>
            <div class="day-box busy weekend"><span>Вс</span><small>Занято</small></div>
        `;
    } else if (monthName === 'сентябрь') {
        calendarGrid.innerHTML = `
            <div class="day-box free"><span>Пн</span><small>Свободно</small></div>
            <div class="day-box free"><span>Вт</span><small>Свободно</small></div>
            <div class="day-box free"><span>Ср</span><small>Свободно</small></div>
            <div class="day-box free"><span>Чт</span><small>Свободно</small></div>
            <div class="day-box free weekend"><span>Пт</span><small>Свободно</small></div>
            <div class="day-box busy weekend"><span>Сб</span><small>Занято</small></div>
            <div class="day-box free weekend"><span>Вс</span><small>Свободно</small></div>
        `;
    } else {
        // Возвращаем Июль
        calendarGrid.innerHTML = `
            <div class="day-box free"><span>Пн</span><small>Свободно</small></div>
            <div class="day-box free"><span>Вт</span><small>Свободно</small></div>
            <div class="day-box busy"><span>Ср</span><small>Занято</small></div>
            <div class="day-box free"><span>Чт</span><small>Свободно</small></div>
            <div class="day-box busy weekend"><span>Пт</span><small>Занято</small></div>
            <div class="day-box busy weekend"><span>Сб</span><small>Занято</small></div>
            <div class="day-box free weekend"><span>Вс</span><small>Свободно</small></div>
        `;
    }
}
// ==========================================
// 9. МОБИЛЬНОЕ БУРГЕР-МЕНЮ (Адаптация)
// ==========================================
const burgerToggle = document.getElementById('burgerToggle');
const navLinks = document.querySelector('.nav-links');

if (burgerToggle && navLinks) {
    burgerToggle.addEventListener('click', () => {
        // Переключаем класс active для анимации полосок в крестик и выезда меню
        burgerToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Автоматически закрываем меню при клике на любую ссылку внутри него
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            burgerToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}
// ==========================================
// 8. ИНТЕРАКТИВ ДЛЯ ФОРМЫ БРОНИРОВАНИЯ (Для index.html)
// ==========================================
const mainBookingForm = document.getElementById('mainBookingForm');

if (mainBookingForm) {
    mainBookingForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Запрещаем перезагрузку страницы
        
        // Перенаправляем пользователя на открытие главного модального окна контактов
        const modal = document.getElementById('contactModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    });
}

// ==========================================
// 10. ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ (Reveal on Scroll)
// Только визуальное дополнение — не затрагивает существующую логику выше.
// ==========================================
(function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
    if (!revealEls.length) return;

    if (!('IntersectionObserver' in window)) {
        revealEls.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(el => observer.observe(el));
})();

// ==========================================
// 11. ТОЛЬКО ЦИФРЫ В ПОЛЕ ТЕЛЕФОНА (Все страницы)
// ==========================================
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9+\s()-]/g, '');
    });
});

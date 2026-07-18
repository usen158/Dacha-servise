// ==========================================
// СЛОВАРЬ ПЕРЕВОДОВ ДЛЯ ВСЕГО САЙТА (RU / UZ)
// ==========================================
const translations = {
    ru: {
        home: "Главная",
        about: "О даче",
        gallery: "Галерея",
        contacts: "Контакты",
        contact_btn: "Связаться",
        footer_copy: "© 2026 Дача Абай. Все права защищены.",

        hero_eyebrow: "Район Абай · 15 минут от города",
        hero_title: "Отдых от городской суеты",
        hero_text: "Премиальное эко-пространство с бассейном, беседкой и полной приватностью — для семейного отдыха и полной перезагрузки ума.",
        stat_rating_label: "рейтинг гостей",
        stat_guests_label: "гостей",
        stat_price_label: "сум / сутки",
        stat_minutes_label: "минут от города",
        btn_gallery: "Смотреть галерею",
        btn_about: "О даче и цены",
        feat1_title: "🔥 Кухня и мангал",
        feat1_text: "Всё для готовки на воздухе",
        feat2_title: "🏡 Беседка",
        feat2_text: "Вид на вековой лес",
        feat3_title: "🌲 Двор для отдыха",
        feat3_text: "Вдали от трасс и шума",

        whyus_eyebrow: "Наши преимущества",
        whyus_title: "Почему выбирают нас",
        whyus_subtitle: "Всё продумано для того, чтобы вы просто отдыхали",
        why1_title: "Большой бассейн",
        why1_text: "Просторная чаша с подогревом воды в прохладные вечера",
        why2_title: "Зона барбекю",
        why2_text: "Мангал, беседка и всё необходимое для пикника",
        why3_title: "Современная кухня",
        why3_text: "Полностью оборудованная кухня с посудой и техникой",
        why4_title: "Wi-Fi",
        why4_text: "Быстрый интернет по всей территории дачи",
        why5_title: "Парковка",
        why5_text: "Бесплатное место для нескольких автомобилей",
        why6_title: "Полная приватность",
        why6_text: "Огороженная территория только для вас и ваших гостей",

        booking_eyebrow: "Бронирование",
        booking_title: "Начните своё загородное приключение",
        booking_subtitle: "Выберите удобные даты, чтобы зафиксировать за собой дом",
        label_checkin: "Дата заезда",
        label_checkout: "Дата выезда",
        label_guests: "Количество гостей",
        opt_guest_1: "1 гость",
        opt_guest_2: "2 гостя",
        opt_guest_4: "До 4 гостей",
        opt_guest_6: "До 6 гостей",
        opt_guest_custom: "Больше (компания)",
        btn_check: "Проверить доступность",

        steps_eyebrow: "Просто и быстро",
        steps_title: "Как проходит бронирование",
        steps_subtitle: "Четыре шага до вашего отдыха на природе",
        step1_title: "Выбираете даты",
        step1_text: "Указываете заезд и выезд в форме бронирования",
        step2_title: "Отправляете заявку",
        step2_text: "Оставляете контакты — мы свяжемся с вами",
        step3_title: "Подтверждаем бронь",
        step3_text: "Согласовываем детали и закрепляем дом за вами",
        step4_title: "Заезжаете отдыхать",
        step4_text: "Встречаем вас и передаём ключи от дачи",

        cta_eyebrow: "Готовы отдохнуть?",
        cta_title: "Забронируйте дачу Абай уже сегодня",
        cta_text: "Свободные даты быстро разбирают — оставьте заявку, и мы поможем подобрать удобный период для вашего отдыха.",
        cta_btn: "Забронировать сейчас",

        modal_title: "Забронировать отдых",
        modal_text: "Оставьте контакты, мы перезвоним в течение 15 минут.",
        modal_name_ph: "Ваше имя",
        modal_phone_ph: "Номер телефона",
        modal_submit: "Отправить заявку",

        about_hero_eyebrow: "О даче",
        about_hero_title: "Идеальное сочетание комфорта и природы",
        about_hero_subtitle: "Дом построен из натурального бруса в 15 минутах от города — тишина, свежий воздух и всё для полноценного отдыха.",
        about_badge_label: "на основе отзывов гостей",
        about_eyebrow: "Наш уголок",
        about_title: "О нашем уголке",
        about_text: "Всего в 15 минутах от города — но будто в другом мире. Дом построен из натурального бруса, вокруг растут вековые деревья, а из окон открывается вид на зелёный двор. Высокоскоростной интернет, современная кухня и панорамные окна делают отдых комфортным в любое время года.",
        num1_label: "спальни / комнаты",
        num2_label: "общая площадь",
        num3_label: "гостей",
        num4_label: "бесплатная парковка",

        amenities_eyebrow: "Инфраструктура",
        amenities_title: "Что входит в стоимость",
        amenities_subtitle: "Всё необходимое уже включено — доплачивать за базовые удобства не нужно",
        am1: "Wi-Fi",
        am2: "Бассейн",
        am3: "Мангал",
        am4: "Телевизор",
        am5: "Кухня",
        am6: "Посуда",
        am7: "Кондиционер",
        am8: "Парковка",
        am9: "Беседка",

        calc_eyebrow: "Стоимость",
        calc_title: "Рассчитать стоимость",
        calc_subtitle: "Узнайте предварительную цену за пару кликов",
        calc_days_label: "Количество дней:",
        calc_options_label: "Дополнительные опции:",
        calc_opt1: "Ранний заезд (+150 000)",
        calc_opt2: "Доп. уборка (+100 000)",
        calc_opt3: "Дрова для мангала (+80 000)",
        calc_opt4: "Трансфер из города (+120 000)",
        calc_result_title: "Итоговая цена:",
        calc_note: "*Базовая ставка: 800 000 сум / сутки",

        faq_eyebrow: "Вопросы и ответы",
        faq_title: "Частые вопросы",
        faq_subtitle: "Отвечаем на то, что важно знать перед поездкой",
        faq_q1: "Можно ли приехать с детьми?",
        faq_a1: "Да, конечно! Территория безопасна и огорожена, во дворе достаточно места для игр.",
        faq_q2: "Есть ли парковка?",
        faq_a2: "Да, на территории есть бесплатная парковка на несколько автомобилей.",
        faq_q3: "Можно ли приехать с домашними животными?",
        faq_a3: "Да, мы рады гостям с воспитанными питомцами! Пожалуйста, предупредите нас об этом заранее.",
        faq_q4: "Есть ли бассейн?",
        faq_a4: "Да, на территории есть большой бассейн, доступный гостям в течение всего пребывания.",
        faq_q5: "Во сколько заезд и выезд?",
        faq_a5: "Стандартное время заезда — с 14:00, выезда — до 12:00. Ранний заезд возможен по согласованию.",

        gallery_hero_eyebrow: "Галерея",
        gallery_hero_title: "Атмосфера отдыха",
        gallery_hero_subtitle: "Взгляните на интерьер дома, бассейн и окружающую его природу",
        gallery_more_btn: "Посмотреть все фотографии",
        reviews_eyebrow: "Отзывы гостей",
        reviews_title: "Что говорят гости",
        reviews_subtitle: "Искренние отзывы тех, кто уже отдохнул у нас",
        review1: "«Потрясающее место! Тихо, поют птицы, а внутри дома пахнет свежим деревом. Обязательно вернемся осенью.»",
        review2: "«Идеально для работы на удаленке. Интернет летает, вид из окон шикарный, а вечером баня — чистый кайф!»",
        review3: "«Бассейн, мангал, беседка — собрались большой компанией, всем хватило места. Обязательно приедем ещё раз.»",

        back_link: "← Назад на главную",
        contacts_hero_eyebrow: "Контакты",
        contacts_hero_title: "Как нас найти",
        contacts_hero_subtitle: "Мы находимся в экологически чистом районе, куда легко добраться на машине.",
        card1_title: "Адрес",
        card1_text: "Узбекистан, город Ташкент, район Абай.",
        card2_title: "Телефон / Эл. почта",
        card3_title: "Время работы",
        card3_text: "Принимаем гостей круглый месяц.<br>Заселение 24/7 по брони.",
        ci_addr_title: "Адрес",
        ci_addr_text: "Узбекистан, город Ташкент, район Абай",
        ci_phone_title: "Телефон",
        ci_email_title: "Эл. почта",
        ci_checkin_title: "Заселение",
        ci_checkin_text: "Круглый месяц, 24/7 по предварительной брони",
        btn_write: "Написать нам",
        weather_title: "Погода в Абае прямо сейчас:",
        weather_tip: "💡 Идеальное время, чтобы разжечь камин или пожарить барбекю!"
    },

    uz: {
        home: "Bosh sahifa",
        about: "Dacha haqida",
        gallery: "Galereya",
        contacts: "Kontaktlar",
        contact_btn: "Bog'lanish",
        footer_copy: "© 2026 Abay Dacha. Barcha huquqlar himoyalangan.",

        hero_eyebrow: "Abay tumani · Shahardan 15 daqiqa",
        hero_title: "Shahar shovqinidan dam oling",
        hero_text: "Hovuz, ayvon va to'liq maxfiylikka ega premium dam olish maskani — oilaviy dam olish va aqlni to'liq tiklash uchun.",
        stat_rating_label: "mehmonlar reytingi",
        stat_guests_label: "mehmon",
        stat_price_label: "so'm / sutka",
        stat_minutes_label: "daqiqa shahardan",
        btn_gallery: "Galereyani ko'rish",
        btn_about: "Dacha va narxlar",
        feat1_title: "🔥 Oshxona va mangal",
        feat1_text: "Ochiq havoda pishirish uchun hamma narsa",
        feat2_title: "🏡 Ayvon",
        feat2_text: "Asrlik o'rmon manzarasi",
        feat3_title: "🌲 Dam olish hovlisi",
        feat3_text: "Yo'l va shovqindan uzoqda",

        whyus_eyebrow: "Bizning afzalliklarimiz",
        whyus_title: "Nega bizni tanlashadi",
        whyus_subtitle: "Siz shunchaki dam olishingiz uchun hammasi o'ylab qo'yilgan",
        why1_title: "Katta hovuz",
        why1_text: "Salqin kechalarda suv isitiladigan keng hovuz",
        why2_title: "Barbekyu zonasi",
        why2_text: "Mangal, ayvon va piknik uchun kerak bo'lgan hamma narsa",
        why3_title: "Zamonaviy oshxona",
        why3_text: "Idish-tovoq va texnika bilan to'liq jihozlangan oshxona",
        why4_title: "Wi-Fi",
        why4_text: "Dacha hududi bo'ylab tezkor internet",
        why5_title: "Avtoturargoh",
        why5_text: "Bir nechta avtomobil uchun bepul joy",
        why6_title: "To'liq maxfiylik",
        why6_text: "Faqat siz va mehmonlaringiz uchun to'siqlangan hudud",

        booking_eyebrow: "Bron qilish",
        booking_title: "Shahar tashqarisidagi sarguzashtingizni boshlang",
        booking_subtitle: "Uyni o'zingizga bron qilish uchun qulay sanalarni tanlang",
        label_checkin: "Kirish sanasi",
        label_checkout: "Chiqish sanasi",
        label_guests: "Mehmonlar soni",
        opt_guest_1: "1 mehmon",
        opt_guest_2: "2 mehmon",
        opt_guest_4: "4 mehmongacha",
        opt_guest_6: "6 mehmongacha",
        opt_guest_custom: "Ko'proq (kompaniya)",
        btn_check: "Mavjudligini tekshirish",

        steps_eyebrow: "Oddiy va tez",
        steps_title: "Bron qilish qanday amalga oshiriladi",
        steps_subtitle: "Tabiatda dam olishingizgacha to'rt qadam",
        step1_title: "Sanalarni tanlaysiz",
        step1_text: "Bron shaklida kirish va chiqishni ko'rsatasiz",
        step2_title: "Ariza yuborasiz",
        step2_text: "Kontaktlaringizni qoldirasiz — biz siz bilan bog'lanamiz",
        step3_title: "Bronni tasdiqlaymiz",
        step3_text: "Tafsilotlarni kelishib, uyni sizga biriktiramiz",
        step4_title: "Dam olishga kelasiz",
        step4_text: "Sizni kutib olib, dacha kalitlarini topshiramiz",

        cta_eyebrow: "Dam olishga tayyormisiz?",
        cta_title: "Abay dachasini bugun bron qiling",
        cta_text: "Bo'sh sanalar tez tugaydi — ariza qoldiring, biz dam olishingiz uchun qulay davrni tanlashga yordam beramiz.",
        cta_btn: "Hozir bron qilish",

        modal_title: "Dam olishni bron qilish",
        modal_text: "Kontaktlaringizni qoldiring, 15 daqiqa ichida qayta qo'ng'iroq qilamiz.",
        modal_name_ph: "Ismingiz",
        modal_phone_ph: "Telefon raqami",
        modal_submit: "Arizani yuborish",

        about_hero_eyebrow: "Dacha haqida",
        about_hero_title: "Qulaylik va tabiatning ideal uyg'unligi",
        about_hero_subtitle: "Uy shahardan 15 daqiqa masofada tabiiy yog'ochdan qurilgan — sokinlik, toza havo va to'liq dam olish uchun hamma narsa.",
        about_badge_label: "mehmon sharhlariga asoslangan",
        about_eyebrow: "Bizning burchagimiz",
        about_title: "Bizning burchagimiz haqida",
        about_text: "Shahardan atigi 15 daqiqa — lekin boshqa dunyodagidek. Uy tabiiy yog'ochdan qurilgan, atrofda asrlik daraxtlar o'sadi, derazalardan yashil hovli ko'rinadi. Tezkor internet, zamonaviy oshxona va panorama derazalar dam olishni yilning istalgan faslida qulay qiladi.",
        num1_label: "yotoq xonalari",
        num2_label: "umumiy maydon",
        num3_label: "mehmongacha",
        num4_label: "bepul avtoturargoh",

        amenities_eyebrow: "Infratuzilma",
        amenities_title: "Narxga nimalar kiradi",
        amenities_subtitle: "Kerakli hamma narsa allaqachon kiritilgan — asosiy qulayliklar uchun qo'shimcha to'lash shart emas",
        am1: "Wi-Fi",
        am2: "Hovuz",
        am3: "Mangal",
        am4: "Televizor",
        am5: "Oshxona",
        am6: "Idish-tovoq",
        am7: "Konditsioner",
        am8: "Avtoturargoh",
        am9: "Ayvon",

        calc_eyebrow: "Narx",
        calc_title: "Narxni hisoblash",
        calc_subtitle: "Bir necha bosishda taxminiy narxni bilib oling",
        calc_days_label: "Kunlar soni:",
        calc_options_label: "Qo'shimcha opsiyalar:",
        calc_opt1: "Erta kirish (+150 000)",
        calc_opt2: "Qo'shimcha tozalash (+100 000)",
        calc_opt3: "Mangal uchun o'tin (+80 000)",
        calc_opt4: "Shahardan transfer (+120 000)",
        calc_result_title: "Yakuniy narx:",
        calc_note: "*Bazaviy narx: 800 000 so'm / sutka",

        faq_eyebrow: "Savol va javoblar",
        faq_title: "Ko'p beriladigan savollar",
        faq_subtitle: "Sayohatdan oldin bilish muhim bo'lgan narsalarga javob beramiz",
        faq_q1: "Bolalar bilan kelish mumkinmi?",
        faq_a1: "Ha, albatta! Hudud xavfsiz va to'siqlangan, hovlida o'yin uchun yetarli joy bor.",
        faq_q2: "Avtoturargoh bormi?",
        faq_a2: "Ha, hududda bir nechta avtomobil uchun bepul avtoturargoh mavjud.",
        faq_q3: "Uy hayvonlari bilan kelish mumkinmi?",
        faq_a3: "Ha, tarbiyalangan uy hayvonlari bilan mehmonlarni kutib olamiz! Iltimos, oldindan xabar bering.",
        faq_q4: "Hovuz bormi?",
        faq_a4: "Ha, hududda butun turish davomida mehmonlar uchun katta hovuz mavjud.",
        faq_q5: "Kirish va chiqish soat nechada?",
        faq_a5: "Standart kirish vaqti — 14:00 dan, chiqish — 12:00 gacha. Erta kirish kelishuv asosida mumkin.",

        gallery_hero_eyebrow: "Galereya",
        gallery_hero_title: "Dam olish muhiti",
        gallery_hero_subtitle: "Uy ichki qismi, hovuz va uni o'rab turgan tabiatga nazar tashlang",
        gallery_more_btn: "Barcha suratlarni ko'rish",
        reviews_eyebrow: "Mehmon sharhlari",
        reviews_title: "Mehmonlar nima deyishadi",
        reviews_subtitle: "Bizda allaqachon dam olganlarning samimiy sharhlari",
        review1: "«Ajoyib joy! Jim-jit, qushlar sayraydi, uy ichida yangi yog'och hidi bor. Kuzda albatta qaytamiz.»",
        review2: "«Masofadan ishlash uchun ideal. Internet juda tez, derazadan manzara ajoyib, kechqurun hammom — sof rohat!»",
        review3: "«Hovuz, mangal, ayvon — katta kompaniya bo'lib yig'ildik, hammaga joy yetdi. Albatta yana kelamiz.»",

        back_link: "← Bosh sahifaga qaytish",
        contacts_hero_eyebrow: "Kontaktlar",
        contacts_hero_title: "Bizni qanday topish mumkin",
        contacts_hero_subtitle: "Biz mashinada yetib borish oson bo'lgan ekologik toza hududda joylashganmiz.",
        card1_title: "Manzil",
        card1_text: "O'zbekiston, Toshkent shahri, Abay tumani.",
        card2_title: "Telefon / Elektron pochta",
        card3_title: "Ish vaqti",
        card3_text: "Mehmonlarni yil bo'yi qabul qilamiz.<br>Joylashish 24/7, bron asosida.",
        ci_addr_title: "Manzil",
        ci_addr_text: "O'zbekiston, Toshkent shahri, Abay tumani",
        ci_phone_title: "Telefon",
        ci_email_title: "Elektron pochta",
        ci_checkin_title: "Joylashish",
        ci_checkin_text: "Yil bo'yi, oldindan bron asosida 24/7",
        btn_write: "Bizga yozing",
        weather_title: "Abaydagi hozirgi ob-havo:",
        weather_tip: "💡 Kamin yoqish yoki barbekyu qilish uchun ideal vaqt!"
    }
};

// ==========================================
// ФУНКЦИЯ ПРИМЕНЕНИЯ ЯЗЫКА КО ВСЕМ СТРАНИЦАМ
// ==========================================
function setLanguage(lang) {
    if (!translations[lang]) lang = 'ru';
    const dict = translations[lang];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.dataset.i18nHtml;
        if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });

    document.documentElement.setAttribute('lang', lang === 'uz' ? 'uz' : 'ru');

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('siteLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('siteLang') || 'ru';
    setLanguage(saved);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
});

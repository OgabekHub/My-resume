// LocalStorage xavfsiz o'qish/yozish funksiyalari (SecurityError oldini olish uchun)
function getPreferredLanguage() {
  try {
    return localStorage.getItem('preferred-lang') || 'en';
  } catch (e) {
    return 'en'; // local fayl ochilganda brauzer ruxsat bermasa, default 'en' qaytariladi
  }
}

function setPreferredLanguage(lang) {
  try {
    localStorage.setItem('preferred-lang', lang);
  } catch (e) {
    // Xatolikni e'tiborsiz qoldiramiz (local fayl rejimida)
  }
}

function downloadPDF() {
  const btn = document.getElementById('pdfBtn');
  const langBtn = document.getElementById('langBtn');

  // PDF yuklash paytida tugmalarni yashirish
  if (btn) btn.classList.add('hidden');
  if (langBtn) langBtn.classList.add('hidden');

  // Bir oz kutib chop etish oynasini ochish
  setTimeout(() => {
    window.print();
    
    // Chop etish oynasi yopilgach, tugmalarni qaytarish
    setTimeout(() => {
      if (btn) btn.classList.remove('hidden');
      if (langBtn) langBtn.classList.remove('hidden');
    }, 1000);
  }, 200);
}

function toggleLanguage() {
  const body = document.body;
  const langBtn = document.getElementById('langBtn');
  
  if (!body) return;

  if (body.classList.contains('lang-en')) {
    body.classList.remove('lang-en');
    body.classList.add('lang-uz');
    if (langBtn) langBtn.textContent = 'EN';
    setPreferredLanguage('uz');
  } else {
    body.classList.remove('lang-uz');
    body.classList.add('lang-en');
    if (langBtn) langBtn.textContent = 'UZ';
    setPreferredLanguage('en');
  }
}

// Sahifa yuklanganda tilni tekshirish va sozlash
document.addEventListener('DOMContentLoaded', () => {
  const preferredLang = getPreferredLanguage();
  const body = document.body;
  const langBtn = document.getElementById('langBtn');

  if (!body) return;

  body.classList.remove('lang-en', 'lang-uz');
  
  if (preferredLang === 'uz') {
    body.classList.add('lang-uz');
    if (langBtn) langBtn.textContent = 'EN';
  } else {
    body.classList.add('lang-en');
    if (langBtn) langBtn.textContent = 'UZ';
  }
});

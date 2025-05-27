function toggleLanguage() {
    const ar = document.getElementById('ar');
    const en = document.getElementById('en');
    if (ar.style.display === "none") {
      ar.style.display = "block";
      en.style.display = "none";
      document.body.setAttribute('dir', 'rtl');
      document.documentElement.lang = "ar";
    } else {
      ar.style.display = "none";
      en.style.display = "block";
      document.body.setAttribute('dir', 'ltr');
      document.documentElement.lang = "en";
    }
  }
  
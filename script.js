function downloadPDF() {
  const btn = document.getElementById('pdfBtn');

  // PDF uchun print dialog ochish
  // Brauzerning o'z PDF eksporti — hech qanday SecurityError yo'q
  btn.classList.add('hidden');

  // Bir oz kutib print ga o'tish (tugma yashiringach)
  setTimeout(() => {
    window.print();
    // Print dialog yopilgandan keyin tugmani qaytarish
    setTimeout(() => btn.classList.remove('hidden'), 1000);
  }, 200);
}

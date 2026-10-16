
  // Cover lightbox: the link opens the large cover in a full-page dialog (without JS it just opens the image).
  (function () {
    var d = document.getElementById('lightbox'); if (!d || !d.showModal) return;
    var img = d.querySelector('img');
    document.querySelectorAll('a.zoom').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault(); img.src = a.href; img.alt = a.querySelector('img').alt; d.showModal();
      });
    });
    d.addEventListener('click', function () { d.close(); });
  })();

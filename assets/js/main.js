/* Filter tabs */
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const sections = document.querySelectorAll('.projects-section');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;

      if (filter === 'all') {
        cards.forEach(c => c.classList.remove('hidden'));
        sections.forEach(s => s.style.display = '');
      } else {
        cards.forEach(c => {
          if (c.dataset.status === filter) {
            c.classList.remove('hidden');
          } else {
            c.classList.add('hidden');
          }
        });

        // Hide section headings if all cards in that section are hidden
        sections.forEach(section => {
          const visible = section.querySelectorAll('.project-card:not(.hidden)');
          section.style.display = visible.length === 0 ? 'none' : '';
        });
      }
    });
  });

  // Animate result bars on load
  document.querySelectorAll('.result-bar-fill').forEach(bar => {
    const w = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = w; }, 200);
  });
});

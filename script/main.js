document.addEventListener('DOMContentLoaded', () => {
  const badge = document.querySelector('.badge');
  const addButtons = document.querySelectorAll('.btn-add-cart');
  let count = 0;

  addButtons.forEach((button) => {
    button.addEventListener('click', () => {
      count += 1;
      if (badge) badge.textContent = String(count);
    });
  });

  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  const cartQtyButtons = document.querySelectorAll('.qty-control button');
  cartQtyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const span = btn.parentElement.querySelector('span');
      let value = parseInt(span.textContent, 10) || 1;
      value = btn.textContent.trim() === '+' ? value + 1 : Math.max(1, value - 1);
      span.textContent = String(value);
    });
  });
});

const form = document.getElementById('tg-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('user-name').value;
  const phone = document.getElementById('user-phone').value;

  const googleUrl = 'https://script.google.com/macros/s/AKfycbyCURM9nmWWK9QQw1KIDI4x4u-drtwmdpsv3zP8DD4WNb4RjYRg3o5yatIAlqHzc_x0/exec';

  fetch(googleUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({ name: name, phone: phone })
  })
    .then(response => {
      const toast = document.getElementById('custom-toast');

      if (response.ok) {
        toast.innerText = 'Заявку успішно відправлено!';
        toast.style.backgroundColor = '#4caf50'; 
        toast.classList.add('show');
        form.reset(); 
      } else {
        toast.innerText = 'Виникла помилка. Спробуйте пізніше.';
        toast.style.backgroundColor = '#f44336'; 
        toast.classList.add('show');
      }

      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    })
    .catch(error => {
      const toast = document.getElementById('custom-toast');
      toast.innerText = 'Помилка з\'єднання. Перевірте інтернет.';
      toast.style.backgroundColor = '#f44336';
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    });
});
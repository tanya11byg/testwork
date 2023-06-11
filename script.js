


  // Функция для отображения модального окна
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  

  // Находим кнопку внутри модального окна
  const closeButton = modal.querySelector('.btn-close');

  // Добавляем обработчик события на клик по кнопке
  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Находим кнопку внутри модального окна
  const closeimgButton = modal.querySelector('.img-close');

  // Добавляем обработчик события на клик по кнопке
  closeimgButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });




  }


// Функция для валидации email
function validateEmail(email) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }
  
  // Функция для отправки данных формы через AJAX
  function subscribe(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    
  
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
  
    if (!validateEmail(email)) {
      alert('Пожалуйста, введите корректный email!');
      return;
    }else showModal()
    emailInput.value = ''; // Очищаем поле ввода email;
    
};




/*
    // Создаем объект FormData для передачи данных формы
    const formData = new FormData();
    formData.append('email', email);
  
    // Создаем объект XMLHttpRequest
    const xhr = new XMLHttpRequest();
  
    // Настраиваем запрос
    xhr.open('POST', 'url_вашего_сервера'); // Замените 'url_вашего_сервера' на актуальный URL
  
    // Опционально: настраиваем заголовки запроса, если необходимо
  
    // Опционально: добавляем обработчик события для отслеживания прогресса запроса
  
    // Обработчик события, вызываемый при завершении запроса
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Успешно отправлено
        alert('Вы успешно подписались!');
        emailInput.value = ''; // Очищаем поле ввода email
      } else {
        // Ошибка при отправке
        alert('Произошла ошибка. Пожалуйста, попробуйте еще раз.');
      }
    };
  
    // Отправляем запрос
    xhr.send(formData);
  }
  
*/
  const subscriptionForm = document.getElementById('subscription-form');
    subscriptionForm.addEventListener('submit', subscribe);


//анимация плавного появления всех элементов

// Получаем все элементы, которые нужно анимировать
const elements = document.querySelectorAll('.animate');

// Функция для анимации плавного появления элементов
function animateElements() {
  elements.forEach((element, index) => {
    // Устанавливаем начальное состояние элементов перед анимацией
    element.style.opacity = '0';
    element.style.transform = 'translateY(-90px)';

    // Запускаем анимацию с задержкой
    setTimeout(() => {
      // Запускаем анимацию
      element.style.transition = 'opacity 1s, transform 1s';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, index * 200); // Задержка между анимациями в миллисекундах (в данном случае 200 мс)
  });
}

// Запускаем анимацию после полной загрузки страницы
window.addEventListener('load', animateElements);




/* окно ALL EVENTS */
  //  его раскрытие
  document.getElementById('expandButton').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.style.display === 'none') {
      // Плавный скролл к контенту
      hiddenContent.style.display = 'block'; // Раскрыть контент
      hiddenContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        
      });
    } else {
      hiddenContent.style.display = 'none'; // Скрыть контент
    }
  });
  
//////////



//аккордеон
document.addEventListener("DOMContentLoaded", function() {
  var accordionHeaders = document.getElementsByClassName("accordion-section-header");

  for (var i = 0; i < accordionHeaders.length; i++) {
    accordionHeaders[i].addEventListener("click", function() {
      var accordionSection = this.parentElement;
      var accordionContent = accordionSection.querySelector(".accordion-section-content");

      // Закрываем все другие секции
      var allAccordionSections = document.getElementsByClassName("accordion-section");
      for (var j = 0; j < allAccordionSections.length; j++) {
        var section = allAccordionSections[j];
        var content = section.querySelector(".accordion-section-content");
        

        if (section !== accordionSection) {
          section.classList.remove("active");
          content.style.display = "none";
        }
      }

      // Раскрываем/скрываем текущую секцию
      accordionSection.classList.toggle("active");

      if (accordionSection.classList.contains("active")) {
        accordionContent.style.display = "block";
        
      } else {
        accordionContent.style.display = "none";
      }
    });
  }
});



/* конец окна ALL EVENTS */





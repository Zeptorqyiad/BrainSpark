// Развертываение кнопки "Далее"
const hiddenText = document.getElementById('hiddenText')
const showButton = document.getElementById('continueBtn')
const blogCont = document.getElementById('blogCont')

showButton.addEventListener('click', function () {
   hiddenText.style.display = 'block'
   showButton.style.display = 'none'
   blogCont.style.margin = '0'
})

const hiddenText2 = document.getElementById('hiddenText2')
const showButton2 = document.getElementById('continueBtn2')
const blogCont2 = document.getElementById('blogCont2')

showButton2.addEventListener('click', function () {
   hiddenText2.style.display = 'block'
   showButton2.style.display = 'none'
   blogCont2.style.margin = '0'
})

// Переключение картинок Gallery
$('body').on('click', '.mini-image', function () {
   $('#main').attr('src', $(this).attr('src'))
})

function changeColor() {
   let checkbox = document.getElementById('imageCheckbox')
   let image = document.getElementById('myImage')
   if (checkbox.checked) {
      image.style.filter = 'grayscale(100%)'
   } else {
      image.style.filter = 'grayscale(0%)'
   }
   let checkbox2 = document.getElementById('imageCheckbox2')
   let image2 = document.getElementById('myImage2')
   if (checkbox2.checked) {
      image2.style.filter = 'grayscale(100%)'
   } else {
      image2.style.filter = 'grayscale(0%)'
   }
   let checkbox3 = document.getElementById('imageCheckbox3')
   let image3 = document.getElementById('myImage3')
   if (checkbox3.checked) {
      image3.style.filter = 'grayscale(100%)'
   } else {
      image3.style.filter = 'grayscale(0%)'
   }
   let checkbox4 = document.getElementById('imageCheckbox4')
   let image4 = document.getElementById('myImage4')
   if (checkbox4.checked) {
      image4.style.filter = 'grayscale(100%)'
   } else {
      image4.style.filter = 'grayscale(0%)'
   }
   let checkbox5 = document.getElementById('imageCheckbox5')
   let image5 = document.getElementById('myImage5')
   if (checkbox5.checked) {
      image5.style.filter = 'grayscale(100%)'
   } else {
      image5.style.filter = 'grayscale(0%)'
   }
}

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
for (let i = 0; i < checkboxes.length; i++) {
   checkboxes[i].addEventListener('click', function (e) {
      if (e.target.checked) {
         for (let j = 0; j < checkboxes.length; j++) {
            if (checkboxes[j] !== e.target) {
               checkboxes[j].checked = false
            }
         }
      }
   })
}

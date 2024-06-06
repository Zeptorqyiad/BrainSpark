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

// Переключение картинок

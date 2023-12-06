document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".popular .container .block__slider .main__card .card");
    const dots = document.querySelectorAll(".popular .container .block__slider .dots span");
    let currentIndex = 0;
  
    function showSlide(index) {
      cards.forEach((card) => card.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));
  
      cards[index].classList.add("active");
      dots[index].classList.add("active");
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % cards.length;
      showSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      showSlide(currentIndex);
    }
  
    document.querySelector(".popular .container .block__slider .main__card .right").addEventListener("click", nextSlide);
    document.querySelector(".popular .container .block__slider .main__card .left").addEventListener("click", prevSlide);
  
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        currentIndex = index;
        showSlide(currentIndex);
      });
    });
  
    showSlide(currentIndex);
  });
  
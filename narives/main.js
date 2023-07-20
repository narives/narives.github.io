// 스크롤 시 메뉴바 고정
window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
});

// 메뉴 클릭 시 부드러운 스크롤링
const menuLinks = document.querySelectorAll('nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
            
        // 메뉴바의 높이만큼 오프셋을 주어서 컨텐츠가 메뉴바 아래에서 시작되도록 조정
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top;
        const offsetPosition = targetPosition - navHeight;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

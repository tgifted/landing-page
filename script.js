let faq = document.getElementsByClassName('faq-top');

for(i = 0; 1 < faq.length; i++){
    faq[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}
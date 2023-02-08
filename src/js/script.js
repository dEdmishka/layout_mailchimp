const faqs = document.querySelectorAll('.item-keep__faq');
console.log(faqs);
faqs.forEach(faq => {
    console.log(faq)
    faq.addEventListener('click', ()=>{
        faq.classList.toggle('active');
    })
})
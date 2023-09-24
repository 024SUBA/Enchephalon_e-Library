const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventlistener("click", () => {
        faq.classlist.toggle("active");
    });
});
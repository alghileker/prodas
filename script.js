const learnMoreButton = document.getElementById('#testimoni');
if (learnMoreButton) {
    learnMoreButton.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector("#testimoni");
        target.scrollIntoView({ behavior: 'smooth' });
    })}

//////////////    ////////////////////////////  
const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("pessan ini berhasil.");
        form.reset();
    })
}
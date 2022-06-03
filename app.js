const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const secBtn1 = document.querySelector('.control-1');
const secBtn2 = document.querySelector('.control-2');
const secBtn3 = document.querySelector('.control-3');
const secBtn4 = document.querySelector('.control-4');
const secBtn5 = document.querySelector('.control-5');
const allSection = document.querySelector('.main-content');

let pageTransitions = () => {
    // button click active class
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            secBtn.forEach((button) => {
                button.classList.remove('active-btn');
            })
            e.target.classList.add('active-btn')
        }
    })

    // section active
    allSection.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the btn
            secBtn.forEach((btn) => {
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            // hide other sections  
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // toggle thene
    const theme = document.querySelector('.theme-btn');
    theme.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })

}
pageTransitions();
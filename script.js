const preLoader = document.getElementById('pre-loader')
function PageLoaded() {
    setTimeout(function () {
        preLoader.style.opacity = '0';
        preLoader.style.transition = '1.5s ease-in-out';
        setTimeout(function () {
            preLoader.style.display = 'none';
        }, 1500)
    }, 1500)
}


const rightBar1 = document.getElementById('right-bars1'),
    hItemBox2 = document.getElementById('h2-item-box'),
    leftBar2 = document.getElementById('left-bar-2');


function openNav() {
    // hItemBox2.classList.remove('active')
    hItemBox2.style.display = "block";
    rightBar1.style.display = "none"
    leftBar2.style.display = "block";

    // console.log(rightBar1);
}

function closeNav() {
    hItemBox2.style.display = "none";
    rightBar1.style.display = "block"
    leftBar2.style.display = "none";
}

document.onclick = function (e) {
    if (e.target.id !== 'faBars' && e.target.id !== 'h2-item-box' && window.innerWidth < 1100) {
        hItemBox2.style.display = "none";
        rightBar1.style.display = "block"
        leftBar2.style.display = "none";
    }
}




// scroll to top function 
function scrollToTop() {
    let scrollTopBtn = document.querySelector('#scrollBtn')
    window.onscroll = function () {
        let scroll = document.documentElement.scrollTop;
        if (scroll >= 256) {
            scrollTopBtn.classList.add('active');
        }
        else {
            scrollTopBtn.classList.remove('active');
        }
    }
}
scrollToTop();


// active navlink 
const navLink = document.querySelectorAll('.right-nav-item');
function actionLink() {
    navLink.forEach((n) => {
        n.classList.remove('active')
    });
    this.classList.add('active')
};
navLink.forEach(n => n.addEventListener('click', actionLink))


// faq boxes 
const faqBoxes = document.querySelectorAll('.qus-boxes');
faqBoxes.forEach((faqItem) => {
    const quesHead = faqItem.querySelector('.quehead');
    quesHead.addEventListener('click', () => {
        faqBoxes.forEach((faqItem2) => {
            if (faqItem !== faqItem2) {
                faqItem2.classList.remove('active')
            }
        })
        if (faqItem.classList.contains('active')) {
            faqItem.classList.remove('active')
        }
        else {
            faqItem.classList.add('active')
        }
    })
})


// newletter pop-up 
const newletter = document.querySelector('.newletter-pop-up'),
    newslatterButton = document.getElementById('newsletter-subscribe-button'),
    newletterForm = document.querySelector('.newsletter-form'),
    newletterCloseBtn = document.querySelector('.newsletter-close-button');

newletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newletter.classList.add('active')
})

newletterCloseBtn.addEventListener('click', () => {
    newletter.classList.remove('active')
})


// page scroller 
window.sr = new ScrollReveal({ origin: 'top', duration: 2000, reset: true });

sr.reveal('.banner-area', { distance: '200px', duration: 3000 })
sr.reveal('.features', { distance: '100px' })
sr.reveal('.service-container', { distance: '100px' })
sr.reveal('.pricing', { distance: '100px', delay: 100 })
sr.reveal('.question', { distance: '100px', origin: 'top' })
// sr.reveal('.cotact-us',{distance: '100px', origin: 'top'})



// search box 
// const searchIcon = document.getElementById('fa-search');
// const searchInput = document.getElementById('searchInput'),
//     callBtn = document.getElementById('searchbtn');
// searchIcon.addEventListener('click', () => {

//     callBtn.style.display = 'none';
//     searchInput.style.display = 'inline-block';

// })
// const searchInputCancel = document.getElementById('fa-times');

// searchInputCancel.addEventListener('click', () => {
//     callBtn.style.display = 'inline-block';
//     searchInput.style.display = 'none';
//     errorMsg.style.display = 'none'
// })



// search bar 
// input.addEventListener('click', () => {
//     let IV = searchInputValue.value;
//     let reg = new RegExp(input, 'gi');
//     //    console.log(regExp);
//     // const result = regExp.exec(wholeDocument);
//     const result = wholeDocument.match(regExp)
//     console.log(result);
//     //   const updateD =  regExp.source.replace(regExp, "<mark>$&</mark>");
//     //   console.log(updateD);
//     //  regExp.source.style.backgroundColor = 'red';
//     // console.log(result.index);

//     console.log(wholeDocument.length);
// })

// const wholeDocument = document.body.innerText;
// const searchInputValue = document.getElementById('sInputValue');
// const go = document.getElementById('go');
// const errorMsg = document.getElementById('error-msg');

// go.addEventListener('click', () => {
//     let IV = searchInputValue.value;
//     let regExp = new RegExp(IV, 'gi');
//     const result = wholeDocument.match(regExp);
//     if (result === null) {
//         errorMsg.innerText = ` ' ${IV} ' not in the Document`;
//         errorMsg.style.cssText = `color: red;`;
//      return
//     }

//     errorMsg.innerText = `' ${IV} ' is AVAILABLE! in this page`;
//     errorMsg.style.cssText = `color: green;`;
//     var Wdocs = document.body;
//     var creteNew = new Mark(Wdocs);
//     creteNew.markRegExp(regExp);
// })
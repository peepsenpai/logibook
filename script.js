
function openNav() {
    document.getElementById('h2-item-box').style.display = "block";
    document.getElementById('right-bars1').style.display = "none"
    document.getElementById('left-bar-2').style.display = "block";
}

function closeNav() {
    document.getElementById('h2-item-box').style.display = "none";
    document.getElementById('right-bars1').style.display = "block"
    document.getElementById('left-bar-2').style.display = "none";

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


// search box 
const searchIcon = document.getElementById('fa-search');
const searchInput = document.getElementById('searchInput'),
    callBtn = document.getElementById('searchbtn');
searchIcon.addEventListener('click', () => {

    callBtn.style.display = 'none';
    searchInput.style.display = 'inline-block';

})
const searchInputCancel = document.getElementById('fa-times');

searchInputCancel.addEventListener('click', () => {
    callBtn.style.display = 'inline-block';
    searchInput.style.display = 'none';
    errorMsg.style.display = 'none'
})



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

const wholeDocument = document.body.innerText;
const searchInputValue = document.getElementById('sInputValue');
const go = document.getElementById('go');
const errorMsg = document.getElementById('error-msg');

go.addEventListener('click', () => {
    let IV = searchInputValue.value;
    let regExp = new RegExp(IV, 'gi');
    const result = wholeDocument.match(regExp);
    if (result === null) {
        errorMsg.innerText = ` ' ${IV} ' not in the Document`;
        errorMsg.style.cssText = `color: red;`;
        return
    }
    
    errorMsg.innerText = `' ${IV} ' is AVAILABLE! in this page`;
    errorMsg.style.cssText = `color: green;`;

    for (let i = 0; i < wholeDocument.length; i += 1) {
        let str = wholeDocument[i];
        let MatchStr = str.match(regExp);
        if (MatchStr) {
            let newSpan = document.createElement('SPAN')
            let splitStr = str.split(MatchStr[0])
            newSpan.innerText = MatchStr[0]
            newSpan.style.backgroundColor = 'green'
            wholeDocument[i].innerHTML = ''
            wholeDocument[i].append(splitStr[0])
            wholeDocument[i].appendChild(newSpan)
            wholeDocument[i].append(splitStr[1])
        }
    }
})

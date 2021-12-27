const payoutEl = document.querySelector('.payout');
const innerEl = document.querySelector('.payout__inner');
const scrollEl = document.querySelector('.payout__scroll-btn');

const transferBtnEl = document.querySelector('.account__transfer--btn');
const transferEl = document.querySelector('.transfer');
const inputBtn = document.querySelector('.transfer__button');
const cancelEl = document.querySelector('.transfer__cancel');


// 시간
let today = document.querySelector('.time');
let time = new Date();
let hours = time.getHours(); // 시
let minutes = time.getMinutes();  // 분

today.textContent = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`

// payout 홈화면 올리기
let payoutCount = 0;

scrollEl.addEventListener('click', () => {
    if(payoutCount === 1){
        payoutCount = 0;
        console.log('bye');
        payoutEl.classList.remove('payout-up');
        innerEl.classList.remove('inner-up');
    } else {
        payoutCount += 1;
        console.log('hi');
        payoutEl.classList.add('payout-up');
        innerEl.classList.add('inner-up');
    }
    
});

// 이체 화면 올리기
transferBtnEl.addEventListener('click', () => {
    console.log('scroll-up');
    transferEl.classList.add('scroll-up');
});

// 이체 화면 -> 취소 클릭시 홈화면으로 돌아가기
cancelEl.addEventListener('click',() => {
    console.log('cancel');
    transferEl.classList.remove('scroll-up');
});

// 이체 화면 -> 직접입력 클릭시 화면 이동
inputBtn.addEventListener('click', () => {
    location.href = "transfer.html";
});
// 취소 클릭 시 메인 홈화면으로 이동
// const cancel = document.querySelector('.transfer__cancel');

// cancel.addEventListener('click', () => {
//     location.href = "index.html";
// });
function cancel() {
    location.href = "index.html";
}

// 해당 숫자를 누르면 보낼 금액이 입력되는 기능
const inputNumEl = document.querySelector('.transfer-input__number');
//console.log(inputNumEl);
const numEl = inputNumEl.querySelectorAll('span');
//console.log(numEl);
const inputEl = document.querySelector('.transfer-input__money--input');
const nextBtn = document.querySelector('.transfer-input__next-btn');

let count = 1;
let i = 0;
let stringNum = []; //빈 배열 만들기

function addComma() { // 숫자 세자리 콤마 넣기
    var money = inputEl.innerHTML
    var moneyComma = Number(money).toLocaleString('en')
    console.log('comma: '+moneyComma)
    inputEl.innerHTML = moneyComma
}

// 나중에 해볼 미션 - num()과 delete()함수 합쳐보기 & 중복 코드 없애서 효율적으로 만들어보기
function num(num) {
    nextBtn.style.display = 'block'; // 숫자 입력 시 다음 버튼 만들기
    let numbers = num;
    if(numbers===10){
        for(let m=0; m<2; m++){
            stringNum[i]=0;
            i++;
        }
    } else {
        stringNum[i] = numbers;
        i++;
    } 
    // 숫자를 클릭할때마다 함수가 실행되기 때문에 함수 실행마다 innerHTML을 초기화시킴
    inputEl.innerHTML = ''
    for(i=0; i<stringNum.length ; i++) {
        // 배열의 길이만큼 반복해서 innerHTML문자 추가
        inputEl.innerHTML += stringNum[i]
    }
    addComma()
}

function deleteNum() {
    stringNum.pop()
    inputEl.innerHTML = ''
    for(i=0; i<stringNum.length ; i++) {
        inputEl.innerHTML += stringNum[i] // 배열의 길이만큼 반복해서 innerHTML문자 추가
    }
    addComma()
    
    if(stringNum.length === 0){
        nextBtn.style.display = 'none'; // 배열안의 객체가 없을 시 다음 버튼 없애기
    }
}

// 숫자 입력 시 다음 버튼이 뜨고 클릭시 이체 완료 화면으로 넘어감
function next() {
   document.querySelector('.transfer-clear').style.top='0px';
   console.log('입력한 숫자: '+inputEl.textContent);
   console.log('type: '+typeof inputEl.innerHTML);
   // 이체 화면에서 해당 이름 innerHTML의 정보를 가져와서 직접입력화면의 이체 상대프로필 변경하기
   let text =  `${inputEl.innerHTML}`;
   const textEl = document.querySelector('.transfer-clear__text');
   console.log('text: '+text);
   textEl.innerHTML = '정을수님께'+'<br/>'+text+'원이'+'<br/>'+'이체되었습니다.';
}
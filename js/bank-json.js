//bank.json 불러오기
const URL = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f6e4d3d3-c52c-4ea8-b665-968a3b17c5ea/bank.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211227T035637Z&X-Amz-Expires=86400&X-Amz-Signature=98b62abdf9a4152f2f459c9a58578da3c7dde72d6dcbcdbbb96cbf8b4cc2ed70&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22bank.json%22&x-id=GetObject";

fetch(URL, {
    method: "GET",
})
.then( res => res.json() ) 
.then( obj => { start(obj) } );


const payoutLi = document.querySelectorAll('.payout__list');

function start(bank) {
    // bankList 배열 거꾸로 뒤집기
    const reverseBank = bank.bankList.reverse();
    
    payoutLi.forEach( (e, i) => {
        const ulElem = document.createElement('ul');
        payoutLi[i].appendChild(ulElem)
            
        for(let j = 4*i ; j < 4*i+4 ; j++){
            const liElem = document.createElement('li');
            const spanElem = document.createElement('span');
            const pElem = document.createElement('span');
            console.log('his: '+`${j}:`+reverseBank[j].history);
            spanElem.textContent = reverseBank[j].history;
            pElem.textContent = reverseBank[j].price;
            ulElem.appendChild(liElem);
            liElem.appendChild(spanElem);
            liElem.appendChild(pElem);
        }
       
        
    })
}
// 현재 상황까지 아쉬운 점
// 데이터를 불러오기는 했으나 내가 원하는 부분의 데이터를 골라서 가져오지 못함
// json을 포함해서 배열에 관한 js지식이 더 필요할듯



// TODO 
// 1. 날짜별 구분하기(오늘, 어제, 2일전 구분해서 데이터 불러오기)
// 2. 지출, 입금 구분하기
// 3. 화면 슬라이더로 변경하기


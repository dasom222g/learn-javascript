// console.log("후츠릿 구독 좋아요");
// console.log(2 + 2);

// 자바스크립트 주석: 슬러시2개
// 변수
const youtube = "후츠릿"; // 상수
let comment = "구독 좋아요"; // 변수
console.log("🚀 ~ comment:", comment);

console.log("youtube", youtube);

// youtube = "태요미네"; // const변수는 재할당 불가능

comment = "알림설정";
console.log("🚀 ~ comment:", comment);

const number = 1; // 숫자 타입
const number2 = "1";
console.log("🚀 ~ number:", number, typeof number);
console.log("🚀 ~ number2:", number2, typeof number2);

// boolean의 값: true/false
const bool = false;
console.log("🚀 ~ bool:", bool, "bool 타입:", typeof bool);

// null, undefined
const empty = null;
console.log("🚀 ~ empty 타입:", empty);

let empty2; // empty2라는 변수를 선언했지만 값은 할당하지 않음
console.log("🚀 ~ empty2 타입:", typeof empty2);

// 함수
console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

// 함수를 정의한다, 선언한다
// function helloWorld() {// 실행 로직 부분
//   console.log("⭐️ hello world!");
// }

// function helloWorld() {}

const helloWorld = () => {
  console.log("⭐️ hello world!");
};

// 함수를 호출한다, 실행한다
helloWorld();

// 미션2: userInfo: userName과 age를 console탭에 출력하는 함수 만들기

// 미션1: 이름, 나이를 변수에 각각 저장하고 콘솔에 찍어보기
const userName = "후츠릿";
const age = 35;
console.log("🚀 ~ userName:", userName, "age", age);

// 매개변수(parmeter)
const userInfo = (userName, userAge) => {
  console.log(userName + " 님! 반갑습니다!");
  console.log(userAge + "세 이시군요!");
  console.log("더블:" + userAge * 2);
};

// 인자(argument)
userInfo(userName, age);

// 미션3: 숫자 2개를 받아서 이 숫자들을 더해서 console에 출력하는 함수 작성

// 함수 정의
const add = (num1, num2) => {
  // 실행 로직
  const result = num1 + num2;
  console.log("🚀 ~ add", result); // 30
  return result;
};

// 함수 호출
const sum = add(10, 20); // 30

const doubleSum = (num) => {
  return num * 2; // 60
};

console.log("doubleSum", doubleSum(30));

// 미션4: toUpperCase메소드를 이용해 영문이름을 대문자로 반환하는 함수. 단, 이름은 parameter받기

// 함수 정의
// const upperString = (name) => {
//   return name.toUpperCase();
// };

const upperString = (name) => name.toUpperCase();

// 함수 호출
console.log("upperString: ", upperString("Dasom")); // DASOM

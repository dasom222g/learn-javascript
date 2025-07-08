// forEach문
const numbers = [2, 5, 7, 9, 4];

// for (let i = 0; i < numbers.length; i++) {
//   console.log("i값:", numbers[i]);
// }

numbers.forEach((element, index, array) => {
  // forEach실행 로직
  console.log("element", element);
  console.log("index", index);
  console.log("array", array);
  console.log("===================");
});

const ingredients = ["🥬", "🍅", "🧀", "🥓"];

let sandwitch = "🥖";

// 완성된 샌드위치
ingredients.forEach((item) => {
  console.log("item:", item);
  sandwitch += item;
});

console.log("🚀 ~ sandwitch:", sandwitch);

// for문
let count = 0;

const studentList = [
  {
    name: "강경덕",
    mbti: "ISTJ",
    favoriteFoods: ["국밥", "밀면"],
  }, // 첫번째 학생정보
  {
    name: "김관태",
    mbti: "INFJ",
    favoriteFoods: ["치킨", "햄버거"],
  }, // 두번째 학생정보
  {
    name: "김다영",
    mbti: "INTP",
    favoriteFoods: ["감자탕", "파스타"],
  }, // 세번째 학생정보
];

for (let i = 0; i < studentList.length; i++) {
  // 반복 조건식이 true인 경우 실행
  console.log(i, "번째 실행중");

  console.log("studentList[i]", studentList[i].mbti);

  // count = count + 1;
  count += 1;
}

// for (let i = 0; i < 10; i++) {
//   // 반복 조건식이 true인 경우 실행
//   console.log(i, "번째 실행중");
//   // count = count + 1;
//   count += 1;
// }

console.log("반복문 끝!!");
console.log("🚀 ~ count:", count);

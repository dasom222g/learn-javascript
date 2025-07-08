const monday = "월요일";
const tuesday = "화요일";
const wendsday = "수요일";

const dayOfweeks = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];
console.log("🚀 ~ dayOfweeks:", dayOfweeks);

console.log(`오늘은 "${dayOfweeks[1]}"입니다`);

// 일요일

// 멀티캠퍼스 수강생 명단
const students = [
  "강경덕",
  "김관태",
  "김다영",
  "김서진",
  "김태원",
  "이혜림",
  "장기만",
];
console.log("🚀 ~ students:", students);

console.log("students갯수:", students.length);

console.log("마지막 수강생:", students[students.length - 1]);

// 미션 1: 내 이름 뽑아오기

const studentName = "후츠릿";
const studentMBTI = "ENTJ";
const studentAttendanceCheck = true;

// 객체: key-value가 한쌍으로 구성된 정보들의 묶음
const studentInfo = {
  name: "후츠릿",
  mbti: "ENTJ",
  attendanceCheck: true,
};
console.log("🚀 ~ studentInfo:", studentInfo);
console.log("name:", studentInfo["name"]);
console.log("name(.):", studentInfo.name);

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

// 미션: 해당 값 뽑아와서 console에 출력하기
// 1. 경덕님의 MBTI는?
// 2. 관태님의 favoriteFoods 첫번째 음식은?
// 3. 마지막 학생의 이름은?

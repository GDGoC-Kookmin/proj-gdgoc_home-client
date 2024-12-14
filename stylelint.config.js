module.exports = {
  extends: ["stylelint-config-standard"], // 기본 설정
  rules: {
    "color-hex-case": "lower", // 색상 코드를 소문자로 강제
    "indentation": 2, // 들여쓰기 2칸
    "number-leading-zero": "always", // 소수점 앞에 0 강제
    "string-quotes": "double", // 문자열은 항상 큰따옴표 사용
  },
};

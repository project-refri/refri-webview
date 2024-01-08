export default function getRandomName() {
  const mainName = '리프렌즈';
  const randomAlphabet = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  const randomNumber = Math.floor(Math.random() * 9) + 1;
  const randomName = mainName + randomAlphabet + randomNumber;

  return randomName;
}

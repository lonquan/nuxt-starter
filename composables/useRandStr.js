export const useRandStr = (length = 10) => {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numericChars = "0123456789";
  const allChars = uppercaseChars + lowercaseChars + numericChars;

  let randomString = "";

  // 随机选择一个大写字母、一个小写字母和一个数字
  randomString += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  randomString += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  randomString += numericChars.charAt(Math.floor(Math.random() * numericChars.length));

  // 生成剩余的字符
  for (let i = 3; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    randomString += allChars.charAt(randomIndex);
  }

  // 将生成的字符串随机打乱顺序
  randomString = randomString.split('').sort(() => Math.random() - 0.5).join('');

  return randomString;
}
const input = "1HGCM82633A004352";

const arraySplit = (array) => {
  const part1 = [];
  const part2 = [];
  const part3 = [];

  array.forEach((element, index) => {
    if (index >= 0 && index < 3) {
      part1.push(element);
    }
    if (index >= 3 && index < 9) {
      part2.push(element);
    }
    if (index >= 9) {
      part3.push(element);
    }
  });
  return [part1, part2, part3];
}

const encrypt = (value) => {
  const array = value.split('');
  const [part1, part2, part3] = arraySplit(array);

  const part1Encrypted = part1.reverse();
  const part2Encrypted = [];
  part2.forEach((element, index) => {
    if (index === 4) {
      return part2Encrypted.push(part2[0]);
    }
    if (index === 5) {
      return part2Encrypted.push(part2[1]);
    }
    return part2Encrypted.push(part2[index+2])
  })

  const sumCharCode = 18;  

  const part3Encrypted = [];

  part3.forEach((element) => {
    const code = element.toString().charCodeAt(0);
    const newCode = code + sumCharCode;
    part3Encrypted.push(String.fromCharCode(newCode));
  })

  const encrypted1Str = part1Encrypted.join('');
  const encrypted2Str = part2Encrypted.join('');
  const encrypted3Str = part3Encrypted.join('');

  return `${sumCharCode}${encrypted1Str}${encrypted2Str}${encrypted3Str}`
}

console.log(encrypt(input));
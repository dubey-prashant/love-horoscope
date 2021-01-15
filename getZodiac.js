exports.getZodiac = function (dOB) {
  var day = dOB.substring(8, 10);
  var month = dOB.substring(5, 7);
  var dOB = Number(month + day);
  var zodiacSign = "";

  if (dOB >= 120 && dOB <= 218) {
    zodiacSign = "Aquarius";
  } else if (dOB > 219 && dOB < 320) {
    zodiacSign = "Pisces";
  } else if (dOB > 321 && dOB < 419) {
    zodiacSign = "Aries";
  } else if (dOB > 420 && dOB < 520) {
    zodiacSign = "Taurus";
  } else if (dOB > 521 && dOB < 620) {
    zodiacSign = "Gemini";
  } else if (dOB > 621 && dOB < 722) {
    zodiacSign = "Cancer";
  } else if (dOB > 723 && dOB < 822) {
    zodiacSign = "Leo";
  } else if (dOB > 823 && dOB < 922) {
    zodiacSign = "Virgo";
  } else if (dOB > 923 && dOB < 1022) {
    zodiacSign = "Libra";
  } else if (dOB > 1023 && dOB < 1122) {
    zodiacSign = "Scorpius";
  } else if (dOB > 1123 && dOB < 1221) {
    zodiacSign = "Sagittarius";
  } else if ((dOB >= 101 && dOB <= 119) || (dOB >= 1222 && dOB <= 1231)) {
    zodiacSign = "Capricorn";
  } else {
    zodiacSign = "Please provide your D.O.B. ";
  }

  return " You are " + zodiacSign + " !";
};

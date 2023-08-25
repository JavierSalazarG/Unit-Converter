const Calc = (amount, medida, formula) => {
  const parsedAmount = parseFloat(amount);
  const parsedMedia = parseFloat(medida);

  if (!isNaN(parsedAmount) && !isNaN(parsedMedia)) {
    if (formula === "multiplicar") {
      return (parsedAmount * parsedMedia).toFixed(2);
    } else {
      return (parsedAmount / parsedMedia).toFixed(2);
    }
  } else {
    return "";
  }
};

export { Calc };

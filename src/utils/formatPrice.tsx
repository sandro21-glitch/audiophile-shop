export const formatPrice = (number: number) => {
  // Round the number to one decimal place
  const roundedNumber = Math.round(number * 10) / 10;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1, // Allow one decimal place
  }).format(roundedNumber);

  // Remove the ".0" if present
  return formattedPrice.replace(/\.0$/, "");
};

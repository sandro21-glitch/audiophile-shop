export const formatPrice = (number: number) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);

  // Remove the ".00" if present
  return formattedPrice.replace(/\.00$/, "");
};

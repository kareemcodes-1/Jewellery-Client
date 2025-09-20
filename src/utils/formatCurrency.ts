export default function formatCurrency(price: number) {
  const priceFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return priceFormat.format(price);
}

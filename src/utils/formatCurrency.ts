export default function formatCurrency(price: number){
    const priceFormat = new Intl.NumberFormat("en-US", {
        style: 'currency',
        currency: 'USD', 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
    return priceFormat.format(price);
}
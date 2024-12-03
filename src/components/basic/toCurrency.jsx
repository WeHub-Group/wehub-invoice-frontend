export const toCurrencyFormat = (number) => {
    return number.toLocaleString("en-US", { style: "currency", currency: "NGN" });
}
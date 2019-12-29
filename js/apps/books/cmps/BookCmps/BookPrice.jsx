export default function BookPrice(props) {
    let bookPrice = props.price
    const isOnSale = props.isOnSale
    const currency = props.currency
    switch (currency) {
        case 'USD':
            bookPrice = '$' + bookPrice
            break;
        case 'EUR':
            bookPrice = '€' + bookPrice
            break;
        case 'ILS':
            bookPrice = '₪' + bookPrice
            break;
    }
    return isOnSale ? bookPrice + ' 💰 SALE' : bookPrice
}
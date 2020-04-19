const currencyFormatter = (num)=>{
    return new Intl.NumberFormat('en-IN',{ style: 'currency', currency: 'ILS' }).format(num);

}
const wordFormatter = (str)=>{
    str = str.trim().toLowerCase();
    return str[0].toUpperCase()+ str.slice(1);
}
export {currencyFormatter,wordFormatter}
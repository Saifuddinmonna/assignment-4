// problem-5 
function publicBusFare(i) {
        const a = i % 50;
        const b = a % 11;
        const c = b * 250;
        return c;

}
const c = publicBusFare;
console.log(publicBusFare(210));
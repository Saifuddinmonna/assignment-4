
// Problem-1 
function radiansToDegree(radians) {
	const radianIs = radians * (180 / Math.PI);
	return radianIs;
}
const radianIs = radiansToDegree;
console.log(radiansToDegree(10));

// problem-2 

function isJavaScriptFile(a) {
        const fileName= a;
       
        const jsIdentificationIs = fileName.endsWith(".js");
           return jsIdentificationIs;       
      
      
        }
isJavaScriptFile("app.s");


// problem-3 
function oilPrice(literDiesel, literPetrol, literOkten) {
	const perDiesel = 114;
	const perPetrol = 130;
	const perOctane = 135;
	const dieselPrice = perDiesel * literDiesel;
	const petrolPrice = perPetrol * literPetrol;
	const octanePrice = perOctane * literOkten;
	const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
	return totalOilPrice;
}
const totalOilPrice = oilPrice(3, 2, 2);
console.log(totalOilPrice);

// problem-5 
function publicBusFare(i) {
        const a = i % 50;
        const b = a % 11;
        const c = b * 250;
        return c;

}
const c = publicBusFare;
console.log(publicBusFare(210));
        


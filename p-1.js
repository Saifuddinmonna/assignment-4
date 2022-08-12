// Problem-1

// 	// console.log("your put invalid input");
// }

function radiansToDegree(radians) {
       
        const radianIs = Number.parseInt(radians * (180 / Math.PI));
       
	return radianIs; 
}
const radianIs = radiansToDegree;
console.log(radiansToDegree(5));
//  if (Number.isNaN(radians)) {
// 		return "Number NaN";
//  }

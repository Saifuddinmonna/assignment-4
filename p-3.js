function oilPrice(literDiesel, literPetrol,literOkten) {

        const perDiesel = 114;
        const perPetrol = 130;
        const perOctane = 135;
        const dieselPrice =  perDiesel*literDiesel ;
        const petrolPrice = perPetrol*literPetrol ;
        const octanePrice = perOctane*literOkten ;
        const totalOilPrice = dieselPrice + petrolPrice + octanePrice;
        return totalOilPrice
}
const totalOilPrice=oilPrice(3,2,2)
console.log(totalOilPrice);
        


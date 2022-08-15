/**
 * Always wrap () around formulas while writting formulas
 */
var SP = 199;
var LP = 799;

var discountPercentageForm =  ((LP-SP)/LP) * 100 ;

console.log ("discount percentage is " , discountPercentageForm);

discountPer =  Math.round(discountPercentageForm);

console.log(discountPer,"%OFF")


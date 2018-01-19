import * as Helpers from './helpers/helpers';
import * as Data from './data/data';

const upperCasedSentence = Helpers.getUpperCase('Time for a quick break then you can get back to work');
console.log(upperCasedSentence);

const moneyAfterRaise = Data.square(3);
const moneyAfterBuffet = Data.subtract(moneyAfterRaise, 5);

console.log(moneyAfterBuffet);
console.log(Data.greeting);

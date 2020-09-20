
class SetValidator {
    static validateArray(array) {
        return isArray(array);
    }
    static validateNumber(number, set) {
        return (
            isNumber(number) &&
            isInteger(number) &&
            intervalNumber(number) &&
            existisNumber(number, set)
        );
    }
}
const isArray = array => (Array.isArray(array));
const isNumber = number => (typeof number === 'number');
const isInteger = number => (Number.isInteger(number));
const intervalNumber = number => (number >= -1000 && number <= 1000);
const existisNumber = (number, set) => (!set.find(setElement => setElement === number));

module.exports = { SetValidator };
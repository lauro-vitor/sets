
const { SetValidator } = require('../Validator/SetValidator');
class SetController {
    constructor() {
        this.set = [];
    }
    getSet() {
        if (this.set.length > 1) {
            this.set.sort((a, b) => a - b);
        };
        return this.set;
    }
    addNumbers(array) {
        if (SetValidator.validateArray(array)) {
            array.map(value => {
                if (SetValidator.validateNumber(value, this.set)) {
                    this.set.push(value);
                }
            });
        }
    }
}
module.exports = { SetController };
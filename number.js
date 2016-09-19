const numbers = {
    '3': 'Fizz',
    '5': 'Buzz',
    '7': 'Whizz'
};

function saying(number) {
    let result = '';
    let keys = Object.keys(numbers);
    if (number.toString().indexOf(keys[0]) >= 0) {
        return numbers[keys[0]];
    }
    keys.forEach(key => {
        result += number % parseInt(key) === 0 ? numbers[key] : '';
    });

    return result ?  result:number.toString();
}

module.exports = {saying};
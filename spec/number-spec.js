const number=require("../number");
describe("number",()=>{
    it("",()=>{
       expect('Fizz').toEqual(number.getNumber(3)) ;
    });
    it("include 3",()=>{
        expect('Fizz').toEqual(number.getNumber(13)) ;
    });
    it("fiveTimes", () => {
        expect('Buzz').toEqual(number.getNumber(5)) ;

    });
    it("threeTimes", () => {
        expect('Fizz').toEqual(number.getNumber(9)) ;

    });
    it("sevenTimes", () => {
        expect('Whizz').toEqual(number.getNumber(7)) ;

    });
    it("threeTimes&fiveTimes", () => {
        expect("FizzBuzz").toEqual(number.getNumber(60)) ;

    });
    it("fiveTimes&sevenTimes", () => {
        expect("BuzzWhizz").toEqual(number.getNumber(70)) ;

    });
    it("common number", () => {
        expect("1").toEqual(number.getNumber(1)) ;

    })

});

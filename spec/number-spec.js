const number=require("../number");
describe("number",()=>{
    it("contain 3",()=>{
       expect(number.saying(3)).toEqual('Fizz') ;
    });
    it("include 3",()=>{
        expect(number.saying(13)).toEqual('Fizz') ;
    });
    it("fiveTimes", () => {
        expect(number.saying(5)).toEqual('Buzz') ;

    });
    it("threeTimes", () => {
        expect(number.saying(9)).toEqual('Fizz') ;

    });
    it("sevenTimes", () => {
        expect(number.saying(7)).toEqual('Whizz') ;

    });
    it("threeTimes and fiveTimes", () => {
        expect(number.saying(60)).toEqual('FizzBuzz') ;

    });
    it("fiveTimes and sevenTimes", () => {
        expect(number.saying(70)).toEqual('BuzzWhizz') ;

    });
    it("common number", () => {
        expect(number.saying(1)).toEqual('1') ;

    })
});

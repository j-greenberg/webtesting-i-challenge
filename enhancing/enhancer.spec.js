const enhancer = require('./enhancer.js');

// test away!

const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!
    describe("enhancer.js", () => {
    // test case
    it("should run tests without errors", () => {
        // arrange --> setup the world
        // act --> execute the code we're testing
        // assert --> check our assumptions
        expect(true).toBe(true); // assertion
    });
    });

    describe(".repair()", () => {
        it('returns a new item with durability back to 100', () => {
            const item = {durability: 80};
            expect(repair(item).durability).toBe(100);
        })
    });

    describe(".succeed()", () => {
        it('adds 1 to enhancement if lv < 20, else returns as is', () => {
            const item1 = {enhancement: 20};
            const item2 = {enhancement: 5};
            expect(succeed(item1).enhancement).toBe(20);
            expect(succeed(item2).enhancement).toBe(6);
        })
    });

    describe(".fail()", () => {
        it('decreases durability on condition', () => {
            const item1 = {enhancement: 20, durability: 80};
            const item2 = {enhancement: 5, durability: 80};
            expect(fail(item1).durability).toBe(70);
            expect(fail(item2).durability).toBe(75);
            expect(fail(item1).enhancement).toBe(19);
        })
    });
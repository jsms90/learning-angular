describe('The list of cities', function () {
    it('is an array', function () {
        expect(cities.list).toBeArray();
    });
    it('is an array of strings', function () {
        expect(cities.list).toBeArrayOfStrings();
    });
    it('contains London', function () {
        expect(cities.list).toContain('London');
    });
});

describe('Calling "cities.add(\'Liverpool\')"', function () {
    let length;
    beforeEach(function() {
        length = cities.list.length;
        cities.add('Liverpool');
    });

    describe('adds only one item to the list: "Liverpool"', function () {
        it('"adds "Liverpool" to the list', function () {
            expect(cities.list).toContain('Liverpool');
            expect((cities.list.length - length)).toBe(1);
        });
    });
});

describe('Calling "cities.remove(\'Berlin\')"', function () {
    let length;
    beforeEach(function() {
        length = cities.list.length;
        cities.remove('Berlin');
    });

    describe('removes only one item from the list: "Berlin"', function () {
        it('"removes "Berlin" from the list', function () {
            expect(cities.list).not.toContain('Berlin');
            expect((length - cities.list.length)).toBe(1);
        });
    });
});

describe('The function that prints the list', function () {
    beforeEach(function() {
        spyOn(cities, 'print');

        cities.add('Liverpool');
        cities.remove('London');
    });

    it('is being called each time we update the list', function () {
        expect(cities.print).toHaveBeenCalledTimes(2);
    });
});

describe('When printing the list', function () {
    beforeEach(function() {
        cities.print();
    });

    it('the separator is ", "', function () {
        expect(cities.printed).toContain(', ');
    });
});

const cities =  {
    printed: '',
    list: ['Paris', 'Barcelona', 'Berlin', 'New York'],
    add: function (city) {
        this.list.push(city);
        this.print();
    },
    print: function () {
        this.printed = this.list.join(',');
        console.log(this.printed);
    },
    remove: function (city) {
        if (this.list.indexOf(city) !== -1) {
            this.list.splice(this.list.indexOf(city), 2);
        }
        this.print();
    }
}

cities.print();

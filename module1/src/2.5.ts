{
    // assignment 1
    const formatString = (input: string, toUpper?: boolean) => {

        if (toUpper) {
            return input.toUpperCase();
        }
        else if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }

    // assignment 2
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    const filterByRating = (items: { title: string; rating: number }[]): { title: string; rating: number }[] => {
        const remainRatingData = items.filter(data => data.rating >= 4);
        return remainRatingData;
    };

    // assignment 3
    function concatenateArrays<T>(...arrays: T[][]): T[] {
        const result: T[] = [];

        for (let i = 0; i < arrays.length; i++) {
            const currentArray = arrays[i];
            for (let j = 0; j < currentArray.length; j++) {
                result.push(currentArray[j]);
            }
        }
        return result;
    }

    // assignment 4 
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        public getInfo(): string {
            return `Make: ${this.make}, Year: ${this.year}`;
        }
    }
    class Car extends Vehicle {
        private model: string;
        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        public getModel(): string {
            return `Model: ${this.model}`;
        }
    }

    const myCar = new Car("Toyota", 2020, "Corolla");
    myCar.getInfo()
    myCar.getModel()

    // assignemt 5 

    function processValue(value: string | number): number {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value * 2;
        }
    }

    // assignmet 6 
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]): Product | null {
        if (products.length === 0) {
            return null;
        }

        let mostExpensive = products[0];
        for (const product of products) {
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        return mostExpensive;
    }

    const products: Product[] = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];


    // assignmet 7 

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        switch (day) {
            case Day.Saturday:
            case Day.Sunday:
                return "Weekend";
            default:
                return "Weekday";
        }
    }

    // assignment 8 
    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return n * n;
    }


    squareAsync(4)
    squareAsync(-3)

}







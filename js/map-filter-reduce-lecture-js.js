(() => {
    const url = './Data/houses.json'
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }
    fetch(url, options)
        .then(response => {
            return response.json();
        })
        //houses = data
        .then(houses => {
            // console.log(houses)
            // working with houses array
            // // using for loop to filter houses with only two beds plus
            // const housesTwoBedsPlus = [];
            // for (let house of houses){
            //         const numberOfBeds = parseFloat(house.beds);
            //     if (numberOfBeds >= 2) {
            //         housesTwoBedsPlus.push(house)
            //     }
            // }
            // console.log(housesTwoBedsPlus)


            //using filter mehtod to filter houses with ounly two beds plus
            const housesTwoBedsPlus = houses.filter(house => {
                return parseFloat(house.beds) >= 2;
            })
            console.log(housesTwoBedsPlus)

            //map method
            //transforms each element in an array
            //returns a new array with the transformed elements

        //     let housesPriceRange = houses.map(house => {
        //         const priceRange = 150_000;
        //         const canBuy = parseFloat(house.price) > priceRange ? 'No' : 'yes'
        //         if (parseFloat(house.price) < priceRange) {
        //             const newValue = `address: ${house.address}, can i afford it? ${canBuy}`;
        //             return newValue;
        //         }
        //     })
        //         .filter(house => {
        //         return house
        //     });
        //     console.log(housesPriceRange)

            //reduce method
            //return final result of a single conclusion
            const LargestPrice = houses.reduce(
                /* function parameter*/
                (accumulator, house/*current value*/, index)=>{
                    let price = parseFloat(house.price)
                    if (pirce > accumulator){
                        accumulator = price;
                    }
                    return accumulator
                },

                /*data type of initial value for the accumulator*/
                0
            )
                    console.log(LargestPrice)
        });

})();
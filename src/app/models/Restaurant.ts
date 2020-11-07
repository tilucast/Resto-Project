interface Restaurant {
    id: number,
    name: string,
    stars: [],
    address: string
}

interface RestaurantForm{
    name: string,
    address: string,
    stars: [] | number | any,
    id?: string | number
}

export {Restaurant, RestaurantForm}


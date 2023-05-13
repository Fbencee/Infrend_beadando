export interface CostumerDTO {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    phonenumber: string;
    orders: OrderDTO[]
}

export interface FoodDTO {
    id: number;
    name: string;
    desc: string;
    preptime: number;
    price: number;
    orderitems: OrderitemDTO[];
}

export interface OrderDTO {
    id: number;
    ordertime: Date;
    totalprice: number;
    comments: string;
    address: string;
    costumer: CostumerDTO;
    orderitems: OrderitemDTO[];
}

export interface OrderitemDTO {
    id: number;
    starttime: Date;
    endtime: Date;
    order: OrderDTO;
    food: FoodDTO;
    oven: OvenDTO;
}

export interface OvenDTO {
    id: number;
    name: string;
    orderitems: OrderitemDTO[];
}

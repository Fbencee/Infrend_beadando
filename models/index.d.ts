export interface CostumerDTO {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    phonenumber: string;
    orders: null | OrderDTO[];
}

export interface FoodDTO {
    id: number;
    name: string;
    desc: string;
    preptime: number;
    price: number;
    orderitems: null | OrderitemDTO[];
}

export interface OrderDTO {
    id: number;
    ordertime: Date;
    totalprice: number;
    comments: string;
    costumer: null | CostumerDTO;
    orderitems: null | OrderitemDTO[];
}

export interface OrderitemDTO {
    id: number;
    starttime: Date;
    endtime: Date;
    order: null | OrderDTO;
    food: null | FoodDTO;
}

export interface OvenDTO {
    id: number;
    name: string;
    finishtime: Date;
}

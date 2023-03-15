import { QueryDto } from "./quey.dto";

export interface ResponseCurrencyDto<T>{
    data: T,
    message: string,
    success: boolean
}
import { QueryDto } from "./quey.dto";

export interface PaginationDto{
    limit: number,
    currentPage: number,
    totalPages: number,
    totalValues: number,
    values: QueryDto[],
    
}



 
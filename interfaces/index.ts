export interface IPassword {
    id?: string;
    name: string;
    url: string;
    username: string;
    password: string;
    notes?: string;
    isFav: boolean
}

export interface IProcessCard {
    id?: string;
    name: string;
    icon: string;
    status?: boolean;
}
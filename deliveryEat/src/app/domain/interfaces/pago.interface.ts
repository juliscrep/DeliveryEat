import { Card } from './card.interface';

export interface Pago {
    montoPagar: number;
    formaDePago: string;
    tarjeta?: Card;
}
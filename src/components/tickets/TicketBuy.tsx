import React from "react";
import { CarrierType, CurrencyType, Ticket } from "../../types/types";
import { transportCompanies } from "../../images";

interface TicketProps {
    ticket: Ticket;
    currency: CurrencyType;
    createPrice: (price: number, value: CurrencyType) => string;
}

const TicketBuy = ({ ticket, currency, createPrice }: TicketProps) => {
    return (
        <div className="container_buy">
            <div>
                <img
                    src={transportCompanies[ticket.carrier as CarrierType]}
                    alt="carrier"
                    className="carrier"
                />
            </div>
            <div>
                <button type="button" className="btn btn-warning">
                    Купить <br />
                    за
                    {" " + createPrice(ticket.price, currency)}
                </button>
            </div>
        </div>
    );
};

export default TicketBuy;

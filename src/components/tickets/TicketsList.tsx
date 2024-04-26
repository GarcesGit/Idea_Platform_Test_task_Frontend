import React from "react";
import "./TicketsStyles.css";
import { CurrencyType, Tickets } from "../../types/types";
import uuid from "react-uuid";
import { formateDate } from "../../utils";
import TicketBuy from "./TicketBuy";
import TicketInfo from "./TicketInfo";

interface TicketsProps {
    tickets: Tickets;
    currency: CurrencyType;
}

const TicketsList = ({ tickets, currency }: TicketsProps) => {
    const setWordforStops = (value: number | null) => {
        if (value === 0) {
            return " пересадок";
        }
        if (value === 1) {
            return " пересадка";
        }
        return " пересадки";
    };

    const formatNumber = (num: number) => new Intl.NumberFormat("ru-RU").format(num);

    const createPrice = (price: number, value: CurrencyType) => {
        if (value === "USD") {
            return formatNumber(Math.floor(price / 90)) + " $";
        }
        if (value === "EUR") {
            return formatNumber(Math.floor(price / 99)) + " €";
        }
        return formatNumber(price) + " ₽";
    };

    return (
        <div className="ticketsList">
            {tickets.map((ticket) => (
                <div className="container_tickets" key={uuid()}>
                    <TicketBuy
                        ticket={ticket}
                        currency={currency}
                        createPrice={createPrice}
                    />
                    <TicketInfo
                        ticket={ticket}
                        setWordforStops={setWordforStops}
                        formateDate={formateDate}
                    />
                </div>
            ))}
        </div>
    );
};

export default TicketsList;

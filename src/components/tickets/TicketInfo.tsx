import React from "react";
import { Ticket } from "../../types/types";
import plane_small from "../../images/plane_small.png";

interface TicketProps {
    ticket: Ticket;
    setWordforStops: (value: number | null) => string;
    formateDate: (value: string) => string;
}

const TicketInfo = ({ ticket, setWordforStops, formateDate }: TicketProps) => {
    return (
        <div className="container_info">
            <div className="info_time">
                <div>
                    <p className="time_departure">{ticket.departure_time}</p>
                </div>
                <div className="container_transfers">
                    <div className="stops">
                        {ticket.stops} {setWordforStops(ticket.stops)}
                    </div>
                    <div className="container_line-plane">
                        <div className="line-plane"></div>
                        <img
                            src={plane_small}
                            alt="plane_small"
                            className="plane_small"
                        />
                    </div>
                </div>
                <div>
                    <p className="time_arrival">{ticket.arrival_time}</p>
                </div>
            </div>
            <div className="info_city_date">
                <div className="city_date_departure">
                    <p className="city">{`${ticket.origin}, ${ticket.origin_name}`}</p>
                    <p className="date">{formateDate(ticket.departure_date)}</p>
                </div>
                <div className="city_date_arrival">
                    <p className="city">{`${ticket.destination_name}, ${ticket.destination}`}</p>
                    <p className="date">{formateDate(ticket.arrival_date)}</p>
                </div>
            </div>
        </div>
    );
};

export default TicketInfo;

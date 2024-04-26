import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import plane_logo from "./images/plane_logo.png";
import Filters from "./components/filters/Filters";
import TicketsList from "./components/tickets/TicketsList";
import jsonTickets from "./store/tickets.json";
import { TicketsData, Tickets, CurrencyType } from "./types/types";

const ticketsData: TicketsData = jsonTickets;

function App() {
    const [filteredTickets, setFilteredTickets] = useState<Tickets>(ticketsData.tickets);
    const [filters, setFilters] = useState<number[] | null>(null);
    const [currency, setCurrency] = useState<CurrencyType>("RUB");

    const filterTickets = (filter: number[]) =>
        ticketsData.tickets.filter((ticket) =>
            filters?.some((filter) => filter === ticket.stops)
        );

    const onFilterChange = (value: number | null) => {
        if (value === null) {
            setFilters(null);
            return;
        }
        if (filters === null) {
            setFilters([value]);
            return;
        }
        const isFilterExistsInFilters = filters?.some((filter) => filter === value);
        if (!isFilterExistsInFilters) {
            setFilters([...filters, value]);
            return;
        }

        const newFilters = filters.filter((item) => item !== value);
        if (newFilters.length === 0) {
            setFilters(null);
            return;
        }
        setFilters(filters.filter((item) => item !== value));
    };

    useEffect(() => {
        if (filters === null) {
            setFilteredTickets(ticketsData.tickets);
            return;
        }
        setFilteredTickets(filterTickets(filters));
    }, [filters]);

    return (
        <div className="wrapper">
            <img src={plane_logo} alt="plane_logo" className="plane_logo" />
            <div className="container-fluid">
                <Filters
                    onFilterChange={onFilterChange}
                    filters={filters}
                    currency={currency}
                    setCurrency={setCurrency}
                />
                <TicketsList tickets={filteredTickets} currency={currency} />
            </div>
        </div>
    );
}

export default App;

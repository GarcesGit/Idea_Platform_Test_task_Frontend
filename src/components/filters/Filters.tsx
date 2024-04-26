import React from "react";
import "./FiltersStyles.css";
import { CurrencyType } from "../../types/types";
import CurrencyFilters from "./CurrencyFilters";
import StopsFilters from "./StopsFilters";

interface FiltersProps {
    onFilterChange: (value: number | null) => void;
    filters: number[] | null;
    currency: CurrencyType;
    setCurrency: (value: CurrencyType) => void;
}

const Filters = ({ onFilterChange, filters, currency, setCurrency }: FiltersProps) => {
    const handleCheckboxClick = (value: number | null) => {
        onFilterChange(value);
    };

    const setCheckedCheckbox = (value: number | null) => {
        if (filters === null && value === null) {
            return true;
        }
        if (filters === null && value !== null) {
            return false;
        }
        return filters ? filters.some((filter) => value === filter) : false;
    };

    const handleCurrencyClick = (value: CurrencyType) => {
        setCurrency(value);
    };

    return (
        <div className="container_filters">
            <CurrencyFilters
                currency={currency}
                handleCurrencyClick={handleCurrencyClick}
            />
            <StopsFilters
                handleCheckboxClick={handleCheckboxClick}
                setCheckedCheckbox={setCheckedCheckbox}
            />
        </div>
    );
};

export default Filters;

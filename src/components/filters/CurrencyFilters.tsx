import React from "react";
import { CurrencyType } from "../../types/types";

interface CurrencyFiltersProps {
    currency: CurrencyType;
    handleCurrencyClick: (value: CurrencyType) => void;
}

const CurrencyFilters = ({ currency, handleCurrencyClick }: CurrencyFiltersProps) => {
    return (
        <div className="container_currency_filters">
            <p className="title">ВАЛЮТА</p>
            <div
                className="btn-group"
                role="group"
                aria-label="Basic radio toggle button group"
            >
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="RUB"
                    onChange={() => handleCurrencyClick("RUB")}
                    checked={currency === "RUB"}
                />
                <label className="btn btn-outline-primary btn_currency" htmlFor="RUB">
                    RUB
                </label>
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="USD"
                    onChange={() => handleCurrencyClick("USD")}
                    checked={currency === "USD"}
                />
                <label className="btn btn-outline-primary btn_currency" htmlFor="USD">
                    USD
                </label>
                <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="EUR"
                    onChange={() => handleCurrencyClick("EUR")}
                    checked={currency === "EUR"}
                />
                <label className="btn btn-outline-primary btn_currency" htmlFor="EUR">
                    EUR
                </label>
            </div>
        </div>
    );
};

export default CurrencyFilters;

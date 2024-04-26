import React from "react";

interface CurrencyFiltersProps {
    handleCheckboxClick: (value: number | null) => void;
    setCheckedCheckbox: (value: number | null) => boolean;
}

const StopsFilters = ({
    handleCheckboxClick,
    setCheckedCheckbox,
}: CurrencyFiltersProps) => {
    return (
        <div className="container_stops_filters">
            <p className="title">КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <div className="checkbox_group">
                <div className="container_checkbox">
                    <input
                        className="custom_checkbox "
                        type="checkbox"
                        id="checkbox1"
                        onChange={() => handleCheckboxClick(null)}
                        checked={setCheckedCheckbox(null)}
                    />
                    <label className="label-check onHover" htmlFor="checkbox1">
                        Все
                    </label>
                </div>
                <div className="container_checkbox">
                    <input
                        className="custom_checkbox"
                        type="checkbox"
                        id="checkbox2"
                        onChange={() => handleCheckboxClick(0)}
                        checked={setCheckedCheckbox(0)}
                    />
                    <label className="label-check onHover" htmlFor="checkbox2">
                        Без пересадок
                    </label>
                </div>
                <div className="container_checkbox">
                    <input
                        className="custom_checkbox"
                        type="checkbox"
                        id="checkbox3"
                        onChange={() => handleCheckboxClick(1)}
                        checked={setCheckedCheckbox(1)}
                    />
                    <label className="label-check onHover" htmlFor="checkbox3">
                        1 пересадка
                    </label>
                </div>
                <div className="container_checkbox">
                    <input
                        className="custom_checkbox"
                        type="checkbox"
                        id="checkbox4"
                        onChange={() => handleCheckboxClick(2)}
                        checked={setCheckedCheckbox(2)}
                    />
                    <label className="label-check onHover" htmlFor="checkbox4">
                        2 пересадки
                    </label>
                </div>
                <div className="container_checkbox">
                    <input
                        className="custom_checkbox"
                        type="checkbox"
                        id="checkbox5"
                        onChange={() => handleCheckboxClick(3)}
                        checked={setCheckedCheckbox(3)}
                    />
                    <label className="label-check onHover" htmlFor="checkbox5">
                        3 пересадки
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StopsFilters;

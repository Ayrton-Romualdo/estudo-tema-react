import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp, faChartBar, faChartPie, faPercent, faUsers } from "@fortawesome/free-solid-svg-icons";

export default function CardStats({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {

  let iconSelecionado = null;
  switch(statIconName){
    case 'far fa-chart-bar':
      iconSelecionado = <FontAwesomeIcon icon={faChartBar} />;
      break;
    case 'fas fa-chart-pie':
      iconSelecionado = <FontAwesomeIcon icon={faChartPie} />;
      break;
    case 'fas fa-percent':
      iconSelecionado = <FontAwesomeIcon icon={faPercent} />;
      break;
    case 'fas fa-users':
      iconSelecionado = <FontAwesomeIcon icon={faUsers} />;
  }

  let arrowSelecionado = null;
  switch(statArrow){
    case 'up':
      arrowSelecionado = <FontAwesomeIcon icon={faArrowUp} />;
      break;
    case 'down':
      arrowSelecionado = <FontAwesomeIcon icon={faArrowDown} />;
      break;
    default:
      arrowSelecionado = '';
  }

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-slate-400 uppercase font-bold text-xs">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-xl text-slate-700">
                {statTitle}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {iconSelecionado}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            <span className={statPercentColor + " mr-2"}>
              {arrowSelecionado}{" "}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}

CardStats.defaultProps = {
  statSubtitle: "Traffic",
  statTitle: "350,897",
  statArrow: "up",
  statPercent: "3.48",
  statPercentColor: "text-emerald-500",
  statDescripiron: "Since last month",
  statIconName: "far fa-chart-bar",
  statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  statArrow: PropTypes.oneOf(["up", "down"]),
  statPercent: PropTypes.string,
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor: PropTypes.string,
  statDescripiron: PropTypes.string,
  statIconName: PropTypes.string,
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor: PropTypes.string,
};

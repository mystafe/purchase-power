import React, { useEffect, useState } from "react";
import Result from "./Result";
import data from "../data.json";

function Main() {
  const diffInMonths = function (dat1, dat2) {
    var date1 = new Date(dat1);
    var date2 = new Date(dat2);
    var year1 = date1.getFullYear();
    var year2 = date2.getFullYear();
    var month1 = date1.getMonth();
    var month2 = date2.getMonth();
    if (month1 === 0) {
      //Month of January
      month1++;
      month2++;
    }
    var diff = month1 - month2 + 12 * (year1 - year2);
    if (diff < 0) {
      diff = diff * -1;
    }
    if (diff === 0) {
      return "Same Month";
    }
    if (diff === 1) {
      return diff + " Month";
    }
    if (diff < 12) {
      return diff + " Months";
    }
    if (diff >= 12) {
      return Math.floor(diff / 12) + " Years";
    }

    return diff;
  };

  const [firstDate, setFirstDate] = useState("2023-05");
  const [lastDate, setLastDate] = useState("2022-03");
  const [minDate] = useState("2000-01");
  const [maxDate] = useState("2023-06");
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);
  const [firstAmount, setFirstAmount] = useState(1000);
  const [lastAmount, setLastAmount] = useState(null);
  const [firstTRY, setFirstTRY] = useState(firstAmount);
  const [lastTRY, setLastTRY] = useState(lastAmount);
  const [firstUSD, setFirstUSD] = useState(0);
  const [lastUSD, setLastUSD] = useState(0);
  const [firstUSDAmount, setFirstUSDAmount] = useState(0);
  const [lastUSDAmount, setLastUSDAmount] = useState(0);
  const [firstEUR, setFirstEUR] = useState(0);
  const [lastEUR, setLastEUR] = useState(0);
  const [firstEURAmount, setFirstEURAmount] = useState(0);
  const [lastEURAmount, setLastEURAmount] = useState(0);

  const [firstGold, setFirstGold] = useState(0);
  const [lastGold, setLastGold] = useState(0);
  const [firstGoldAmount, setFirstGoldAmount] = useState(0);
  const [lastGoldAmount, setLastGoldAmount] = useState(0);
  const [firstWage, setFirstWage] = useState(0);
  const [lastWage, setLastWage] = useState(0);
  const [firstWageAmount, setFirstWageAmount] = useState(0);
  const [lastWageAmount, setLastWageAmount] = useState(0);

  const [secondAmount, setSecondAmount] = useState(firstAmount);
  const [currency, setCurrency] = useState("TRY");
  const [timeDifference, setTimeDifference] = useState(
    diffInMonths(firstDate, lastDate)
  );
  const [difIndex, setDifIndex] = useState(0);
  const [triggeredByFirst, setTriggeredByFirst] = useState(true);
  const allValues = {
    firstAmount,
    lastAmount,
    firstTRY,
    lastTRY,
    firstUSD,
    lastUSD,
    firstEUR,
    lastEUR,
    firstGold,
    lastGold,
    firstWage,
    lastWage,
    firstDate,
    lastDate,
    difIndex,
    timeDifference,
    firstUSDAmount,
    lastUSDAmount,
    firstEURAmount,
    lastEURAmount,
    firstGoldAmount,
    lastGoldAmount,
    firstWageAmount,
    lastWageAmount,
  };

  const isValid = () => {
    if (firstAmount === 0) return false;
    if (lastAmount === 0) return false;
    if (firstDate === "") return false;
    if (lastDate === "") return false;

    if (new Date(firstDate) === new Date(lastDate)) return false;
    if (new Date(firstDate) < new Date(minDate)) return false;

    if (new Date(lastDate) < new Date(minDate)) return false;
    if (new Date(firstDate) > new Date(maxDate)) return false;
    if (new Date(lastDate) > new Date(maxDate)) return false;

    if (firstDate < minDate || firstDate > maxDate) return false;
    if (lastDate < minDate || lastDate > maxDate) return false;
    return true;
  };

  const calcSecondAmount = () => {
    if (!isValid()) {
      console.log("invalid", new Date(firstDate) > new Date(maxDate));
      return;
    }
    if (isValid()) {
      console.log("valid", new Date(firstDate) > new Date(maxDate));
    }
    setTimeDifference(diffInMonths(firstDate, lastDate));
    const firstDateIndex = data.findIndex((item) => item.Date === firstDate);
    const lastDateIndex = data.findIndex((item) => item.Date === lastDate);
    setFirstIndex(firstDateIndex);
    setLastIndex(lastDateIndex);
    const difTRY =
      data[lastDateIndex].InflationIndex / data[firstDateIndex].InflationIndex;
    setDifIndex(difTRY.toFixed(2));

    const firstUSD = data[firstDateIndex].USDTRY;
    const firstEUR = data[firstDateIndex].EURTRY;
    let isEuroValid = true;
    if (firstEUR == null) isEuroValid = false;

    const firstGold = data[firstDateIndex].GoldPerGramTRY;
    const firstWage = data[firstDateIndex].minWageNetTRY;

    const lastUSD = data[lastDateIndex].USDTRY;
    const lastEUR = data[lastDateIndex].EURTRY;
    if (firstEUR == null) isEuroValid = false;

    const lastGold = data[lastDateIndex].GoldPerGramTRY;
    const lastWage = data[lastDateIndex].minWageNetTRY;

    const difUSD = data[lastDateIndex].USDTRY / data[firstDateIndex].USDTRY;
    const difEUR = data[lastDateIndex].EURTRY / data[firstDateIndex].EURTRY;
    const difGold =
      data[lastDateIndex].GoldPerGramTRY / data[firstDateIndex].GoldPerGramTRY;
    const difWage =
      data[lastDateIndex].minWageNetTRY / data[firstDateIndex].minWageNetTRY;

    const firstUSDAmount = parseFloat(firstAmount / firstUSD).toFixed(2);

    const firstEURAmount = firstAmount / firstEUR;
    const firstGoldAmount = parseFloat(firstAmount / firstGold).toFixed(2);
    const firstWageAmount = parseFloat(firstAmount / firstWage).toFixed(2);

    setFirstUSD(firstUSD.toFixed(2));
    setFirstEUR(firstEUR == null ? 0 : firstEUR.toFixed(2));
    setFirstGold(firstGold.toFixed(2));
    setFirstWage(firstWage.toFixed(2));
    setLastUSD(lastUSD.toFixed(2));
    setLastEUR(lastEUR == null ? 0 : lastEUR.toFixed(2));
    setLastGold(lastGold.toFixed(2));
    setLastWage(lastWage.toFixed(0));

    setFirstUSDAmount(parseFloat(firstUSDAmount).toFixed(2));

    setFirstEURAmount(firstEURAmount == null ? 0 : firstEURAmount.toFixed(2));
    setFirstGoldAmount(parseFloat(firstGoldAmount).toFixed(2));
    setFirstWageAmount(parseFloat(firstWageAmount).toFixed(2));

    if (triggeredByFirst) {
      setLastAmount((parseFloat(firstAmount) * difTRY).toFixed(2));
      setSecondAmount((parseFloat(firstAmount) * difTRY).toFixed(2));
      setLastTRY((parseFloat(firstAmount) * difTRY).toFixed(2));
      setLastUSD((parseFloat(firstUSD) * difUSD).toFixed(2));
      if (isEuroValid) {
        setLastEUR(
          firstEUR == null ? 0 : parseFloat(firstEUR * difEUR).toFixed(2)
        );
        setLastEURAmount(
          lastEUR == null ? 0 : parseFloat(lastAmount / lastEUR).toFixed(2)
        );
      }
      setLastGold((parseFloat(firstGold) * difGold).toFixed(2));
      setLastWage((parseFloat(firstWage) * difWage).toFixed(0));
      setLastUSDAmount(parseFloat(lastAmount / lastUSD).toFixed(2));
      setLastGoldAmount(parseFloat(lastAmount / lastGold).toFixed(2));
      setLastWageAmount(parseFloat(lastAmount / lastWage).toFixed(2));
    } else {
      setFirstAmount((parseFloat(lastAmount) / difTRY).toFixed(0));
      setFirstTRY((parseFloat(lastAmount) / difTRY).toFixed(0));
      setFirstUSD(parseFloat(firstUSD).toFixed(2));
      setFirstEUR(parseFloat(firstEUR).toFixed(2));
      setFirstGold(parseFloat(firstGold).toFixed(2));
      setFirstWage(parseFloat(firstWage).toFixed(0));
      setFirstUSDAmount(parseFloat(lastAmount / firstUSD / difTRY).toFixed(2));
      setFirstEURAmount(parseFloat(lastAmount / firstEUR / difTRY).toFixed(2));
      setFirstGoldAmount(
        (parseFloat(lastAmount) / firstGold / difTRY).toFixed(2)
      );
      setFirstWageAmount(
        (parseFloat(lastAmount) / difWage / firstWage).toFixed(2)
      );

      setLastUSDAmount(parseFloat(lastAmount / lastUSD).toFixed(2));
      setLastEURAmount(parseFloat(lastAmount / lastEUR).toFixed(2));
      setLastGoldAmount(parseFloat(lastAmount / lastGold).toFixed(2));
      setLastWageAmount(parseFloat(lastAmount / lastWage).toFixed(2));
    }
  };

  useEffect(() => {
    setTriggeredByFirst(true);
    calcSecondAmount();
  }, [firstDate, lastDate, firstAmount]);

  useEffect(() => {
    setTriggeredByFirst(false);
    calcSecondAmount();
  }, [lastAmount]);

  return (
    <div className="main">
      <div className="main_firstselection">
        <input
          className="main_firstdate"
          type="month"
          value={firstDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => {
            setFirstDate(e.target.value);
            diffInMonths(firstDate, lastDate);
          }}
        />
        <input
          className="main-firstamount"
          value={firstAmount}
          onChange={(e) => {
            setTriggeredByFirst(true);
            setFirstAmount(parseFloat(e.target.value));
          }}
          type="number"
          step={10}
        />
      </div>
      <div className="main-middle">
        <div className="main_currency">
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="main_button">
          <button onClick={() => window.location.reload()}>Reset</button>
        </div>
      </div>
      <div className="main_lastselection">
        <input
          className="main_lastdate"
          type="month"
          value={lastDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => setLastDate(e.target.value)}
        />
        <input
          className="main_lastamount"
          type="number"
          step={10}
          value={secondAmount || ""}
          onChange={(e) => {
            const value = e.target.value;
            setTriggeredByFirst(false);
            setLastAmount(value);
            setSecondAmount(value);
          }}
        />
      </div>

      <div className="main_result">
        <Result allValues={allValues} />
      </div>
    </div>
  );
}

export default Main;

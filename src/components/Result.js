import React from "react";

function Result({ allValues }) {
  return (
    <div>
      <table className="result-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Time</th>
            <th>Last Time</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Time</td>
            <td>{allValues.firstDate}</td>
            <td>{allValues.lastDate}</td>
            <td>{allValues.timeDifference}</td>
          </tr>
          <tr>
            <td>TRY</td>
            <td>{allValues.firstAmount}</td>
            <td>{allValues.lastAmount}</td>
            <td>{(100 - allValues.difIndex * 100).toFixed(2)}</td>
          </tr>
          <tr>
            <td>USD</td>
            <td>
              {
                <>
                  {allValues.firstUSDAmount}${" "}
                  <span>({allValues.firstUSD})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {allValues.lastUSDAmount}$ <span>({allValues.lastUSD})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {(allValues.lastUSDAmount - allValues.firstUSDAmount).toFixed(
                    2
                  )}
                  {"$ "}
                  <span>
                    {" "}
                    {(
                      ((allValues.firstUSD - allValues.lastUSD) /
                        allValues.lastUSD) *
                      100
                    ).toFixed(2)}
                    {" %"}
                  </span>
                </>
              }
            </td>
          </tr>
          <tr>
            <td>EUR</td>
            <td>
              {
                <>
                  {allValues.firstEURAmount}€{" "}
                  <span>({allValues.firstEUR})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {allValues.lastEURAmount}€ <span>({allValues.lastEUR})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {(allValues.lastEURAmount - allValues.firstEURAmount).toFixed(
                    2
                  )}
                  {"€ "}
                  <span>
                    {" "}
                    {(
                      ((allValues.firstEUR - allValues.lastEUR) /
                        allValues.lastEUR) *
                      100
                    ).toFixed(2)}
                    {" %"}
                  </span>
                </>
              }
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>
              {
                <>
                  {allValues.firstGoldAmount} gr{" "}
                  <span>({allValues.firstGold})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {allValues.lastGoldAmount} gr{" "}
                  <span>({allValues.lastGold})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {(
                    allValues.lastGoldAmount - allValues.firstGoldAmount
                  ).toFixed(2)}
                  {"gr "}
                  <span>
                    {" "}
                    {(
                      ((allValues.firstGold - allValues.lastGold) /
                        allValues.lastGold) *
                      100
                    ).toFixed(2)}
                    {" %"}
                  </span>
                </>
              }
            </td>
          </tr>
          <tr>
            <td>Wage</td>
            <td>
              {
                <>
                  {allValues.firstWageAmount} 👷‍♂️{" "}
                  <span>({parseFloat(allValues.firstWage).toFixed(0)})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {allValues.lastWageAmount}👷‍♂️{" "}
                  <span>({allValues.lastWage})</span>
                </>
              }
            </td>
            <td>
              {
                <>
                  {(
                    allValues.lastWageAmount - allValues.firstWageAmount
                  ).toFixed(2)}
                  {"👷‍♂️ "}
                  <span>
                    {" "}
                    {(
                      ((allValues.firstWage - allValues.lastWage) /
                        allValues.lastWage) *
                      100
                    ).toFixed(2)}
                    {" %"}
                  </span>
                </>
              }
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Result;

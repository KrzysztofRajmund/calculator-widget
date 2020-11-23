import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

const CalculatorComponent = () => {
  //hooks
  const [concat, setConcat] = useState("0");
  const [result, setResult] = useState(0);

  //button -/+ 
  const toggleNumber = (e) => {
    let minus = "-";
    let newConcat = concat.concat(minus);
    setConcat(newConcat);

    if (newConcat.includes("--")) {
      setConcat(newConcat.replace("--", "+"));
    }
  };

  //FUNCTIONAL BUTTON
  const pressedFunctionalBtn = (e) => {
    let btnValue = e.target.value;

    // x = *
    if (btnValue === "x") {
      btnValue = "*";
    }

    // filter inputs value for specific behavior
    let array = ["/", "+", "-", "%", "*"];
    let lastFunc = concat.charAt(concat.length - 1);
    let filter = array.filter((x) => x === lastFunc);

    if (filter.toString() === lastFunc && btnValue !== "C") {
      return;
    } else {
      switch (btnValue) {
        case "=":
          setResult(eval(concat));
          setConcat("0");
          break;

        case "C":
          setResult(0);
          setConcat("0");
          break;

        default:
          setConcat(concat + btnValue);
          setResult(eval(concat));
      }
    }
  };

  //NUMBER BUTTON
  const pressedNumberBtn = (e) => {
    let nr = e.target.value;

    if (concat == "0") {
      setConcat(nr);
    } else {
      setConcat(concat + nr);
    }
  };

  return (
    <Container className="calculator">
      <Table borderless className="table">
        <tbody>
          <tr className="table__row">
            <td colSpan="4" className="table__col">
              <input
                className="table__concat"
                type="text"
                value={concat}
                id="concat"
              />
              <br />
              <input
                className="table__result"
                type="text"
                value={result}
                id="result"
              />
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__col">
              <input
                type="button"
                value="%"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="+/-"
                onClick={toggleNumber}
                className="table__funcional-button"
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="C"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="/"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__col">
              <input
                type="button"
                value="7"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="8"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="9"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="x"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__col">
              <input
                type="button"
                value="4"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="5"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="6"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="-"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__col">
              <input
                type="button"
                value="1"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="2"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="3"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="+"
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
          </tr>
          <tr className="table__row">
            <td className="table__col">
              <input
                type="button"
                value="0"
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td className="table__col">
              <input
                type="button"
                value="."
                className="table__numeric-button"
                onClick={pressedNumberBtn}
              />
            </td>
            <td colSpan="2" className="table__col">
              <input
                type="button"
                value="="
                className="table__funcional-button"
                onClick={pressedFunctionalBtn}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default CalculatorComponent;

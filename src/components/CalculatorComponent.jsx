import React, { useState, useEffect } from "react";
import { Container, Table } from "react-bootstrap";

const CalculatorComponent = () => {
  //global variables
  const resultInput = document.getElementById("result");
  const toggleButton = document.getElementById("toggle-button");
  //hooks
  const [concat, setConcat] = useState("0");
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [buttonLoaded, setButtonLoaded] = useState(true)

  useEffect(()=>{
    setLoading(true)
  },[result])

  //button -/+
  const toggleNumber = (e) => {
    let minus="-";
    let newConcat = concat.concat(minus);
    setButtonLoaded(false);

    if (buttonLoaded === true){
      setConcat(newConcat);
      toggleButton.disabled = true;

    }
    if (newConcat.includes("--") && buttonLoaded === true) {
      setConcat(newConcat.replace("--", "+"));
      toggleButton.disabled = true;
    }
  };

  //FUNCTIONAL BUTTON
  const pressedFunctionalBtn = (e) => {
    let btnValue = e.target.value;
    // x = *
    if (btnValue === "x") {
      btnValue = "*";
    }

    if (btnValue === "%") {
      btnValue = "/100";
    }

    // filter inputs value for specific behavior
    let array = ["/", "+", "-", "*"];
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

        case "%":
          setConcat(concat + btnValue);
          setResult(eval(concat));
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
      setButtonLoaded(true);
      toggleButton.disabled = false;
    }
  };

  //result length
  if (result.toString().length > 10 && loading === true) {
    resultInput.classList.add("table__result_size");
  } if (loading === true && result.toString().length < 10){
    resultInput.classList.remove("table__result_size");
  }

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
                id="result"
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
                id="toggle-button"
                type="button"
                value="-/+"
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

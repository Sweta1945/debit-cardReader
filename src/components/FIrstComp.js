import card from "./cardimage.png";
import "./FirstComp.css";
import card2 from "./card2.png";
import backCard from "./cardBack.png";

function FirstComp() {
  return (
    <div>
      <img src={card} alt="card" className="cardImg" />

      <img src={card2} alt="card2" className="card2Img" />
      <img src={backCard} alt="backCard" className="backCard" />

      <div className="formContainer">
        <form>
          <div className="nameInput">
            <label className="cardholderName-label">CARDHOLDER NAME:</label>
            <br />
            <input type="text" className="cardholderName-input" />
          </div>
          <br />
          <div className="numberInput">
            <label className="cardholderNumber-label">CARD NUMBER:</label>
            <br />
            <input type="number" className="cardholderNumber-input" />
          </div>
          <br />

          <div className="lastLine">
            <div className="expDate">
              <label className="date-label">EXP DATE:</label>
              <br />
              <input type="number" className="month-input" />
              <input type="number" className="year-input" />
            </div>
            <div className="cvc">
              <label className="cvc-label">CVC:</label>
              <br />
              <input type="number" className="cvc-input" />
            </div>
          </div>
        </form>
        <button className="CONFIRM"> SUBMIT </button>
      </div>
    </div>
  );
}

export default FirstComp;

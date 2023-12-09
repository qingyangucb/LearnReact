import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header" alt="logo showing a money bag">
      <img src={logo} />
      <h1>Investment Calculator</h1>
    </div>
  );
}

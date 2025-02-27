import { NavLink } from "react-router";

export default function StockAsset() {
  return (
    <>
      <h2>Stock Asset</h2>
      <NavLink
        className="inline-block px-4 py-1 bg-teal-700 text-white text-center text-base font-semibold rounded hover:bg-teal-800"
        to="trade"
      >
        Trade Stock
      </NavLink>
    </>
  );
}

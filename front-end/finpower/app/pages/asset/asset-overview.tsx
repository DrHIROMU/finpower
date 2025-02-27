import { NavLink } from "react-router";

export default function AssetOverview() {
  return (
    <>
      <h2>Asset Overview</h2>
      <NavLink
        className="inline-block px-4 py-1 bg-teal-700 text-white text-center text-base font-semibold rounded hover:bg-teal-800"
        to="stock"
      >
        Stock Assets
      </NavLink>
    </>
  );
}

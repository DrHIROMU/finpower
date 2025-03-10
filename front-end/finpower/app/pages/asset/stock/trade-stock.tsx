import { Form } from "react-router";
import type { Route } from "./+types/trade-stock";
import type { TradeStockRequest } from "~/types/asset/stock/trade-stock-request";
import { getFormStringValue, getFormNumberValue } from "~/utils/form-utils";
import { convertDateToUTC } from "~/utils/date-utils";
import { tradeStock } from "~/api/asset/stock/stock-trade-api";

export async function clientAction({ request }: Route.ClientActionArgs) {
  let formData = await request.formData();
  
  const tradeStockRequest: TradeStockRequest = {
    market: getFormStringValue(formData, "market"),
    tradeType: getFormStringValue(formData, "type"),
    stockSymbol: getFormStringValue(formData, "stockCode"),
    currency: getFormStringValue(formData, "currency"),
    price: getFormNumberValue(formData, "price"),
    quantity: getFormNumberValue(formData, "quantity"),
    tradeDate: convertDateToUTC(getFormStringValue(formData, "date")),
    note: getFormStringValue(formData, "note"),
  };
  
  console.log(tradeStockRequest);
  const stockTrade = await tradeStock(tradeStockRequest);
}

export default function TradeStock() {
  return (
    <>
      <h2>Trade Stock</h2>
      <Form
        method="post"
        className="bg-gray-100 max-w-6xl mx-auto p-6 shadow-md rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4">
          <div>
            <span className="block text-sm font-medium text-gray-700">Type</span>
            <div className="mt-2 flex gap-4">
              <label className="cursor-pointer flex items-center">
                <input type="radio" name="type" value="BUY" className="peer hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-cyan-600">
                  <div className="w-2 h-2 rounded-full bg-white hidden peer-checked:block"></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Buy</span>
              </label>
              <label className="cursor-pointer flex items-center">
                <input type="radio" name="type" value="SELL" className="peer hidden" />
                <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-red-600">
                  <div className="w-2 h-2 rounded-full bg-white hidden peer-checked:block"></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">Sell</span>
              </label>
            </div>
          </div>
          
          <div>
            <label
              htmlFor="market"
              className="block text-sm font-medium text-gray-700"
            >
              Market
            </label>
            <select
              id="market"
              name="market"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="TW">Taiwan</option>
              <option value="US">USA</option>
            </select>
          </div>

          <div>
          <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <select
              id="currency"
              name="currency"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            >
              <option value="USD">USD</option>
              <option value="TWD">TWD</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="stock-code"
              className="block text-sm font-medium text-gray-700"
            >
              Stock Code
            </label>
            <input
              type="text"
              id="stock-code"
              name="stockCode"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 
"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
            />
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
            />
          </div>

          <div>
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Note
            </label>
            <textarea
              id="note"
              name="note"
              className="w-full p-2 border bg-white hover:bg-gray-50 border-gray-300 rounded-md focus:outline-none focus:border-gray-400 focus:ring focus:ring-gray-300 "
            />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <button
            type="submit"
            className="px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

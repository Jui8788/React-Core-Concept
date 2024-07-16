import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import "./grandPa.css";

export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1000);

const GrandPa = () => {
  const [money, setMoney] = useState(1000);
  const asset = "diamond";

  return (
    <div className="grandpa">
      <h2>GrandPa</h2>
      <p>Net Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset} />
            <Uncle asset={asset} />
            <Aunty />
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;

/**
 * Create a context & export it
 * Add provider for the context with a value. value could be anything
 * useContext to access value in the context API
 */

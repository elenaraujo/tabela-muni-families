import React, { useState } from "react"
import "./AmmunitionCalculator.css"

const AmmunitionCalculator = () => {
  const [profile, setProfile] = useState("CPF");
  const [ptQuantity, setPtQuantity] = useState("");
  const [subQuantity, setSubQuantity] = useState("");
  const [rifleQuantity, setRifleQuantity] = useState("");
  const [metaQuantity, setMetaQuantity] = useState("");

  const prices = {
    CPF: { pt: 45, sub: 60, rifle: 75, meta: 75 },
    "CNPJ Esporádico": { pt: 35, sub: 50, rifle: 75, meta: 75 },
    "CNPJ Regular": { pt: 30, sub: 45, rifle: 70, meta: 75 },
    "Hells (Garagem)": { pt: 35, sub: 50, rifle: 70, meta: 75 },
    "Oitavo Anjo": { pt: 30, sub: 50, rifle: 70, meta: 75 },
    Hydra: { pt: 35, sub: 50, rifle: 75, meta: 75 },
    Cartel: { pt: 30, sub: 40, rifle: 75, meta: 75 },
    Meraki: { pt: 30, sub: 50, rifle: 70, meta: 75 },
    Yankiis: { pt: 35, sub: 50, rifle: 75, meta: 75 },
    Royal: { pt: 33, sub: 47, rifle: 67, meta: 75 },
  };

  // Função para calcular o preço da munição de rifle com base na quantidade de rifle
  const getRiflePrice = () => {
    const rifleCount = parseInt(rifleQuantity) || 0;
    if (
      profile === "Meraki" ||
      profile === "Hells (Garagem)" ||
      profile === "Oitavo Anjo"
    ) {
      return rifleCount >= 1000 ? 65 : 70;
    }
    return prices[profile].rifle;
  };

  // Função para calcular o preço da munição de sub com base na quantidade de sub
  const getSubPrice = () => {
    const subCount = parseInt(subQuantity) || 0;
    if (
      profile === "Meraki" ||
      profile === "Hells (Garagem)" ||
      profile === "Oitavo Anjo"
    ) {
      return subCount >= 1000 ? 45 : 50;
    }
    return prices[profile].sub;
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handlePtChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setPtQuantity(value);
    }
  };

  const handleSubChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setSubQuantity(value);
    }
  };

  const handleRifleChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setRifleQuantity(value);
    }
  };

  const handleMetaChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      setMetaQuantity(value);
    }
  };

  const calculateTotal = () => {
    const ptClean = (ptQuantity ? parseInt(ptQuantity) : 0) * prices[profile].pt;
    const ptDirty = Math.ceil(ptClean * 1.3);
    const subPrice = getSubPrice();
    const subClean = (subQuantity ? parseInt(subQuantity) : 0) * subPrice;
    const subDirty = Math.ceil(subClean * 1.3);
    const riflePrice = getRiflePrice();
    const rifleClean = (rifleQuantity ? parseInt(rifleQuantity) : 0) * riflePrice;
    const rifleDirty = Math.ceil(rifleClean * 1.3);
    const metaClean = (metaQuantity ? parseInt(metaQuantity) : 0) * prices[profile].meta;
    const metaDirty = Math.ceil(metaClean * 1.3);

    return {
      ptClean,
      ptDirty,
      subClean,
      subDirty,
      rifleClean,
      rifleDirty,
      metaClean,
      metaDirty,
      totalClean: ptClean + subClean + rifleClean + metaClean,
      totalDirty: ptDirty + subDirty + rifleDirty + metaDirty,
    };
  };

  const totals = calculateTotal();

  return (
    <div className="container">
      <h1 className="title">💸 CALCULADORA DE MUNIÇÃO 💸</h1>

      <div className="input-wrapper">
        <div className="inputs">
          <label>
            Comprador:
            <select className="input1" value={profile} onChange={handleProfileChange}>
              <option value="CPF">🙋🏻 CPF</option>
              <option value="CNPJ Esporádico">👩🏻‍💼 CNPJ Esporádico</option>
              <option value="CNPJ Regular">🫱🏽‍🫲🏽 CNPJ Regular</option>
              <option value="Meraki">🛡️ Meraki</option>
              <option value="Hells (Garagem)">🚗 Hells (Garagem)</option>
              <option value="Oitavo Anjo">👼🏻 Oitavo Anjo</option>
              <option value="Hydra">🐍 Hydra</option>
              <option value="Cartel">🚬 Cartel</option>
              <option value="Yankiis">🪖 Yankiis</option>
              <option value="Royal">👑 Royal</option>
            </select>
          </label>

          <div className="valueDescription simpleBold">
            <span>
              PT<span style={{ color: "white" }}>.....</span>
              <span className="clean">
                R${prices[profile].pt} (Limpo)
              </span> |{" "}
              <span className="dirty">
                R${Math.ceil(prices[profile].pt * 1.3)} (Sujo)
              </span>
            </span>
            <span>
              SUB<span style={{ color: "white" }}>...</span>
              <span className="clean">R${getSubPrice()} (Limpo)</span> |{" "}
              <span className="dirty">
                R${Math.ceil(getSubPrice() * 1.3)} (Sujo)
              </span>
            </span>
            <span>
              RIFLE<span style={{ color: "white" }}>...</span>
              <span className="clean">R${getRiflePrice()} (Limpo)</span> |{" "}
              <span className="dirty">
                R${Math.ceil(getRiflePrice() * 1.3)} (Sujo)
              </span>
            </span>
            <span>
              META<span style={{ color: "white" }}>...</span>
              <span className="clean">
                R${prices[profile].meta} (Limpo)
              </span> |{" "}
              <span className="dirty">
                R${Math.ceil(prices[profile].meta * 1.3)} (Sujo)
              </span>
            </span>
          </div>

          <label>
            🍬 Quantidade PT:
            <input
              className="input2"
              type="number"
              value={ptQuantity}
              onChange={handlePtChange}
              placeholder="Digite a quantidade"
            />
          </label>

          <label>
            🍬 Quantidade SUB:
            <input
              className="input3"
              type="number"
              value={subQuantity}
              onChange={handleSubChange}
              placeholder="Digite a quantidade"
            />
          </label>

          <label>
            🍬 Quantidade RIFLE:
            <input
              className="input4"
              type="number"
              value={rifleQuantity}
              onChange={handleRifleChange}
              placeholder="Digite a quantidade"
            />
          </label>

          <label>
            🪨 Quantidade META:
            <input
              className="input5"
              type="number"
              value={metaQuantity}
              onChange={handleMetaChange}
              placeholder="Digite a quantidade"
            />
          </label>
        </div>
      </div>

      <div className="info-container">
        <div className="info">
          <span><b>INFO:</b> Somente <b>Meraki</b>, <b>Hells</b> e <b>8 Anjo</b> tem preço reduzido comprando acima de mil.</span>
          <br/>
          <span>O cálculo é feito automaticamente ao inserir os valores.</span>
        </div>
      </div>

      <div className="result">
        <h2>📃 RESULTADO 📃</h2>
        <p className="simpleBold">
          🍬 PT:{" "}
          <span className="clean">
            Limpo: R${totals.ptClean.toLocaleString()}
          </span>{" "}
          |{" "}
          <span className="dirty">
            Sujo: R${totals.ptDirty.toLocaleString()}
          </span>
        </p>
        <p className="simpleBold">
          🍬 SUB:{" "}
          <span className="clean">
            Limpo: R${totals.subClean.toLocaleString()}
          </span>{" "}
          |{" "}
          <span className="dirty">
            Sujo: R${totals.subDirty.toLocaleString()}
          </span>
        </p>
        <p className="simpleBold">
          🍬 RIFLE:{" "}
          <span className="clean">
            Limpo: R${totals.rifleClean.toLocaleString()}
          </span>{" "}
          |{" "}
          <span className="dirty">
            Sujo: R${totals.rifleDirty.toLocaleString()}
          </span>
        </p>
        <p className="simpleBold">
          🪨 META:{" "}
          <span className="clean">
            Limpo: R${totals.metaClean.toLocaleString()}
          </span>{" "}
          |{" "}
          <span className="dirty">
            Sujo: R${totals.metaDirty.toLocaleString()}
          </span>
        </p>
        <p className="simpleBold" style={{ marginTop: "2rem" }}>
          TOTAL A PAGAR:{" "}
          <span className="clean">
            Limpo: R${totals.totalClean.toLocaleString()}
          </span>{" "}
          |{" "}
          <span className="dirty">
            Sujo: R${totals.totalDirty.toLocaleString()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AmmunitionCalculator;

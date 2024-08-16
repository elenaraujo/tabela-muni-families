import React, { useState } from 'react'
import './AmmunitionCalculator.css'

const AmmunitionCalculator = () => {
  const [profile, setProfile] = useState('CPF')
  const [ptQuantity, setPtQuantity] = useState(0)
  const [subQuantity, setSubQuantity] = useState(0)

  const prices = {
    'CPF': { pt: { clean: 45, dirty: 63 }, sub: { clean: 60, dirty: 84 } },
    'CNPJ Esporádico': { pt: { clean: 35, dirty: 49 }, sub: { clean: 50, dirty: 70 } },
    'CNPJ Regular': { pt: { clean: 30, dirty: 42 }, sub: { clean: 45, dirty: 63 } },
    'Hells (Garagem)': { pt: { clean: 35, dirty: 49 }, sub: { clean: 50, dirty: 70 } },
    'Oitavo Anjo': { pt: { clean: 30, dirty: 42 }, sub: { clean: 45, dirty: 63 } },
    'Hydra': { pt: { clean: 30, dirty: 42 }, sub: { clean: 45, dirty: 63 } },
  }

  const handleProfileChange = (e) => {
    setProfile(e.target.value)
  }

  const handlePtChange = (e) => {
    setPtQuantity(Number(e.target.value))
  }

  const handleSubChange = (e) => {
    setSubQuantity(Number(e.target.value))
  }

  const calculateTotal = () => {
    const ptClean = ptQuantity * prices[profile].pt.clean
    const ptDirty = ptQuantity * prices[profile].pt.dirty
    const subClean = subQuantity * prices[profile].sub.clean
    const subDirty = subQuantity * prices[profile].sub.dirty

    return {
      ptClean,
      ptDirty,
      subClean,
      subDirty,
      totalClean: ptClean + subClean,
      totalDirty: ptDirty + subDirty,
    }
  }

  const totals = calculateTotal()

  return (
    <div class='container'>
      <h1>Calculadora de Munição</h1>

      <div class='inputs'>
        <label>
          Comprador:
          <select class='input1' value={profile} onChange={handleProfileChange}>
            <option value="CPF">🙋🏻 CPF</option>
            <option value="CNPJ Esporádico">👩🏻‍💼 CNPJ Esporádico</option>
            <option value="CNPJ Regular">🫱🏽‍🫲🏽 CNPJ Regular</option>
            <option value="Hells (Garagem)">🚗 Hells (Garagem)</option>
            <option value="Oitavo Anjo">👼🏻 Oitavo Anjo</option>
            <option value="Hydra">🐍 Hydra</option>
          </select>
        </label>

        <div>
          <label>
            Quantidade PT:
            <input class='input2' type="number" value={ptQuantity} onChange={handlePtChange} />
          </label>
        </div>

        <div>
          <label>
            Quantidade SUB:
            <input class='input3' type="number" value={subQuantity} onChange={handleSubChange} />
          </label>
        </div>
      </div>

      <div class='result'>
        <h2>Resultado</h2>
        <p style={{ fontWeight: 800 }}>PT - <span class='clean'>Limpo: R${totals.ptClean.toLocaleString()}</span> | <span class='dirty'>Sujo: R${totals.ptDirty.toLocaleString()}</span></p>
        <p style={{ fontWeight: 800 }}> SUB - <span class='clean'>Limpo: R${totals.subClean.toLocaleString()}</span> | <span class='dirty'>Sujo: R${totals.subDirty.toLocaleString()}</span></p>
        <p style={{ fontWeight: 800 }}>
          Total - <span class='clean'>Limpo: R${totals.totalClean.toLocaleString()}</span> | <span class='dirty'>Sujo: R${totals.totalDirty.toLocaleString()}</span>
        </p>
      </div>
    </div>
  )
}

export default AmmunitionCalculator

import React, { useState } from 'react'
import './AmmunitionCalculator.css'

const AmmunitionCalculator = () => {
  const [profile, setProfile] = useState('CPF')
  const [ptQuantity, setPtQuantity] = useState('') // Inicializando como string vazia
  const [subQuantity, setSubQuantity] = useState('') // Inicializando como string vazia

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
    const value = e.target.value;
    // Permitir apenas números ou uma string vazia
    if (!isNaN(value)) {
      setPtQuantity(value)
    }
  }

  const handleSubChange = (e) => {
    const value = e.target.value;
    // Permitir apenas números ou uma string vazia
    if (!isNaN(value)) {
      setSubQuantity(value)
    }
  }

  const calculateTotal = () => {
    // Convertendo os valores para número antes de calcular
    const ptClean = (ptQuantity ? parseInt(ptQuantity) : 0) * prices[profile].pt.clean
    const ptDirty = (ptQuantity ? parseInt(ptQuantity) : 0) * prices[profile].pt.dirty
    const subClean = (subQuantity ? parseInt(subQuantity) : 0) * prices[profile].sub.clean
    const subDirty = (subQuantity ? parseInt(subQuantity) : 0) * prices[profile].sub.dirty

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
    <div className='container'>
      <h1>💸 CALCULADORA DE MUNIÇÃO 💸</h1>

      <div className='input-wrapper'>
        <div className='inputs'>
          <label>
            Comprador:
            <select className='input1' value={profile} onChange={handleProfileChange}>
              <option value="CPF">🙋🏻 CPF</option>
              <option value="CNPJ Esporádico">👩🏻‍💼 CNPJ Esporádico</option>
              <option value="CNPJ Regular">🫱🏽‍🫲🏽 CNPJ Regular</option>
              <option value="Hells (Garagem)">🚗 Hells (Garagem)</option>
              <option value="Oitavo Anjo">👼🏻 Oitavo Anjo</option>
              <option value="Hydra">🐍 Hydra</option>
            </select>
          </label>

          <div className='valueDescription simpleBold'>
            <span>PT<span style={{ color: 'white' }}>.....</span><span className='clean'>R${prices[profile].pt.clean} (Limpo)</span> | <span className='dirty'>R${prices[profile].pt.dirty} (Sujo)</span></span>
            <span>SUB<span style={{ color: 'white' }}>...</span><span className='clean'>R${prices[profile].sub.clean} (Limpo)</span> | <span className='dirty'>R${prices[profile].sub.dirty} (Sujo)</span></span>
          </div>

          <label>
            Quantidade PT:
            <input
              className='input2'
              type="number"
              value={ptQuantity}
              onChange={handlePtChange}
              placeholder="Digite a quantidade"
            />
          </label>

          <label>
            Quantidade SUB:
            <input
              className='input3'
              type="number"
              value={subQuantity}
              onChange={handleSubChange}
              placeholder="Digite a quantidade"
            />
          </label>
        </div>
      </div>

      <div className='result'>
        <h2>📃 RESULTADO 📃</h2>
        <p className='simpleBold'>PT: <span className='clean'>Limpo: R${totals.ptClean.toLocaleString()}</span> | <span className='dirty'>Sujo: R${totals.ptDirty.toLocaleString()}</span></p>
        <p className='simpleBold'> SUB: <span className='clean'>Limpo: R${totals.subClean.toLocaleString()}</span> | <span className='dirty'>Sujo: R${totals.subDirty.toLocaleString()}</span></p>
        <p className='simpleBold' style={{ marginTop: '2rem' }}>
          TOTAL A PAGAR: <span className='clean'>Limpo: R${totals.totalClean.toLocaleString()}</span> | <span className='dirty'>Sujo: R${totals.totalDirty.toLocaleString()}</span>
        </p>
      </div>
    </div>
  )
}

export default AmmunitionCalculator

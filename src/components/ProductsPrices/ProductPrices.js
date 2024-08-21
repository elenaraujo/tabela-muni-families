import React from 'react'
import './ProductPrices.css'

const ProductPrices = () => {
  const products = [
    {
      name: 'Colete',
      supplier: '🐍 Hydra',
      cleanPrice: '6,000',
      dirtyPrice: '-'
    },
    {
      name: 'KochVP',
      supplier: '👼🏻 8º Anjo',
      cleanPrice: '30,000',
      dirtyPrice: '45,000'
    },
    {
      name: 'Maconha',
      supplier: '👼🏻 8º Anjo',
      cleanPrice: '375',
      dirtyPrice: '420'
    },
    {
      name: 'Five',
      supplier: '🐝 Meraki',
      cleanPrice: '-',
      dirtyPrice: '-'
    }
  ];

  return (
    <div className='container-product'>
      <h1 className='title'>🔫 PRODUTOS E FORNECEDORES 🔫</h1>
      <table className='product-table'>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Fornecedor</th>
            <th>Preço (Limpo)</th>
            <th>Preço (Sujo)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><b>{product.name}</b></td>
              <td>{product.supplier}</td>
              <td><b>{product.cleanPrice !== '-' ? `R$${product.cleanPrice}` : product.cleanPrice}</b></td>
              <td><b>{product.dirtyPrice !== '-' ? `R$${product.dirtyPrice}` : product.dirtyPrice}</b></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPrices;

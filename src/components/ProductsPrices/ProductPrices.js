import React from "react"
import "./ProductPrices.css"

const ProductPrices = () => {
  // const products = [
  //   {
  //     name: "Colete",
  //     supplier: "🐍 Hydra",
  //     cleanPrice: "6.000",
  //     dirtyPrice: "-",
  //   },
  //   {
  //     name: "KochVP",
  //     supplier: "👼🏻 8º Anjo",
  //     cleanPrice: "30.000",
  //     dirtyPrice: "45.000",
  //   },
  //   {
  //     name: "Maconha",
  //     supplier: "👼🏻 8º Anjo",
  //     cleanPrice: "375,00",
  //     dirtyPrice: "420,00",
  //   },
  //   {
  //     name: "Five",
  //     supplier: "🐝 Meraki",
  //     cleanPrice: "-",
  //     dirtyPrice: "-",
  //   },
  // ];

  return (
    <div className="container-product">
      <div className="warning-wrapper">
        <div className="warning">
          <h1>
            <b>⚠️👵🏻 AVISOS DA VÉIA 👵🏻⚠️</b>
          </h1>
          <span>
            1. <b>Por enquanto</b> não vendemos mais <b>muni de PT para CPF</b>{" "}
            por ser sempre venda pequena. Muni de PT só se for{" "}
            <b>quantidade alta e pra quem a gente gosta</b>
          </span>
          <span>
            2. <b>Por enquanto</b> venderemos <b>NO MÁXIMO 300 meta por dia</b>{" "}
            para cada família
          </span>
          <span>
            3. Venda de metanfetamina <b>SOMENTE</b> por encomenda com 24h de
            antecedência, <b>sem pronta entrega</b>.
          </span>
        </div>
      </div>

      {/* <h1 className="title">🔫 PRODUTOS E FORNECEDORES 🔫</h1>
      <table className="product-table">
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
              <td>
                <b>{product.name}</b>
              </td>
              <td>{product.supplier}</td>
              <td>
                <b>
                  {product.cleanPrice !== "-"
                    ? `R$${product.cleanPrice}`
                    : product.cleanPrice}
                </b>
              </td>
              <td>
                <b>
                  {product.dirtyPrice !== "-"
                    ? `R$${product.dirtyPrice}`
                    : product.dirtyPrice}
                </b>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default ProductPrices;

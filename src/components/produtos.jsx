import ServiceCard from "./ServiceCard";

const produtos = [
  {
    title: "Rações",
    description: "Diversas marcas e sabores",
    price: "Consulte os preços com nossos atendentes",
    image: "/images/produto1.jpg",
  },
  {
    title: "Acessórios",
    description: "Para o conforto do seu pet",
    price: "Consulte os preços com nossos atendentes",
    image: "/images/produto2.jpg",
  },
  {
    title: "Medicamentos",
    description: "Produtos para saúde animal",
    price: "Consulte os preços com nossos atendentes",
    image: "/images/produto3.jpg",
  },
];

const Produtos = () => {
  return (
    <section className="servicos-section" id="Produtos">
      <h2>Produtos Populares</h2>
      <div className="servicos-grid">
        {produtos.map((item, index) => (
          <ServiceCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Produtos;

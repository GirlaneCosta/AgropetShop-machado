import ServiceCard from "./ServiceCard";

const servicostosas = [
  {
    title: "Tosa Geral Porte (P)",
    description: "Tosa completa para cães de porte pequeno",
    price: "R$70.00",
    image: "/images/tosa1.jpg",
  },
  {
    title: "Tosa Geral Porte (M)",
    description: "Tosa Geral Porte (M)",
    price: "R$80.00",
    image: "/images/tosa2.jpg",
  },
  {
    title: "Tosa Geral Porte (G)",
    description: "Tosa completa para cães de porte grande",
    price: "R$90.00",
    image: "/images/tosa3.jpg",
  },
  {
    title: "Tosa Carneirinho (P)",
    description: "Tosa estilo carneirinho para cães de porte pequeno",
    price: "R$75.00",
    image: "/images/tosac1.jpg",
  },
  {
    title: "Tosa Carneirinho (M)",
    description: "Tosa estilo carneirinho para cães de porte médio",
    price: "R$85.00",
    image: "/images/tosac2.jpg",
  },
  {
    title: "Tosa Carneirinho (G)",
    description: "Tosa estilo carneirinho para cães de porte grande",
    price: "R$95.00",
    image: "/images/tosac3.jpg",
  },
  {
    title: "Tosa Bebê (P)",
    description: "Tosa estilo bebê para cães de porte pequeno",
    price: "R$95.00",
    image: "/images/tosab1.jpg",
  },
  {
    title: "Tosa Bebê (M)",
    description: "Tosa estilo bebê para cães de porte médio",
    price: "R$115.00",
    image: "/images/tosab2.jpg",
  },
  {
    title: "Tosa Bebê (G)",
    description: "Tosa estilo bebê para cães de porte grande",
    price: "R$160.00",
    image: "/images/tosab3.jpg",
  },
];

const ServicosTosas = () => {
  return (
    <section className="servicos-section" id="ServicosTosas">
      <h2>Serviços de Tosas</h2>
      <div className="servicos-grid">
        {servicostosas.map((item, index) => (
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

export default ServicosTosas;

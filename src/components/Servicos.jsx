import ServiceCard from "./ServiceCard";

const servicos = [
  {
    title: "Banho Porte (PP)",
    description: "Banho completo para cães de porte muito pequeno",
    price: "R$30.00",
    image: "/images/banho1.jpg",
  },
  {
    title: "Banho Porte (P)",
    description: "Banho completo para cães de porte pequeno",
    price: "R$45.00",
    image: "/images/banho2.jpg",
  },
  {
    title: "Banho Porte (M)",
    description: "Banho completo para cães de porte médio",
    price: "R$70.00",
    image: "/images/banho3.jpg",
  },
  {
    title: "Banho Porte (G)",
    description: "Banho completo para cães de porte grande",
    price: "R$90.00",
    image: "/images/banho4.jpg",
  },
  {
    title: "Banho Porte (GG)",
    description: "Banho completo para cães de porte muito grande",
    price: "R$140.00",
    image: "/images/banho5.jpg",
  },
];

const Servicos = () => {
  return (
    <section className="servicos-section" id="servicos">
      <h2>Serviços de Banho</h2>
      <div className="servicos-grid">
        {servicos.map((item, index) => (
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

export default Servicos;

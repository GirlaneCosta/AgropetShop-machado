import ServiceCard from "./ServiceCard";

const adicionais = [
  {
    title: "Unhas",
    description: "Corte de unhas para seu pet",
    price: "R$10.00",
    image: "/images/adicional1.jpg",
  },
  {
    title: "Patinha de Poodle",
    description: "Tosa especial para patas de Poodle",
    price: "R$15.00",
    image: "/images/adicional2.jpg",
  },
  {
    title: "Tosa Higiênica",
    description: "Tosa Higiênica",
    price: "R$15.00",
    image: "/images/adicional3.jpg",
  },
  {
    title: "Unhas Pequenas",
    description: "Corte de unhas para pets de pequeno porte",
    price: "R$8.00",
    image: "/images/adicional4.jpg",
  },
  {
    title: "Taxa de Desembolo",
    description: "Serviço de remoção de embaraços no pelo",
    price: "R$15.00",
    image: "/images/adicional5.jpg",
  },
];

const Adicionais = () => {
  return (
    <section className="servicos-section" id="Adicionais">
      <h2>Adicionais</h2>
      <div className="servicos-grid">
        {adicionais.map((item, index) => (
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

export default Adicionais;

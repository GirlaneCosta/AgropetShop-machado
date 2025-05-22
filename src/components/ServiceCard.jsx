const ServiceCard = ({ image, title, description, price }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-card-image" />
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

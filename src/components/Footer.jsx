const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Agropet Shop Machado" />
          <h3>Agropet Shop Machado</h3>
          <p>Agropet shop machado estamos localizados em aguas lindas,<br /> temos 🛁 Banho e tosa 🎀Acessórios 💊Medicamentos 🚕Táxi dog venha conferir.</p>
        </div>

        <div className="footer-section">
          <h4>Ajuda</h4>
          <ul>           
            <li>Contato: (61) 9412-1273</li>
            <li><a href="https://maps.app.goo.gl/U4pEKLGAoyqgtkxM6" target="_blank">Nossa Loja: Aguas Lindas de GO</a></li>
            <li><a href="https://www.instagram.com/agropet.shop_machado/">Instagram: agropet.shop_machado</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Horário de Funcionamento</h4>
          <table>
            <tbody>
              <tr>
                <td>Segunda a Sábado</td>
                <td>8:00 - 17:00</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>9:00 - 14:00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Agropet Shop Machado. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;

import { MenuLayout } from "../layouts/MenuLayout";
import Logo from "../assets/Logo Globe School (varios colores)_2.png";

export const Contact = () => {
  return (
    <MenuLayout>
      <div className="p-6 mb-20 rounded-xl w-[320px] text-gray-800 text-center space-y-2">
        <p className="text-l font-semibold">Si necesitas ponerte en contacto con nosotros, puedes  hacerlo a través de los siguientes canales:</p>
        <p><strong>☎️</strong> <a href="tel:+34644456050" className="text-blue-600 underline">644 456 050</a></p>
        <p><strong>✉️</strong> <a href="mailto:info@globeschool.com" className="text-blue-600 underline">info@globeschool.com</a></p>
        <p><strong>🌍</strong> <a href="https://www.globeschool.es" className="text-blue-600 underline">Globe School</a></p><br />
        <p><strong>Academia El Llano:</strong> <br /> C/ Eulalia Álvarez 3, bajo </p>
        <img src={Logo} alt="Globe School" className="w-12 h-8 mx-auto" />
        <p><strong>Academia La Calzada:</strong> <br /> Avda. de Las Industrias 11 (esquina<br /> C/ Los Andes), bajo </p>
      </div>
    </MenuLayout>
  );
};
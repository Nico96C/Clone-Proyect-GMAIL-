import logo from "./img/logoG.png";
import "./App.css";
import { useState, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inbox from "./components/Inbox";
import Spam from "./components/Spam";
import MailDetails from "./components/MailDetails";
import Modal from "./components/Modal";

function App() {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: "Malena Ortega",
      subsender: "ejemplo@gmail.com",
      subject: "¡Hola!",
      message: "Este es un mensaje de ejemplo.",
      date: "2024-02-10T08:00:00Z",
      read: false,
    },
    {
      id: 2,
      sender: "Gimenez Marcos",
      subsender: "otroejemplo@gmail.com",
      subject: "Reunión",
      message: "Recordatorio: reunión mañana a las 10 AM.",
      date: "2024-02-09T15:30:00Z",
      image: "",
      read: false,
    },
    {
      id: 3,
      sender: "TELEMAX",
      subsender: "otroejemplo2@gmail.com",
      subject: "Oferta Telemax",
      message:
        "Suscribite al servicio de pago, solo por 12.999$ mes final y obteniendo un descuento imperdible.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 4,
      sender: "MAX",
      subsender: "otroejemplo2@gmail.com",
      subject: "Todo listo para Max",
      message:
        "¡Te damos la bienvenida! ¡Max está aquí! Todo está listo para ti. Puedes continuar viendo tus historias favoritas desde donde te quedaste, o puedes descubrir nuevos títulos. ¡Explora todo lo que Max¡",
      msj: "¡Hay muchos más estrenos para disfrutar en Max!",
      msj2: "Solo tienes que dar play para sumergirte en todas nuestras historias y descubrir tus nuevos favoritos.",
      date: "2024-02-11T15:30:00Z",
      images: [
        "https://ci3.googleusercontent.com/meips/ADKq_NZRuVfQ4t45jEqutS5sYoX80o_f5D8i_mCWADkMVBMWcOaIP3JNl-3WJf5g-564nVrGpzrT1NgFBUGsFSxqwgTLaQlYqD6Ew9Gbn4mAUFlr2Ldhu_uXpzRkXySEqKzPa24RcX9L66OYo8nlSySwZwh9XAzba-cFLoJaosmw2kA-N5GePxGQyG5MymC7PkKy=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/65e61ce3a065b5004df40f08/original.png?1709579491",
        "https://ci3.googleusercontent.com/meips/ADKq_NbX-VFsoQPY1E9MyzSwOyy93NSgghgeMIwivpOdjwqJUlaYaALESDhvO-Hj1BHdv1uFRsgj34U9PJLEhWqFLczsftvJ3vjQDChBJu0_TD4ZUNQhX49yiEDnapDqHS0PzzrswCCDgMFyRIU-I647dJrtDsMxNEcAI-FE6E2AV_5Q5htpscWkdHFKokzULBC4=s0-d-e1-ft#https://braze-images.com/appboy/communication/assets/image_assets/images/65e61ce5a72f49004b160b8a/original.png?1709579492",
      ],
      links: [
        "https://play.max.com/",
        "https://play.max.com/show/efb05943-beee-4347-b12b-e181e606f345?%243p=e_ab&_branch_match_id=1218330819097953660&utm_medium=Email%20Braze&_branch_referrer=H4sIAAAAAAAAA42N2QqDMBBFvyZ9i0smsQtIKZT%2BhiR11GA0wdhFv75JS1%2F6VBiYuTDn3G6enT%2BkqR0H%2BUykc4nRY5%2BCOxLGwZVYSbUJp510q0dpqttkyi5CBE6EXcI4I5ck0lc7hOg7%2BwgLG5WJPQeqEJFy4FuqcqYo5rsci6xogAsCgReM1%2Bj72broJnD%2B2JmIfsHeHz8d4tsi%2FuxhhdF1UK%2BrWlo73Pt69S8OgkhV%2BgAAAA%3D%3D",
      ],
      read: false,
    },
    {
      id: 5,
      sender: "HBO MAX",
      subsender: "otroejemplo2@gmail.com",
      subject: "Perfil Creado!",
      message:
        "Ahora personaliza tu perfil con una foto o tu personaje favorito ¡Creaste un nuevo perfil! Recuerda que puedes cambiar la foto y editar el nombre de tu perfil: 1. Abre la app de HBO Max en tu celular",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 6,
      sender: "URGAME AMD",
      subsender: "otroejemplo2@gmail.com",
      subject: "Premios y puntos",
      message:
        "Descarga la imagen para conocer más detalles Consulta Términos y condiciones: aquí Cualquier duda que tengas, puedes escribirnos a: info@urgame.gg *Imagen de uso ilustrativo.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 7,
      sender: "Reddit",
      subsender: "otroejemplo2@gmail.com",
      subject: "Update to Reddit's Privacy Policy",
      message:
        "We're writing to let you know that we've updated Reddit's Privacy Policy and User Agreement. These changes clarify how Reddit uses your data.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 8,
      sender: "Aviso santander",
      subsender: "otroejemplo2@gmail.com",
      subject: "Debito de tu cuenta",
      message:
        "Información sobre el débito en tu cuenta por recurrencia Hola señor Cuello, Queremos comunicarte que se realizó un débito en tu cuenta asociado a la recurrencia que tenés activa con CUELLO",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 9,
      sender: "CodeSandBox",
      subsender: "otroejemplo2@gmail.com",
      subject: "First Big Product Update",
      message:
        "New products, CDE, VM tiers, live sessions, Devboxes and more. Don't miss our latest product update.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 10,
      sender: "SoundCloud",
      subsender: "otroejemplo2@gmail.com",
      subject: "Your Update",
      message: "Your upload song .... has been removed from your profile.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 11,
      sender: "Google Maps Timeline",
      subsender: "otroejemplo2@gmail.com",
      subject: "Tus novedades de Enero",
      message:
        "Aqui tenes novedades de tu cronologia. Te hemos enviado este correo porque tienes activada la funcion.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 12,
      sender: "Aviso Santander",
      subsender: "otroejemplo2@gmail.com",
      subject: "Recordatorio Turno",
      message:
        "Hola señor Cuello, segun llegue a la sucursal debe de portar con usted ya sea su CUIL o DNI para presentar y poder acceder a caja.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 13,
      sender: "HBO Max",
      subsender: "otroejemplo2@gmail.com",
      subject: "HBO Max se convertira en Max!",
      message: "Todo lo que necesita saber esta aqui.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 14,
      sender: "PedidosYa",
      subsender: "otroejemplo2@gmail.com",
      subject: "Confirmacion Pedido!",
      message:
        "Mostaza portal Lomas esta preparando su pedido! Gracias Nicolas! y este atento a las notificaciones",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 15,
      sender: "Google Maps Timeline",
      subsender: "otroejemplo2@gmail.com",
      subject: "Novedades del 2023",
      message:
        "Aqui tienes una actualizacion completa de tu cronologia del 2023.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 16,
      sender: "Aviso santander",
      subsender: "otroejemplo2@gmail.com",
      subject: "Debito de tu cuenta",
      message:
        "Información sobre el débito en tu cuenta por recurrencia Hola señor Cuello, Queremos comunicarte que se realizó un débito en tu cuenta asociado a la recurrencia que tenés activa con CUELLO",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 17,
      sender: "Ro VelDel",
      subsender: "otroejemplo2@gmail.com",
      subject: "Solicitud Compartir",
      message:
        "¿Compartir un elemento? Ro VelDel esta solicitando acceso para poder ver el elemento.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 18,
      sender: "No-Reply",
      subsender: "otroejemplo2@gmail.com",
      subject: "GeForce Now",
      message: "Welcome to GeForce NOW Let's get Started!",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 19,
      sender: "URGAME AMD",
      subsender: "otroejemplo2@gmail.com",
      subject: "Frame Battleground by URGAME",
      message:
        "Todavía estás a tiempo de capturar lo increíble, y revelar lo extraordinario.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 20,
      sender: "Facebook",
      subsender: "otroejemplo2@gmail.com",
      subject: "¿Has eliminado un correo electronico?",
      message:
        "Hola, Nico: El objetivo de este mensaje es informarte de que la dirección de correo electrónico ....@gmail.com se acaba de eliminar de tu cuenta de Facebook. Información sobre este cambio Jueves,",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 21,
      sender: "Eneba",
      subsender: "otroejemplo2@gmail.com",
      subject: "Participa",
      message:
        "Sorteo de claves donde puedes ganar una gran cantidad de juegos de todo tipo, en el que rondan valor de 40$.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
    {
      id: 22,
      sender: "Patreon",
      subsender: "otroejemplo2@gmail.com",
      subject: "Updates",
      message:
        "Patreon Wordmark Hi there, We just announced some exciting community features that aim to transform how fans connect among the communities that matter to them most.",
      date: "2024-02-11T15:30:00Z",
      read: false,
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const [reloadFlag, setReloadFlag] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState('inbox');

  /*
  const initialEmails = JSON.parse(localStorage.getItem('emails')) ||

  const [emails, setEmails] = useState(initialEmails);

  useEffect(() => {
    localStorage.setItem('emails', JSON.stringify(emails));
  }, [emails]);
  */

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleTabChange = (tab) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };

  const updateEmail = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, read: true } : email
      )
    );
  };

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [reloadFlag]);

  const handleReload = () => {
    setReloadFlag((prevFlag) => !prevFlag);
  };

  const [isActive, setIsActive] = useState(false);

  const toggleSwitch = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div>
        <div>
          <div className="cabezal">
            <div className="Main">
              <button className="MenuButton">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-24-256.png"
                  alt="Main Menu"
                  width={25}
                  height={25}
                />
              </button>
              <img
                className="logo"
                alt="loguito"
                title="Gmail"
                onClick={handleReload}
                src={logo}
                width={107}
                height={42}
              />
            </div>
            <div className="MenuSearch">
              <button className="Search" alt="Search">
                <img
                  className="icono"
                  src="https://cdn2.iconfinder.com/data/icons/search-outline-24-px/24/loupe_communications_magnifying_glass_message_envelope-256.png"
                  alt="Search"
                  width={25}
                  height={25}
                />
              </button>
              <input
                className="SearchBar"
                placeholder="Search Mail"
                value={inputValue}
                onChange={handleInputChange}
                type="text"
                size={50}
                onFocus={() => {
                  const menuSearch = document.querySelector(".MenuSearch");
                  menuSearch.classList.add("active");
                }}
                onBlur={() => {
                  const menuSearch = document.querySelector(".MenuSearch");
                  menuSearch.classList.remove("active");
                }}
              />
              <div style={{ width: "25px" }}>
                {inputValue.length > 0 && (
                  <button className="SearchClear">
                    <img
                      className="clear"
                      src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-02-256.png"
                      alt="borrar"
                      width={25}
                      height={25}
                    />
                  </button>
                )}
              </div>
              <button className="SearchOption">
                <img
                  className="filters"
                  src="https://cdn0.iconfinder.com/data/icons/mobile-basic-vol-1/32/Filter-256.png"
                  alt="filtro"
                  width={25}
                  height={25}
                />
              </button>
            </div>
            <div className="Loader">
              {loading && (
                <>
                  <p className="RingLoader"></p>
                </>
              )}
            </div>

            <div className="Seccion-Nocturno">
              <div className="Boton-Nocturno">
                <div
                  className={`switch-container ${isActive ? "active" : ""}`}
                  onClick={toggleSwitch}
                >
                  <div
                    className={`switch-slider ${isActive ? "active" : ""}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BrowserRouter>
        <div className="fullBody" alt="cuerpo" style={{ display: "flex" }}>
          <div
            className="navegator"
            alt="navegador"
            style={{ width: "256px", height: "868px" }}
          >
            <div className="message-compose">
              <Modal />
            </div>
            <div className="mails">
              <div className="Container-Items">
                <div className="SubContainer-Items">
                  <div className="SubContainer-A">
                    <div className={`Item ${selectedTab === 'inbox' ? 'selected' : ''}`}>
                      <Link className={`custom-link ${selectedTab === 'inbox' ? 'selected' : ''}`}
                      onClick={() => handleTabChange('inbox')}
                       title="Inbox" to="/inbox">
                        <div>
                          <img
                            src={selectedTab === 'inbox' ? "https://cdn3.iconfinder.com/data/icons/fluent-solid-24px-vol-5/24/ic_fluent_mail_inbox_24_filled-256.png" : "https://cdn3.iconfinder.com/data/icons/fluent-regular-24px-vol-5/24/ic_fluent_mail_inbox_24_regular-256.png"}
                            alt="inbox-img"
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>Inbox</p>
                      </Link>
                    </div>

                    <div className="Item">
                      <Link className="custom-link"
                      onClick={() => handleTabChange('spam')}
                       title="Spam" to="/spam">
                        Spam
                      </Link>
                    </div>
                  </div>
                  <div className="SubContainer-B"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tableMail"
            alt="tablaMail"
            style={{ width: "1600px", height: "868px" }}
          >
            <div className="Seccion-Mails">
              <Routes>
                <Route path="/inbox" element={<Inbox emails={emails} />} />
                <Route path="/" element={<Navigate to="/inbox" />} />
                <Route path="/spam" element={<Spam />} />
                <Route
                  path="/inbox/:id"
                  element={
                    <MailDetails emails={emails} updateEmail={updateEmail} />
                  }
                />
              </Routes>
            </div>
          </div>
          <div
            className="complement"
            alt="complemento"
            style={{ width: "56px", height: "868px" }}
          >
            <div className="columna-items">
              <div className="calendario">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/free-line-christmas-icons/24/Christmas_Date-256.png"
                  alt="calendario"
                  width={25}
                  height={25}
                />
              </div>
              <div className="contacto">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/watchify-v1-0/70/users-70px-256.png"
                  alt="contacto"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

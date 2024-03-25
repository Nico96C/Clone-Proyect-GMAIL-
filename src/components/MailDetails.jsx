/* eslint-disable react/prop-types */
import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";

const MailDetails = ({ emails, updateEmail }) => {

  const { id } = useParams();

  const email = emails.find((email) => email.id === parseInt(id));

  const renderImages = () => {
    if (email.images && email.images.length > 0) {
      return (
        <div>
          {email.images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  const renderLinks = () => {
    if (email.links && email.links.length > 0) {
      return (
        <div>
          <ul>
            {email.links.map((link, index) => (
              <li key={index}>
                <a href={link}>MAX</a>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  };

  useEffect(() => {
    if (email && email.id) {
      updateEmail(email.id); // Llama a la función para actualizar el correo electrónico en App
    }
  }, []);

  const renderImagesWithLinks = (index) => {
    if (
      email.images &&
      email.images.length > 0 &&
      email.links &&
      email.links.length > 0
    ) {
      return (
        <div key={index}>
          <a
            href={email.links[index]}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="publi1"
              src={email.images[index]}
              alt={`Image ${index + 1}`}
            />
          </a>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderMessage = () => {
    if (email.msj && email.msj2) {
      return (
        <td className="message-2">
          <p className="Presentacion">{email.msj}</p>
          <p className="Presentacion-2">{email.msj2}</p>
        </td>
      );
    } else {
      return (
        <td className="message-2">
          <p className="textito">{email.message}</p>
        </td>
      );
    }
  };

  return (
    <div className="Mail-Zone">
      <div className="Bar-Option">
        <div className="Options">
          <div className="Mail-Options">
            <div className="box-arrow">
              <Link to="/inbox">
                <div className="box-mail-2">
                  <span className="back">
                    <img
                      src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/left_2-256.png"
                      alt="checkbox"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
              </Link>
            </div>
            <div className="reload-2">
              <div>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_refresh_load_loading_sync_arrow_reload_restart-256.png"
                  alt="reload"
                  width={17}
                  height={17}
                />
              </div>
            </div>
            <div className="more-options-2">
              <div>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_more_vert_48px-256.png"
                  alt="more"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="Historycal">1-50 of 100</div>
        </div>
      </div>

      <div className="Total-Mail">
        <div className="Mails">
          <div className="Mails-Padding">
            <div className="Mails-Scroll">
              <div className="Top">
                <table>
                  <tbody className="tbody2">
                    <tr className="Tipo">
                      <td>DETALLES CORREO</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="Bot-total">
                <div className="columnas"> MAX </div>

                <div className="Bot">
                  <table className="tabla">
                    <tbody>
                      <tr>
                        <td>
                          <table className="Seccion-1">
                            <tbody>
                              <tr>
                                <td>{renderImagesWithLinks(0)}</td>
                              </tr>
                            </tbody>
                          </table>

                          <table>
                            <tbody>
                              <tr>{renderMessage()}</tr>
                            </tbody>
                          </table>

                          <table className="Seccion-2">
                            <tbody>
                              <tr>
                                <td>{renderImagesWithLinks(1)}</td>
                              </tr>
                            </tbody>
                          </table>

                          <table>
                            <tbody>
                              <tr>
                                <td className="sender-2"></td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailDetails;

/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Inbox = ({ emails }) => {
  useEffect(() => {
    const listElements = document.querySelectorAll(".Mail-item");
    let totalHeight = 0;
    listElements.forEach((element) => {
      totalHeight += element.scrollHeight;
    });

    // Asignar la altura calculada al contenedor
    const mailsScroll = document.querySelector(".tbody1");
    mailsScroll.style.height = totalHeight + "px";
  }, []);

  return (
    <>
      <div className="Mail-Zone">
        <div className="Bar-Option">
          <div className="Options">
            <div className="Mail-Options">
              <div className="box-arrow">
                <div className="box-mail">
                  <span>
                    <img
                      src="https://cdn2.iconfinder.com/data/icons/boxicons-regular-vol-1/24/bx-checkbox-256.png"
                      alt="checkbox"
                      width={20}
                      height={20}
                    />
                  </span>
                </div>
                <div className="dropdown">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_expand_more_48px-256.png"
                    alt="desplegable"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
              <div className="reload">
                <div>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/top-search-7/128/_refresh_load_loading_sync_arrow_reload_restart-256.png"
                    alt="reload"
                    width={17}
                    height={17}
                  />
                </div>
              </div>
              <div className="more-options">
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
        <div className="Mails">
          <div className="Mails-Padding">
            <div className="Mails-Scroll">
              <div>
                <table>
                  <tbody className="tbody2">
                    <tr className="Tipo">
                      <td className="Tipo-1">
                        <div className="Mail-Type"> Primary </div>
                      </td>
                      <td className="Tipo-1">
                        <div className="Mail-Type"> Promotions </div>
                      </td>
                      <td className="Tipo-1">
                        <div className="Mail-Type"> Social </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <table>
                  <tbody className="tbody1">
                    {emails.map((email) => (
                      <tr
                        key={email.id}
                        className={
                          email.read ? "Mail-item" : "Mail-item-unread"
                        }
                      >
                        <td className="marcador">
                          <img
                            src="https://cdn2.iconfinder.com/data/icons/boxicons-regular-vol-1/24/bx-checkbox-256.png"
                            alt="checkbox"
                            width={20}
                            height={20}
                          />
                        </td>
                        <td className="marcadores">
                          <img
                            src="https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-256.png"
                            alt="star"
                            width={20}
                            height={20}
                          />
                        </td>
                        <td className="marcadores">
                          <img
                            src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded_3-17-256.png"
                            alt="star"
                            width={20}
                            height={20}
                          />
                        </td>

                        <td className="sender">
                          <Link
                            key={email.id}
                            to={{
                              pathname: `/inbox/${email.id}`,
                              state: { email },
                            }}
                            className={
                              email.read ? "Mail-Link-2" : "Mail-Link-2-unread"
                            }
                          >
                            {email.sender}
                          </Link>
                        </td>

                        <td className="message">
                          <Link
                            key={email.id}
                            to={{
                              pathname: `/inbox/${email.id}`,
                              state: { email },
                            }}
                            className="Mail-Link"
                          >
                            <span
                              className={
                                email.read
                                  ? "Mail-Link-2"
                                  : "Mail-Link-2-unread"
                              }
                            >
                              {email.subject + " "}
                            </span>
                            — <span className="Mail-Msj">{email.message}</span>
                          </Link>
                        </td>

                        <td className="date-Mail">
                          {new Date(email.date).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inbox;

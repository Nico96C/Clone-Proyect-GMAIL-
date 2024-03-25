import { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  /*
  <div className="modal">
            <div className="overlay" onClick={toggleModal}></div>
          </div>
          */

  return (
    <>
      <div className="message-botton" onClick={toggleModal}>
        <div className="message-icon">
          <img
            className="m-icon"
            src="https://cdn3.iconfinder.com/data/icons/design-142/24/pen-line-256.png"
            alt="iconoMensaje"
            width={25}
            height={25}
          />
        </div>
        <div className="message-text"> Compose </div>
      </div>

      {modal && (
        <>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              reprehenderit illo molestiae quas assumenda. Officia, consectetur
              cum. Aspernatur, in? Facilis maxime quis quam adipisci corrupti id
              quibusdam facere minus laborum quae explicabo nemo obcaecati
              inventore, autem fugit, non praesentium iure et alias sit quos in
              magni nihil. Enim, obcaecati quidem.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </>
      )}
    </>
  );
}

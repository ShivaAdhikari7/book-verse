import { useState } from "react";
import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/FormElements/Button";
import "./PlaceItem.css";
import Map from "../../shared/components/UI/Map";
import Modal from "../../shared/components/UI/Modal";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const showMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

  return (
    <>
      {showMap && (
        <Modal
          onCancel={closeMapHandler}
          header={props.address}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={<Button onClick={closeMapHandler}>Close</Button>}
        >
          <div className="map-container">
            <Map center={props.coordinates} zoom="16" />
          </div>
        </Modal>
      )}
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="place-item__info ">
            <h2>{props.title}</h2>
            <h2>{props.address}</h2>
            <h2>{props.description}</h2>
          </div>

          <div className="place-item__actions">
            <Button inverse onClick={showMapHandler}>
              View on Map
            </Button>
            <Button to={`places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;

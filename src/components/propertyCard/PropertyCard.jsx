import bathIcon from "../../icons/bath.png";
import bedIcon from "../../icons/bed.png";
import areaIcon from "../../icons/area.png";

import "./PropertyCard.styles.scss";

function PropertyCard({
  name,
  price,
  address,
  beds,
  baths,
  area,
  imageUrl,
  state,
  type,
}) {
  return (
    <div className="property-card">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <p className="type">{type.split("_").join(" ")}</p>
      </div>
      <div className="details">
        <h3 className="name">{name}</h3>
        <h5 className="price">{`$${price}/month`}</h5>
        <p className="address">{`${address}, ${state}`}</p>
        <div className="features">
          <div className="beds">
            <img className="icon" src={bedIcon} alt="icon" />
            {beds}
          </div>
          <div className="baths">
            <img className="icon" src={bathIcon} alt="icon" />
            {baths}
          </div>
          <div className="area">
            <img className="icon" src={areaIcon} alt="icon" />
            {area}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;

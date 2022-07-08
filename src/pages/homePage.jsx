import { useState } from "react";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";
import PropertyCard from "../components/propertyCard/PropertyCard";

import propertiesData from "../properties_data.json";

import logo from "../icons/logo.png";
import locationLogo from "../icons/location.png";
import dateLogo from "../icons/date.png";
import moneyLogo from "../icons/money.png";
import typeLogo from "../icons/type.png";

import "./homePage.styles.scss";

function HomePage() {
  const [filters, setFilters] = useState({
    location: "",
    date: "",
    priceMin: "",
    priceMax: "",
    type: "",
  });

  const [data, setData] = useState([...propertiesData]);

  const handleChange = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const filterPropertiies = () => {
    let propData = propertiesData.filter((p) => {
      let location = true;
      let date = true;
      let price = true;
      let type = true;

      if (filters.location) {
        location =
          p.address_full.state.toLowerCase() === filters.location.toLowerCase();
      }
      if (filters.date) {
        date = p.checkIn === filters.date;
      }
      if (filters.priceMin || filters.priceMax) {
        price = p.price >= filters.priceMin && p.price <= filters.priceMax;
      }
      if (filters.type && filters.type !== "All") {
        type = p.prop_type.toLowerCase() === filters.type.toLowerCase();
      }
      return location && price && date && type;
    });

    setData(propData);
  };

  return (
    <>
      <nav className="navigation">
        <img className="icon" src={logo} alt="icon" />
        <p className="logo">Prop Rent</p>
      </nav>
      <div className="container">
        <h1 className="heading">Search properties to rent</h1>
        <div className="filters">
          <div className="input-container">
            <div className="label-container">
              <img className="icon" src={locationLogo} alt="logo" />
              <label htmlFor="states">Location</label>
            </div>
            <CustomInput
              id="states"
              type="text"
              list="states"
              name="location"
              placeholder="Try New York"
              handleChange={handleChange}
            />
            <datalist className="options" id="states">
              <option value="San Francisco">San Francisco, CA</option>
              <option value="San Diego">San Diego, CA</option>
              <option value="New York">New York, NY</option>
              <option value="Chicago">Chicago, IL</option>
            </datalist>
          </div>
          <div className="input-container">
            <div className="label-container">
              <img className="icon" src={dateLogo} alt="logo" />
              <label htmlFor="date">When</label>
            </div>
            <CustomInput
              id="date"
              type="date"
              name="date"
              placeholder=""
              handleChange={handleChange}
            />
          </div>
          <div className="input-container">
            <div className="label-container">
              <img className="icon" src={moneyLogo} alt="logo" />
              <label>Price</label>
            </div>
            <div className="price-inputs">
              <CustomInput
                id="min"
                type="number"
                name="priceMin"
                placeholder="min"
                handleChange={handleChange}
              />
              <CustomInput
                id="max"
                type="number"
                name="priceMax"
                placeholder="max"
                handleChange={handleChange}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="label-container">
              <img className="icon" src={typeLogo} alt="logo" />

              <label htmlFor="type">Property Type</label>
            </div>
            <select
              id="type"
              className="custom-input"
              onChange={(e) => handleChange("type", e.target.value)}
            >
              <option value="">All</option>
              <option value="Apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="Single_family">Single Family</option>
            </select>
          </div>
          <CustomButton text="Search" handleClick={filterPropertiies} />
        </div>
        <div className="properties-container">
          {data && data.length ? (
            data.map((property, i) => {
              return (
                <PropertyCard
                  key={i}
                  name={property.name}
                  address={property.address}
                  state={property.address_full.state}
                  area={property.area}
                  baths={property.baths}
                  beds={property.beds}
                  imageUrl={property.image}
                  price={property.price}
                  type={property.prop_type}
                />
              );
            })
          ) : (
            <p className="error">Looks like we don't have these listings!</p>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;

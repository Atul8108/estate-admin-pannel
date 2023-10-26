import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Property.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

const Property = () => {
  const [category, setCategory] = useState();
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = "/api";

    const graphqlQuery = {
      query: `
        fragment PR on Property {
          coverImage {
            src
            alt
            videoUrl
          }
          propertyType
          listingId
          title
          subtitle
          isActiveProperty
          displayPrice {
            value
            displayValue
            unit
            deposit
          }
          address {
            address
            url
            detailedPropertyAddress {
              url
              val
            }
            distanceFromEntity
          }
          url
          promotions
          coords
          tags
          meta
          brands {
            name
          }
          sellers {
            ...BS
            phone {
              partialValue
            }
          }
        }
        fragment BS on User {
          name
          id
          image
          firmName
          url
          type
          isPrime
          isPaid
          designation
        }
        query(
          $cityId: String
          $poly: String
          $visitedPolygons: [String]
          $visitedProjects: [String]
        ) {
          audienceMaximizerProperties(
            cityId: $cityId
            poly: $poly
            visitedPolygons: $visitedPolygons
            visitedProjects: $visitedProjects
          ) {
            totalCount
            properties {
              ...PR
              updatedAt
              socialUrgency {
                msg
              }
              socialContext {
                msg
              }
            }
          }
        }
      `,
      variables: {
        cityId: "90d5af399d7256af0694",
        poly: "cfd49c20e16ab8f21a81",
        visitedPolygons: [],
        visitedProjects: [],
      },
    };

    axios
      .post(apiUrl, graphqlQuery)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(data);
  function handleSelect(e) {
    setCategory(e);
  }

  return (
    <>
      <section className="main-layout">
        <Header />
        <div className="page-content">
          <div className="page-content-container">
            <div
              className="d-flex"
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <h4>Property List</h4>
              <button className="btn btn-primary m-0">+ Add Property</button>
            </div>
            <div className="propertylist-container">
              <div className="row">
                <div className="col-3">
                  <form className="form">
                    <button>
                      <svg
                        className="m-0"
                        width="17"
                        height="16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        aria-labelledby="search"
                      >
                        <path
                          d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                          stroke="currentColor"
                          strokeWidth="1.333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <input
                      className="input"
                      placeholder="Type your text"
                      required=""
                      type="text"
                    />
                    <button className="reset" type="reset">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                {/* <div className="col-2">
                  <DropdownButton
                    className="propertylist-page-dropdown"
                    width="100%"
                    alignright="true"
                    title={category ?? "Most Recent"}
                    id="dropdown-menu-align-left"
                    onSelect={(e) => {
                      handleSelect(e);
                    }}
                    style={{ color: "var(--Text-color-dark)" }}
                  >
                    <Dropdown.Item id="dropdown-menu-align-left" eventKey="ALL">
                      All
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="dropdown-menu-align-left"
                      eventKey="Most Recent"
                    >
                      Most Recent
                    </Dropdown.Item>
                    <Dropdown.Item
                      id="dropdown-menu-align-left"
                      eventKey="One Week"
                    >
                      One Week
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="col-2">f</div>
                <div className="col-2">g</div>
                <div className="col-2">w</div>
                <div className="col-1">g</div> */}
              </div>
              <div className="property-item">
                <div className="row">
                  <div className="col">
                    <div
                      className="row"
                      style={{ height: "90vh", overflowY: "scroll" }}
                    >
                      {data.data.audienceMaximizerProperties.properties.map(
                        (item, index) => {
                          return (
                            <div className="col-md-6">
                              <div className="team-card">
                                <div className="right-info">
                                  <img
                                    src={item?.title}
                                    alt={index}
                                    style={{
                                      width: "100%",
                                      maxWidth: "250px",
                                      minWidth: "50px",
                                      height: "100%",
                                      objectFit: "cover",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </div>
                                <div className="left-info">
                                  <p>{item?.title}</p>
                                  <p>{item?.name}</p>
                                  <p>{item?.location}</p>
                                  <p>{item?.numberOfBeds}</p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Property;

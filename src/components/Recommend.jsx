import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

import detail1 from "../assets/Documents/explore_Sikkim.pdf";
import detail2 from "../assets/Documents/Kedar_kanth.pdf";
import detail3 from "../assets/Documents/Tree_House_North_Bengal.pdf";
import detail4 from "../assets/Documents/Offbeat_North_Bengal.pdf";
import detail5 from "../assets/Documents/Tree_House_Camp_Purulia.pdf";
import detail6 from "../assets/Documents/Orissa_Bhitarkanika.pdf";

import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    height: "80%",
    width: "60%",
    p: 4,
  };
  const data = [
    {
      image: Destination1,
      title: "Sikkim Tour",
      subTitle: "Travel Sikkim in for middle class people",
      cost: "38,800",
      duration: "Approx 2 night trip",
      details: detail1,
    },
    {
      image: Destination2,
      title: "Kedar Kanth",
      subTitle: "Kedar Kath, A beautiful trek you must Visit",
      cost: "54,200",
      duration: "Approx 2 night trip",
      details: detail2,
    },
    {
      image: Destination3,
      title: "Tree house based tour North Bengal",
      subTitle: "Travel adventourous Tree house based tour in North Bengal ",
      cost: "45,500",
      duration: "Approx 2 night trip",
      details: detail3,
    },
    {
      image: Destination4,
      title: "Offbeat North Bengal",
      subTitle: "Trvael those offbeat places at an affordable places",
      cost: "24,100",
      duration: "Approx 1 night trip",
      details: detail4,
    },
    {
      image: Destination5,
      title: "Tree House based tour in purulia",
      subTitle: "Purulia, A treat for your eyes !!",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
      details: detail5,
    },
    {
      image: Destination6,
      title: "Orissa BhitarKanika",
      subTitle: "Travel Orissa at an affordable prices",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
      details: detail6,
    },
  ];

  const packages = [
    /*"The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",*/
  ];

  const [active, setActive] = useState(1);

  return (
    <Section id="recommend">
      <div className="title">
        <h2>Travel Destinations We offers Currently</h2>
        <br />
        <hr />
      </div>
      <div className="packages"></div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4><a target="_blank" href={destination.details} >More Details</a></h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }

  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

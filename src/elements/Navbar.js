import react from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";

import styled from "styled-components";
const Navbar = () => {
  return (
    <Wrapper>
      <header>
        <div class="container">
          <h1 class="logo">Scientia</h1>

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="humburger">
            <AiOutlineBars size={50} />
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  background: #55d6aa;

  header::after {
    content: "";
    display: table;
    clear: both;
  }

  .logo {
    float: left;
    padding: 10px 0;
    border: 2px solid black;
  }

  nav {
    float: right;
  }

  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    text-align: center;
    flex-basis: 70%;
    margin: 0;
    padding: 0;
    list-style: none;
    padding-bottom: 10px;
  }

  nav li {
    display: inline-block;
    margin-left: 70px;
    padding-top: 23px;

    position: relative;
  }

  nav a {
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
  }

  nav a:hover {
    color: #000;
  }

  nav a::before {
    content: "";
    display: block;
    height: 5px;
    background-color: #444;

    position: absolute;
    top: 0;
    width: 0%;

    transition: all ease-in-out 250ms;
  }

  nav a:hover::before {
    width: 100%;
  }

  .container {
    display: flex;

    flex-direction: row;
    justify-content: space-between;
    text-align: center;
  }

  .container h1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: 30%;
    /* min-width: 100%; */
  }

  .humburger {
    display: none;
    justify-content: center;
    height: 100%;
    flex-basis: 10%;
    padding: 30px 15px;
    transition: transform 1.5s ease-in-out;
  }

  .humburger:hover {
    transform: rotate(90deg);
  }

  @media screen and (max-width: 900px) {
    nav ul {
      display: none;
    }
    .container h1 {
      flex-basis: 80%;
    }

    .humburger {
      display: flex;
    }
  }
`;

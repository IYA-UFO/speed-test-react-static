import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import "./commonStyle/globalStyle.css";

class App extends Component {
  render() {
    return (
      <Wrap>
        <img src="/img/750×900_320KB.jpg" alt="" />
        <h1>React Static</h1>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src="/img/750×200_50KB_1.jpeg" alt="" />
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-6">
              <TextBox>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </TextBox>
            </div>
            <div className="col-12">
              <img src="/img/750×200_50KB_2.jpeg" alt="" />
            </div>
            {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(num => {
              return (
                <div className="col-6" key={num}>
                  <ImgBox>
                    <img src={`http://lorempixel.com/400/270/nightlife/${num}/`} alt="" />
                  </ImgBox>
                </div>
              );
            })}
            <div className="col-12">
              <img src="/img/750×200_50KB_3.jpeg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <img className="mt-2" src="/img/750×500_100KB_1.jpg" alt="" />
              <img className="mt-2" src="/img/750×500_100KB_2.jpg" alt="" />

              <End>END</End>
            </div>
          </div>
        </div>
      </Wrap>
    );
  }
}

const Gradient = keyframes`
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
`;

const Wrap = styled.div`
  background-color: #1f1721;
  background: linear-gradient(-45deg, #000, #560037, #000, #560037);
  animation: ${Gradient} 5s ease infinite;
  width: 100%;
  color: white;
  background-size: 400% 400%;
  max-width: 500px;
  margin: 0 auto;
  h1 {
    margin: 30px;
    text-align: center;
    font-weight: bold;
  }
`;

const TextBox = styled.div`
  border: 1px white solid;
  padding: 5px;
  margin: 8px 4px;
`;

const ImgBox = styled.div`
  margin: 8px 4px;
`;

const End = styled.div`
  text-align: center;
  margin: 20px 0;
  font-weight: bold;
`;

export default App;

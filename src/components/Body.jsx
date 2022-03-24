import React, { useState, useEffect } from "react";
import "./Body.css";
export const Body = () => {
  // Create out usestate function
  let [playerImage, setPlayerImage] = useState([]);
  const user = async () => {
    const response = await fetch("https://api.npoint.io/20c1afef1661881ddc9c");
    let allplayer = await response.json();
    setPlayerImage(allplayer.playerList);
  };

  //Create out useEffect function

  useEffect(() => {
    user();
  }, []);
  console.log(playerImage);
  function Allimages(r) {
    let Imag = {};
    r.keys().map((pic, index) => {
      Imag[pic.replace("./", "")] = r(pic);
    });
    return Imag;
  }

  const Imag = Allimages(
    require.context("../../public/images", false, /\.(jpe?g)$/)
  );
  return (
    <>
      {playerImage.map((currentelm, id) => {
        return (
          <div className="unque_id" key={id}>
            <img src={Imag[`${currentelm.Id}.jpg`]} />
            <div className="dir">
              <ol>
                <li> {currentelm.PFName}</li>
                <li> {currentelm.Skill}</li>
                <li> {currentelm.SkillDesc}</li>
                <li> {currentelm.UpComingMatchesList[0].MDate}</li>
                <li>
                  {currentelm.UpComingMatchesList[0].CCode} vs v
                  {currentelm.UpComingMatchesList[0].VsCCode}
                </li>
              </ol>
            </div>
          </div>
        );
      })}
    </>
  );
};

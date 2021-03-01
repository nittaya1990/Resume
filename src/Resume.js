import React from "react";
import ReactPlayer from "react-player";
import { FaInstagram, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

function Resume() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-6"></div>
          <div className="p-4" />

          <div className="col-12">
            <h4 className="py-2">Technical Skills</h4>
            <p className="col-sm pl-4 p-2">
              Python, JavaScript, React, jQuery, PHP, Bootstrap, CSS, HTML,
              Linux, Bash, Raspberry Pi, Arduino, Film, Cinematography, Content
              Marketing, Video Marketing, Manufacturing Engineering, 3D
              Modeling, CAD/CAM, IoT, Electronics, Robotics, Product
              Development, Prototyping, Lean Manufacturing, GD&T, Drafting,
              Machining, CNC, CNC Programming, 3D Printing.
            </p>
          </div>

          <div className="col-12">
            <h4 className="py-2">Work Experience</h4>
            <div className="pl-4">
              <p className="font-weight-bold">
                Kineto Films, Co-owner CEO: Jan 2017 – March 2020{"  "}
                <a href="https://instagram.com/kinetofilms">
                  <FaInstagram />{" "}
                  <a href="https://www.facebook.com/kinetofilms">
                    <FaFacebook />
                  </a>
                </a>
              </p>

              <p className="pl-4">
                Kineto Films specialized in high quality video, content
                marketing and storytelling. It helped its clients grow and
                thrive in a social media connected world.
              </p>
              <p className="font-weight-bold">
                Polyform US, Manufacturing Engineer: March 2015 – Dec 2017
              </p>
              <p className="pl-4">
                Created complex kinematic assemblies of rotomolding machines.
                Designed a new production line that included oversight for the
                entire project. Managed multiple projects for instance a
                factory-wide IoT system, with custom hardware and sensors to
                gain unique production insight.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h4 className="py-2">Projects </h4>
          <div className="pl-4">
            <div class="row">
              <div class="col-sm-6">
                <a href="http://www.thinksats.com" className="font-weight-bold">
                  Thinksats.com
                </a>{" "}
                <a href="https://github.com/elocremarc/think-sats">
                  <FaGithub />
                </a>
                <p className="pl-4">
                  React website to display the price of common expenses in
                  satoshis
                </p>
              </div>
              <div class="col-sm-6">
                <p className="font-weight-bold">
                  CNC Conversion:{" "}
                  <a href="https://twitter.com/Elocremarc/status/1344128249199173637">
                    <FaTwitter />
                  </a>
                </p>
                <p className="pl-4">
                  Converted a conventional mill into a 4 axis CNC. {"  "}
                </p>
              </div>

              <div className="col-sm-6">
                <p className="font-weight-bold">
                  Plant Timelapse{" "}
                  <a href="https://github.com/elocremarc/plantbox">
                    <FaGithub />
                  </a>
                </p>
                <p className="pl-4">
                  Raspbery Pi IoT web app controlled studio to film the growth
                  of plants.{" "}
                </p>
                <ReactPlayer
                  muted
                  playing
                  loop
                  height=""
                  width="100%"
                  url={
                    "https://bafybeibizux4d5rx47cxbntwz5u6ogiwevcbzqtbfcyebdjcy7rtdz6ywu.ipfs.dweb.link/"
                  }
                />
              </div>
              <div class="col-sm-6">
                <p className=" font-weight-bold">
                  Bioshield{" "}
                  <a href="https://www.instagram.com/stories/highlights/17852251124016709/">
                    <FaInstagram />
                  </a>{" "}
                  <a href="https://twitter.com/Elocremarc/status/1344138827573518337">
                    <FaTwitter />
                  </a>
                </p>
                <p className="pl-4">
                  Manufactured, promoted, sold and fulfilled a brand new
                  "bio-safety" product in just one day during the start of
                  COVID-19 lockdown. {"  "}
                </p>
                <img
                  className="p-4"
                  src="https://pbs.twimg.com/media/EqdXIwwUcAELRof?format=jpg&name=large"
                  alt="Bioshield"
                  width="100%"
                ></img>
              </div>
              <div class="col-sm-12">
                <p className="font-weight-bold">Video Motion Control</p>
                <p className="pl-4">
                  Designed and built a 6 axis robotic camera rig.
                </p>
                <ReactPlayer
                  muted
                  playing
                  loop
                  width="100%"
                  url={
                    "https://bafybeiborkm62dviribo6pocxmp3y6cylaznrh3mmo4iut53psyt6ehtkq.ipfs.dweb.link/"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div class="">
            <h4 className="py-2">Education</h4>
            <p className="pl-4 font-weight-bold">
              Manufacturing Engineering Technology Bachelor of Science - CAD/CAM
              (ABET)
            </p>
            <p className="pl-4">
              Western Washington University, Bellingham, WA 2014
            </p>
            <div className="p-4" />
          </div>
        </div>
      </div>{" "}
      <div class="p-5 display-4 bg-dark text-light">Kineto Films Reel</div>
      <ReactPlayer
        className="py-4"
        muted
        playing
        loop
        controls
        height="100%"
        width="100%"
        url={
          "https://bafybeigfjiv4pjbrzfnmawqpm6h67skioy3uhzvujly6cfzw5mq6gf2b6a.ipfs.dweb.link/"
        }
      />
      <div class="p-4" />
    </React.Fragment>
  );
}
export default Resume;

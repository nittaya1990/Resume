import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

export default function Social() {
  return (
    <div class="btn-group">
      <button type="button" class="btn ">
        <a href="https://github.com/elocremarc">
          <FaGithub />
        </a>
      </button>
      <button type="button" class="btn ">
        <a href="https://www.instagram.com/techwithcole/">
          <FaInstagram />
        </a>
      </button>
      <button type="button" class="btn ">
        <a href="https://twitter.com/Elocremarc">
          <FaTwitter />
        </a>
      </button>
    </div>
  );
}

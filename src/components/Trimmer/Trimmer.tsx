import React from "react";
import "./trimmer.css";
import { useState } from "react";
import axios from "axios";
import ResultModal from "./ResultModal";
import { MdKeyboardArrowDown } from 'react-icons/md'

const Trimmer: React.FC = () => {
  const [shortLink, setShortLink] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [alias, setAlias] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(alias)

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputLink}`
      );
      setShortLink(res.data.result.full_short_link);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="trimmer">
      <section>
        <div className="trimmer_and_result">
          <form action="">
            <input
              type="text"
              placeholder="Paste URL here..."
              onChange={(e) => {
                setInputLink(e.target.value);
              }}
            />
            <div className="customize">
              <div className="customize-dropdown">Customize domain <MdKeyboardArrowDown className="down-icon"/> </div>
              <input
                type="text"
                placeholder="Type Alias here"
                onChange={(e) => {
                  setAlias(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                fetchData();
                openModal();
              }}
            >
              Trim URL
            </button>
            {/* <button onClick={openModal}>Open Modal</button> */}
          </form>
          <ResultModal
            isLoading={isLoading}
            shortLink={shortLink}
            isOpen={isOpen}
            closeModal={closeModal}
          />
        </div>
        <p>
          By clicking TrimURL, I agree to the{" "}
          <a href="">Terms of Service, Privacy Policy</a> and Use of Cookies.
        </p>
      </section>
    </div>
  );
};

export default Trimmer;

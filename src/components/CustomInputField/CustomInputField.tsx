/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import "./CustomInputField.css";
import data from "../../../data.json";

const CustomInputField = (props: {
  setPinnedMsg: (arg0: string) => void;
  setShowPinned: (arg0: boolean) => void;
}) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [filteredSearch, setFilteredSearch] = useState("");

  const ref = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // console.log(search);
    if (toggle) {
      const v = search.toLowerCase().split("@");
      setFilteredSearch(v[v.length - 1]);
    }
  }, [search, toggle]);

  interface dataProps {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "@") {
      setSearch(search + " ");
      setToggle(true);
    } else if (e.key === "Enter") {
      props.setPinnedMsg(search);
      props.setShowPinned(true);
      setSearch("");
    }
  };

  const handleClick = (id: number) => {
    if (ref.current[id] != undefined) {
      setSearch(
        search.substring(0, search.lastIndexOf("@") + 1) +
          ref.current[id]?.textContent +
          " "
      );
    }
    setToggle(false);
    setFilteredSearch("");
  };

  const FilteredSearch = ({ id, first_name, last_name }: dataProps) => {
    return (
      <div
        className="show-dropdown"
        key={id}
        ref={(e) => (ref.current[id] = e)}
        onClick={() => handleClick(id)}
      >
        {`${first_name} ${last_name}`}
      </div>
    );
  };

  return (
    <div className="input-element">
      <div className="input-bar">
        <input
          ref={(inp) => {
            inp?.focus();
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        {/* <span className="input-field-span">Ctrl + /</span> */}
      </div>
      <div className="filter-data-container">
        {toggle &&
          data
            .filter((v) => {
              return v.first_name.toLowerCase().startsWith(filteredSearch);
            })
            .map((value, idx) => {
              return <FilteredSearch {...value} key={idx} />;
            })}
      </div>
    </div>
  );
};
export default CustomInputField;

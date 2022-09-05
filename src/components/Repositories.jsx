import { useRef } from "react";
import Card from "./Card";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";

const Repositories = ({ ResponseAPI }) => {
  const container = useRef(null);
  const [search, setSearch] = useState("");

  const handleLeftButton = (e) => {
    e.preventDefault();
    container.current.scrollLeft -= container.current.offsetWidth - 10;
  };
  const handleRightButton = (e) => {
    e.preventDefault();
    container.current.scrollLeft += container.current.offsetWidth - 10;
  };

  const filteredInput = search.length > 0 ? ResponseAPI.filter((ResponseAPI) => ResponseAPI.name.includes(search)) : ResponseAPI;


  return (
    <div className="container" ref={container}>
      <div className="reposTitle">
        <label>Repositories</label>
      </div>

      <div className="searchRepos">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search repositories..."
        />
      </div>

      {filteredInput.length > 3 && (
        <button className="btnHandle left" onClick={handleLeftButton}>
          <GrPrevious className="icon-next" />
        </button>
      )}
      {filteredInput.map((item) => {
        const { name, description, id } = item;
        return (
          <Card
            reposName={name}
            reposDesc={description}
            userName={item.owner.login}
            key={id}
          />
        );
      })}
      {filteredInput.length > 3 && (
        <button className="btnHandle right" onClick={handleRightButton}>
          <GrNext className="icon-next" />
        </button>
      )}
    </div>
  );
};

export default Repositories;

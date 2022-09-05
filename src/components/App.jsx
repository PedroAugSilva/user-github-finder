import "../styles/Global.css";
import { useState, useRef } from "react";
import { ImSearch } from "react-icons/im";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Repositories from "./Repositories";
import Error from "./ErrorAlert";
import UserInfo from "./UserInfo";
import api from "../services/api";

function App() {
  const [name, setName] = useState();
  const [nameRepos, setNameRepos] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [condition, setCondition] = useState(0);
  const [load, setLoad] = useState(0);
  const [hasError, setError] = useState(false);
  const info = useRef(null);
  const btn = useRef(null);
  
 
  
  const handleSearchButton = () => {
    
    setLoad(1);
    setCondition(0);
    setError(false);
    const verify = async () => {
      try {
        const responseUser = await api.get(name);
        const response = await api.get(`${name}/repos`);
        setUserInfo(responseUser.data);
        setNameRepos(response.data);
        setCondition(1);
        setLoad(0);
        setError(false);
        console.clear();
      } catch (error) {
          console.log({ error });
          setError(true);
          setLoad(0);
          setCondition(0);
      }
    };
    verify();
  };


  return (
    <main>
      <h1>Search accounts from Github </h1>
      <div className="searchArea">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setName(e.target.value)}
          className="searchInput"
        />
        <button className="btnSearch" onClick={handleSearchButton} ref={btn}>
          <ImSearch />
        </button>
      </div>
      {load === 1 && (
        <div className="load">
          <AiOutlineLoading3Quarters className="loadContent" />
        </div>
      )}

      {condition === 1 && (
        <section className="info" ref={info}>
          <UserInfo
            userProfileImg={userInfo.avatar_url}
            userName={userInfo.name}
            userLogin={userInfo.login}
            userFollowers={userInfo.followers}
            userFollowing={userInfo.following}
          />

          {(nameRepos.length > 0 && (
            <Repositories
              reposName={nameRepos.name}
              reposDesc={nameRepos.description}
              userName={nameRepos.login}
              ResponseAPI={nameRepos}
            >
              </Repositories>
          )) || <Error message="Account has no repositories" />}
        </section>
      )}
      {hasError && <Error  message="account not found" />}
    </main>
  );
}

export default App;

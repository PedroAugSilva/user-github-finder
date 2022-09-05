


const Card = ({ reposName, reposDesc, userName }) => {
    return (
        <a
              className="projectsRepos"
               href={"https://github.com/" + userName + "/" + reposName}
            >
              <h4>{reposName}</h4>
              <div className="descTitle">
                <label>Description</label>
              </div>
              <div className="desc-area">
                <div className="desc">
                  <p>{reposDesc}</p>
                </div>
              </div>
            </a>
    );    
}

export default Card; 
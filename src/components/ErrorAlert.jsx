const Error = ({ message }) => {
  return (
    <div className="error notRepos">
      <span className="errorMessage">{message}</span>
    </div>
  );
};

export default Error;

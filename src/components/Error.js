import {useRouteError} from "react-router"
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops Something Went's Wrong</h1>
      <h2>{err.status} - {err.statusText}</h2>
      <p>{err.data}</p>
      <p>{err.message}</p>
    </div>
  );
};

export default Error;
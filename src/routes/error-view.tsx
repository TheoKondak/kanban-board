import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>
        Oops! <br /> 404 Page Not Found!
      </h1>
      <p>You probably shouldn't be here :)'</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

// import { useRouteError } from "react-router-dom";
// type IError = {
//   statusText: number
//   message: string
// }
export default function Error404() {
  // const error: IError = useRouteError() as IError;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/* <p>
        <i>{error?.statusText || error?.message}</i>
      </p> */}
    </div>
  );
}

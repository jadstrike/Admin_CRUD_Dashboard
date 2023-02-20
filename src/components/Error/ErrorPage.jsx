import { useRouteError } from "react-router-dom";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={`/`}>
          <Button style={{ backgroundColor: "#003A8C" }} type="primary">
            Back Home
          </Button>
        </Link>
      }
    />
  );
};

export default ErrorPage;

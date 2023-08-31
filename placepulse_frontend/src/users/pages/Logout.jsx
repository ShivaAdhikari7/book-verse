import Card from "../../shared/components/UI/Card";
import Button from "../../shared/components/FormElements/Button";

const Logout = () => {
  return (
    <>
      <div className="center logout">
        <Card>
          <h2>You are logged out.</h2>
          <Button inverse to="/">
            Go to home Page
          </Button>
        </Card>
      </div>
    </>
  );
};
export default Logout;

import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h2>About</h2>
      <button onClick={() => navigate(-1)}>Get back</button>
    </>
  );
};
export default About;

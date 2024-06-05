const Login = ({ setLoginUser }) => {
  const onFinish = (values) => {
    setLoginUser(values);
  };

  return (
    <>
      <h1>Login</h1>
      <div>
        <form>
          name: "normal_login" intialValues={{ render: true }}
          onFinish={onFinish}
        </form>
      </div>
    </>
  );
};
export default Login;

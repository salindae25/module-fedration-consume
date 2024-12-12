import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
localStorage.setItem("composeBaseUrl", "http://127.0.0.1:3000");
const FormBuilder = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [tokenData, setTokenData] = useState({});
  const formId = params?.id;
  const token = params?.token;
  useEffect(() => {
    if (token) {
      setTokenData({
        access_token: token,
      });
    }
  }, [token]);
  const tokenGenerate = async () => {
    console.log("token expired");
    await sleep(200);
    console.log("token set");
  };

  return (
    <>
      <Suspense fallback={<>loading..</>}>
        <ComposeFormBuilder
          tokenData={tokenData}
          formId={formId}
          onTokenExpiry={tokenGenerate}
          onGoBack={() => {
            navigate("/");
          }}
          baseUrl={"http://127.0.0.1:3000"}
        />
      </Suspense>
    </>
  );
};
export default FormBuilder;

// generate sleep async function
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

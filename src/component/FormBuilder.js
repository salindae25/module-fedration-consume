import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiI3YTNjMDY5MS02MzljLTQyNDQtYTUyMi1kZjE2Mzg3ZWRjMmUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDk0ZWYwOC1hY2U0LTQ5YjctYWQ5YS02YTE4NTA1N2Q0OWEiLCJjb25zZW50ZWRfZGF0ZV90aW1lIjoxNjkzNTY4NTE2MjE3LCJpc3MiOiJodHRwczpcL1wvY3gtcWEtYXV0aC1zZXJ2ZXIudXNlY29tcG9zZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJTdXBlciBBZG1pbiIsIkFVVEhfRkxPVyI6ImF1dGhvcml6YXRpb25fY29kZSIsImF1ZCI6ImNvbXBvc2UtY2xpZW50IiwibmJmIjoxNjk0MDY4ODUxLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIl0sIm5hbWUiOiJTdXBlciBBZG1pbiBVc2VyIiwiZXhwIjoxNjk0MTEyMDUxLCJpYXQiOjE2OTQwNjg4NTEsImZhbWlseV9uYW1lIjoiVXNlciIsImVtYWlsIjoiYWRtaW5AdXNlY29tcG9zZS5jb20iLCJjb25zZW50ZWQiOnRydWV9.WxSgI312IDKW39VdR4Ux7j0gvU_9ddMl6fQmicdmtNU3SsMxP5KFig1W5YGMj7myl5da3sBa9pkBT5XWgEAzLcM1YcFrqUu-_z0w3daCmheot5_YW4X4JfkiIafFvePoWnwsH3K6Y8kaa6pWw1SAFfBaxJ-LHoo_zffN1MpN40hlHDjrdY-sguYo-KGV3DeYQvMM5n9ySijqekPQE3hgnl4X9JxTjc8kmIaQEwBlm9fmiREvw94dV4IuZdmc5OggkAatoYaLLluxDng9vCNeXAy9f-iHj1bpuzIyb3rm-puJ7tPCVcaQtZsHpQ9ZL6eSYk0PKUnvzafM0v1hz0-g0Q",
};

const secondToken = {
  access_token:
    "eyJraWQiOiI5NmQ2MzU2Ny1hNTc3LTQxMGQtYWQ0Ny03MDQxOGNkMmQwZDkiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlNTAwNTE5OS0yNTI0LTQ4ZTItYTlmZS01MWI4MzBmNGJjNGYiLCJjb25zZW50ZWRfZGF0ZV90aW1lIjoxNjg5NjUzMTAyMzI1LCJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg5OSIsInByZWZlcnJlZF91c2VybmFtZSI6Im1pcm9iNjE2MzZAbXV6aXRwLmNvbSIsImdpdmVuX25hbWUiOiJNQksiLCJBVVRIX0ZMT1ciOiJhdXRob3JpemF0aW9uX2NvZGUiLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsIm5iZiI6MTY4OTY2Nzk4NSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJuYW1lIjoiTUJLIE1pcm9iZSIsImV4cCI6MTY4OTcwMzk4NSwiaWF0IjoxNjg5NjY3OTg1LCJmYW1pbHlfbmFtZSI6Ik1pcm9iZSIsImVtYWlsIjoibWlyb2I2MTYzNkBtdXppdHAuY29tIiwiY29uc2VudGVkIjp0cnVlfQ.iyn3QmHGlyLKXn3Am_mthIi3AFPl3opOoy2SLnJi_FJxwIsschd2DPWfKwijf_JwCOOASEOD3rp19Hh9Pe_3q1-rCdtvHcEy0DD1faMndthBNqA3EqnET3-qaVCoTmiG-giMcWMIzySpNa5I6GAaYDINqP3P0BhH4wkBdc6OotK5dyM9uVloXzxWKJPTKG8Se_wh2fQCR1lvKyfK1sF2czXdpoH_qs_V-FIpV7gt2gV8prHMLGtxXeKxS_iN4KTHVWLiZoC5gKoBK8XxL2SrQzUdaZTEXFjPSnRU4Rs_ZTuBEfv6WYHx732Z1-khvjFk-Wb8ZMNeVilaDwuVlZmIdQ",
};
const FormBuilder = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [tokenData, setTokenData] = useState(data);
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
    setTokenData(secondToken);
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

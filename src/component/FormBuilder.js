import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiJlMjA5MTNiZC05ZThiLTQxZjItODYxMC0wZjFmZDk1ZGE4YWIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDk0ZWYwOC1hY2U0LTQ5YjctYWQ5YS02YTE4NTA1N2Q0OWEiLCJpc3MiOiJodHRwczpcL1wvY3gtcWEtYXV0aC1zZXJ2ZXIudXNlY29tcG9zZS5jb20iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJhZG1pbiIsImdpdmVuX25hbWUiOiJOZXdTdXBlckFkbWluIiwiQVVUSF9GTE9XIjoiYXV0aG9yaXphdGlvbl9jb2RlIiwiYXVkIjoiY29tcG9zZS1jbGllbnQiLCJuYmYiOjE2ODY4ODczOTAsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiXSwibmFtZSI6Ik5ld1N1cGVyQWRtaW4gMiIsImV4cCI6MTY4NjkzMDU5MCwiaWF0IjoxNjg2ODg3MzkwLCJmYW1pbHlfbmFtZSI6IjIiLCJlbWFpbCI6ImFkbWluQHVzZWNvbXBvc2UuY29tIn0.rT0Q90DfB2-t4JD8A5BVj9c8MJEjwJ1lp8Uce3iH3kdTkFTiCdYs0mCBhK0sOmwAt1FpMHVQRym5w_KtcxOlEHaCqgpmC3rOcoZmBVFNnXDSZDhHlnQ_yjQfCjbe3jO4ihcFGQKOJbgteV7WdS6YlIRnqddtYGfQ_UDefQ0TYoiqet8FgZMkREA-unVlMJMI6GkMIsX12kdMDBbhMvVT7CQWefB6OyQcjZqwj3_8kAk9T8eVr2jtMIOr5QjfUh_AWVWJILpgjcBGgE37jglxkqsJLIFORFnXbY_2-xmo9pnC2FRZ2THiy6i5l0oZCorNdTKQscNmoyUQKBFiHy_Eng",
};

const secondToken = {
  access_token:
    "eyJraWQiOiI5NmQ2MzU2Ny1hNTc3LTQxMGQtYWQ0Ny03MDQxOGNkMmQwZDkiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJlNTAwNTE5OS0yNTI0LTQ4ZTItYTlmZS01MWI4MzBmNGJjNGYiLCJjb25zZW50ZWRfZGF0ZV90aW1lIjoxNjg5NjUzMTAyMzI1LCJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODg5OSIsInByZWZlcnJlZF91c2VybmFtZSI6Im1pcm9iNjE2MzZAbXV6aXRwLmNvbSIsImdpdmVuX25hbWUiOiJNQksiLCJBVVRIX0ZMT1ciOiJhdXRob3JpemF0aW9uX2NvZGUiLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsIm5iZiI6MTY4OTY2Nzk4NSwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJuYW1lIjoiTUJLIE1pcm9iZSIsImV4cCI6MTY4OTcwMzk4NSwiaWF0IjoxNjg5NjY3OTg1LCJmYW1pbHlfbmFtZSI6Ik1pcm9iZSIsImVtYWlsIjoibWlyb2I2MTYzNkBtdXppdHAuY29tIiwiY29uc2VudGVkIjp0cnVlfQ.iyn3QmHGlyLKXn3Am_mthIi3AFPl3opOoy2SLnJi_FJxwIsschd2DPWfKwijf_JwCOOASEOD3rp19Hh9Pe_3q1-rCdtvHcEy0DD1faMndthBNqA3EqnET3-qaVCoTmiG-giMcWMIzySpNa5I6GAaYDINqP3P0BhH4wkBdc6OotK5dyM9uVloXzxWKJPTKG8Se_wh2fQCR1lvKyfK1sF2czXdpoH_qs_V-FIpV7gt2gV8prHMLGtxXeKxS_iN4KTHVWLiZoC5gKoBK8XxL2SrQzUdaZTEXFjPSnRU4Rs_ZTuBEfv6WYHx732Z1-khvjFk-Wb8ZMNeVilaDwuVlZmIdQ",
};
const FormBuilder = () => {
  const params = useParams();
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
          returnUrl={"/home"}
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

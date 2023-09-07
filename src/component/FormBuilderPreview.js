import { lazy, Suspense, useState } from "react";
const ComposeFormBuilderPreview = lazy(() =>
  import("compose/FormBuilderPreview")
);
const data = {
  access_token:
    "eyJraWQiOiI5OTM2ZTk5OC1hY2Q4LTQ2OGYtOGY2NC05MThlYmFiNGE1NzciLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMDk0ZWYwOC1hY2U0LTQ5YjctYWQ5YS02YTE4NTA1N2Q0OWEiLCJjb25zZW50ZWRfZGF0ZV90aW1lIjoiIiwiaXNzIjoiaHR0cHM6XC9cL2N4LXFhLWF1dGgtc2VydmVyLnVzZWNvbXBvc2UuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiTmV3U3VwZXIiLCJBVVRIX0ZMT1ciOiJhdXRob3JpemF0aW9uX2NvZGUiLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsIm5iZiI6MTY5Mjg2MTQxMywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJuYW1lIjoiTmV3U3VwZXIgQWRtaW4gMy4xIiwiZXhwIjoxNjkyOTA0NjEzLCJpYXQiOjE2OTI4NjE0MTMsImZhbWlseV9uYW1lIjoiQWRtaW4gMy4xIiwiZW1haWwiOiJhZG1pbkB1c2Vjb21wb3NlLmNvbSIsImNvbnNlbnRlZCI6dHJ1ZX0.XB1PlDgmHbUFhIispz-xFnaGqgLLFHe6rsAy0PE6_QP5-DelKzO-hT0kt-Xs22-Syz2p-5WRClckcVVacBK9gIYhgrnkGbFxsAuiyFNQL5KYoHwBWil7ZSgWXUN_RawWDM5lmo3TXvOmZziiWUHJ_EUw5xG6CmmTER0_8xuQwBx7moQLP4SI6s2DDo6puTflYO2XHQi-5gPSSPIQLSMu8aA9I9dSIBYWj4kzpgPyjA1b4hAUXhayfVrjO0zTaVP4T9yH3rZBt5IBP6WrjXkFZNCOBaljJinAk9h-uOIkEE4Hig7N7d6y0_5toAkRjYY3sioz1UTsfuuPN4xspzlI6g",
};
export default function FormBuilderPreview() {
  const [tokenData, setTokenData] = useState(data);
  const tokenGenerate = async () => {
    console.log("token expired");
    await sleep(100);
    console.log("token set");
  };

  return (
    <>
      <Suspense fallback={<>loading..</>}>
        <ComposeFormBuilderPreview
          tokenData={tokenData}
          onTokenExpiry={tokenGenerate}
        />
      </Suspense>
    </>
  );
}
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

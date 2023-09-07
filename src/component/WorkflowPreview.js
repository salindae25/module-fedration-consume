import { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router";
const CGWorkflowPreview = lazy(() => import("compose/WorkflowPreview"));
const initialOtpResponse = {
  forms: [
    {
      formVersionId: "f02de450-11ba-4426-8d73-c4be0327b98f",
      excludedSelectableQuestions: [],
      excludedSelectablePages: [],
    },
  ],
  iconUrl:
    "https://stmbkdatadev.blob.core.windows.net/survey-customization-logo/Survey_Default_Logo_BK.png",
  answerPercentage: 0,
  defaultLanguageCode: "nor",
  availableLanguages: [
    {
      code: "eng",
      description: "Engelsk",
    },
    {
      code: "nor",
      description: "Bokmål",
    },
  ],
  designTheme: "MBK_YELLOW",
  welcomeMessage: {
    eng: '{"blocks":[{"key":"1llii","text":"Welcome text EN","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    nor: '{"blocks":[{"key":"cl4g","text":"Welcome text NB","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  },
  privacyStatement: {
    active: true,
    title: null,
    policy: {
      eng: '{"blocks":[{"key":"de55d","text":"Sample Privacy Statement EN","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
      nor: '{"blocks":[{"key":"1rhlt","text":"Sample Privacy Statement NB","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    },
  },
  goodbyeMessage: {
    eng: '{"blocks":[{"key":"9bau4","text":"Thank you text EN","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    nor: '{"blocks":[{"key":"1q7eo","text":"Thank you text NB","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  },
  redirectUrl: "",
};
const addFormIdToOtpResponse = (id) => {
  let otpResponse = JSON.parse(JSON.stringify(initialOtpResponse));
  otpResponse.forms[0].formVersionId = id;

  return otpResponse;
};
const WorkflowPreview = () => {
  const params = useParams();
  const formId = params?.id;
  const [otpData, setOtpData] = useState({
    isLoading: true,
    otpResponse: null,
  });
  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (formId) {
        setOtpData({
          isLoading: false,
          otpResponse: addFormIdToOtpResponse(formId),
        });
        console.log({ formId });
      }
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [formId]);
  return (
    <Suspense fallback={<>loading..</>}>
      <CGWorkflowPreview
        otpResponse={otpData.otpResponse}
        isLoading={otpData.isLoading}
      />
    </Suspense>
  );
};
export default WorkflowPreview;

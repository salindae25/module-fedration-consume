import { lazy, Suspense, useState } from "react";
import { useParams } from "react-router-dom";
const ComposeFormBuilderPreview = lazy(
  () => import("compose/FormBuilderPreview"),
);
export default function FormBuilderPreview() {
  const params = useParams();
  const token = params?.token;
  const tokenGenerate = async () => {
    console.log("token expired");
    await sleep(100);
    console.log("token set");
  };

  return (
    <>
      <Suspense fallback={<>loading..</>}>
        <ComposeFormBuilderPreview
          tokenData={token}
          onTokenExpiry={tokenGenerate}
        />
      </Suspense>
    </>
  );
}
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

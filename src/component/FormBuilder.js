import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiJkNzc3ODc1YS1kMzNhLTQ5ZDMtYmZkOC01MDZiMWY3NzI1MTUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkMGMxY2E5Ny0wMGI0LTRiY2ItODkzZi1iMTkzYzU1MzE3OGIiLCJpc3MiOiJodHRwczpcL1wvY3gtZGV2LWF1dGgtc2VydmVyLnVzZWNvbXBvc2UuY29tIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiQWRtaW4iLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsIm5iZiI6MTY2ODQ4NTc2Mywic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJuYW1lIjoiQWRtaW4gQWRtaW4iLCJleHAiOjE2Njg1Mjg5NjMsImlhdCI6MTY2ODQ4NTc2MywiZmFtaWx5X25hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AdXNlY29tcG9zZS5jb20ifQ.bClYsyQa5HuoNKPONsL5z5ZiYHjgSPNrv5j_EdUuuT2WeatdJKwHm5gmkfTx1iaPGnmPhCwDT6zB_1zsdSX5eJZsestOXxWGpRiiCsB7t0mj45wPUjjbk0GyuulbGvLSLJGepzgO6W58xaZuC0K1Bm5dafbbFvzTSmdBjhgF3G0K2-QVGZ2l5yzDGxyCTgbt-FzagOn0f_EPqURQwuVSJQ6OOmvzmoOxtRDp1iLlQktYEODfBS7uxS2BNx5tCD9OGZFwjn0QKLuUPti5yAj7kTwSOSF8-UucHOjxFp0Ik15N_vp0EE8QlhdZHlTKtBrf_nKOUcbbDndThIl1R3EOaA",

  expires_in: 43199,
  id_token:
    "eyJraWQiOiJkNzc3ODc1YS1kMzNhLTQ5ZDMtYmZkOC01MDZiMWY3NzI1MTUiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJkMGMxY2E5Ny0wMGI0LTRiY2ItODkzZi1iMTkzYzU1MzE3OGIiLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsImF6cCI6ImNvbXBvc2UtY2xpZW50IiwiaXNzIjoiaHR0cHM6XC9cL2N4LWRldi1hdXRoLXNlcnZlci51c2Vjb21wb3NlLmNvbSIsIm5hbWUiOiJBZG1pbiBBZG1pbiIsInByZWZlcnJlZF91c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNjY4MDU4NTA4LCJnaXZlbl9uYW1lIjoiQWRtaW4iLCJpYXQiOjE2NjgwNTY3MDgsImZhbWlseV9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQHVzZWNvbXBvc2UuY29tIn0.Abrk8nKSFR_FxS-7be2wwFxCh_9BbUC3FQf7A_GdjEzrbGWi_aOet6BrxNdZchd1zNdI2vyLN0E_tPY2M6mrUbCy5NhMkCuq_0JolDTxeKM5Xe5rhqcHA7RE2YsKB6ajwMRhOab2tR4Mq0CN2xgYLNrENjwstcwQt2bu123j-j5UgnvKdjfB3D0-U8rq_sXqneuRh1F1HzRX-LPVZNWArb0R02orPw-WBxfUMiG_zRP2yoDAP7CXG8Xgu6hRZLf0ZqGFG--hEEt-Pmj6qdEioaSJnr122pn7YbSE7YYD2PczFxGBYbX_a2lP2CsHZCV_KMeg1ngcVZ76LGeyH5Fwog",
  refresh_toke:
    "3hmrJ0b4h6JJXrhKnaKd6fq53GoDoTkeclnzAo3Ux3l4pbHCQKiDpNaTVt0J-qhyJUERjA1U129lQqXOCWM3VBAVd2Dtnu0E8WhQHOmSRuXk8mIsqWj57Alv7r3lqBHU",
  scope: "openid profile",
  token_type: "Bearer",
};
const FormBuilder = () => {
  const params = useParams();
  console.log(params);

  const formId = params?.id;
  return (
    <>
      <Suspense fallback={<>loading..</>}>
        <ComposeFormBuilder
          tokenData={data}
          formId={formId}
          returnUrl={"/home"}
        />
      </Suspense>
    </>
  );
};

export default FormBuilder;

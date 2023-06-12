import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
const ComposeFormBuilder = lazy(() => import("compose/FormBuilder"));
const data = {
  access_token:
    "eyJraWQiOiJlMjA5MTNiZC05ZThiLTQxZjItODYxMC0wZjFmZDk1ZGE4YWIiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJmNWJiMjZiOS1mZjlkLTQ5ODgtODQyYy1jYWExZTUyOTRkZGMiLCJhdWQiOiJjb21wb3NlLWNsaWVudCIsIm5iZiI6MTY4NjU0MjE4OCwic2NvcGUiOlsib3BlbmlkIiwicHJvZmlsZSIsIm1lc3NhZ2UucmVhZCIsImVtYWlsIiwibWVzc2FnZS53cml0ZSJdLCJpc3MiOiJodHRwczpcL1wvY3gtcWEtYXV0aC1zZXJ2ZXIudXNlY29tcG9zZS5jb20iLCJleHAiOjE2ODY1ODUzODgsImlhdCI6MTY4NjU0MjE4OCwiQVVUSF9GTE9XIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwiQURESVRJT05BTF9QUk9QRVJUSUVTIjp7Im1iay11c2VyLWlkIjoiYmExMzE0M2EtMjNiZS00MmY2LTgzZjYtMGZiNjdkZTNiOGUxIiwiZm9ybS1pZCI6IjhlMjFiYWVjLThjNDktNDI1Ni1iNDgwLTM1ZTlhNmNiODVlNSIsImNvbXBvc2UtdXNlci1pZCI6ImY1YmIyNmI5LWZmOWQtNDk4OC04NDJjLWNhYTFlNTI5NGRkYyJ9fQ.MO1IVM3ee60XNHaowStneLSlTxtWzjWrlgXT8jyzN0R_JIUQJN5_6CXMscf1TnYf0kXpN5W2LmCFr9l4iz_ZjMsXomwTHJ2QyJkhW5TzJzwZLJE6UorkN5h0_bW0EBDjBjfsXi8m9LJUHbz5-y8HYHS-FMrj8U-j3dv_lZR_vKEM3G1caB1b01agJ2z8c7S6FDdkOGJzyMzuoM9Z9ushHkUf3wlBtb5tDPQqW8D4BvrDluYb0jSL_3r5Vm9sxqOgEwIeY4GTdDby0DidOiSvj_gTOecxfqUL-tuynVk60tRR5vBB_jCVwWnv9DjPxCXxAyomEtcSYeS9oRasHSlCeA",

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

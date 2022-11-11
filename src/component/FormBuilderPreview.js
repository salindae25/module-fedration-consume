
import { lazy, Suspense } from 'react';
const ComposeFormBuilderPreview = lazy(() => import('compose/FormBuilderPreview'))
export default function FormBuilderPreview() {

  return <>
    <Suspense fallback={<>loading..</>}>
      <ComposeFormBuilderPreview />
    </Suspense>
  </>
}

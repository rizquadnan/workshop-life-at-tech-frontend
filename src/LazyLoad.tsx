import { ReactNode, Suspense } from "react";

const LazyLoad = ({
  children,
  fallback,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) => {
  return (
    <Suspense fallback={fallback ?? <h1>Loading...</h1>}>{children}</Suspense>
  );
};

export default LazyLoad;

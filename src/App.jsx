import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import PageTransition from "./components/animations/PageTransition";
import RootLayout from "./layouts/RootLayout";
import { appRoutes } from "./routes/routes";

function LoadingScreen() {
  return (
    <div className="grid min-h-[70svh] place-items-center bg-av-cream px-6 text-center">
      <div>
        <span className="mx-auto mb-5 block h-3 w-24 rounded-full bg-gradient-to-r from-av-orange to-av-moss" />
        <p className="kicker">Loading Experience</p>
      </div>
    </div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <RootLayout>
      <Suspense fallback={<LoadingScreen />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {appRoutes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <PageTransition>
                    <Component />
                  </PageTransition>
                }
              />
            ))}
            <Route path="/event" element={<Navigate to="/events" replace />} />
            <Route path="/become-a-volunteer" element={<Navigate to="/become-volunteer" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </RootLayout>
  );
}

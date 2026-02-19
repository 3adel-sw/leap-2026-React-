import { Route, Switch } from "wouter";
import { lazy, Suspense } from "react";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Service = lazy(() => import("./pages/Services"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const ContactPage = lazy(() => import("./pages/Contact"));
const Jobs = lazy(() => import("./pages/Jobs"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/services"} component={Service} />
        <Route path={"/services/:id"} component={ServiceDetails} />
        <Route path={"/contact-us"} component={ContactPage} />
        <Route path={"/jobs"} component={Jobs} />
        <Route path={"/privacy-policy"} component={Privacy} />
        {/* <Route path={"/terms-conditions"} component={Service} /> */}
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return <Router />;
}

export default App;

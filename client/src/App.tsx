import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { AnimatePresence } from "framer-motion";
import PeopleTransformation from "@/pages/services/transformation";
import PeopleStrategy from "@/pages/services/strategy";
import PeopleDevelopment from "@/pages/services/development";
import AIIntegration from "@/pages/services/ai-integration";
import CapabilityStrategy from "@/pages/services/capability";

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/transformation" component={PeopleTransformation} />
        <Route path="/services/strategy" component={PeopleStrategy} />
        <Route path="/services/development" component={PeopleDevelopment} />
        <Route path="/services/ai-integration" component={AIIntegration} />
        <Route path="/services/capability" component={CapabilityStrategy} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
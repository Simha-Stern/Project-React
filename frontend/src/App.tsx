import Router from "./Router.tsx";
import "./Styles.css";
import { ContextProvider } from "./components/context.tsx";

function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}

export default App;

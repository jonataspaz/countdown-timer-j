import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import CountdownTimer from "./routes/Components/CountdownTimer/CountdownTimer";


const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />}>
        <Route path="countdowntimer" element={<CountdownTimer countdownTimestampMS={1661860800000} title="BootCamp"/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
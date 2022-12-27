import ReactDOM from "react-dom/client";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import SkeletonLoading from "./component/loading/skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

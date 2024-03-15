import { AppContextProvider } from "./context/App.jsx";
import { Home } from "./page";
import "./styles/main.scss";

export default function App() {
    return (
        <AppContextProvider>
            <Home />
        </AppContextProvider>
    );
}

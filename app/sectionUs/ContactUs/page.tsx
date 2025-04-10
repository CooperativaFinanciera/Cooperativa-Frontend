import { HeaderPage } from "./components/HeaderPage";
import { MainPage } from "./components/MainPage";

const Page = () => {
    return(
        <div className="mt-16 mb-6"> {/* Contenedor Principal */}
            <HeaderPage />
            <MainPage />
        </div>
    );
}

export default Page;
import Navbar from "../components/Navbar";
import CitiesGrid from "./components/CitiesGrid";
import FooterBox from "../components/Footer"

function List() {
    return (
        <div>
            <Navbar active="2"/>
            <CitiesGrid/>
            <FooterBox/>
        </div>
    );
}

export default List;
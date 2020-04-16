import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import DGraph from "../../components/d-graph";
import DTrial from "../../components/d-trial";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <DTrial data={[132, 284, 293, 832, 253, 348, 328, 935, 271, 233]} />
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;

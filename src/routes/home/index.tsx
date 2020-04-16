import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import DGraph from "../../components/d-graph";
import DTrial from "../../components/d-trial";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <DGraph />
            <DTrial data={[1, 2, 3]} />
            <h1>Home</h1>
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;

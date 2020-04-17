import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import DTrial, { Graph } from "../../components/d-trial";
import data from "./graph.json";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <DTrial data={data as Graph} />
            <p>This is the Home component.</p>
        </div>
    );
};

export default Home;

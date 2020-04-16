import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";
import { useRef, useEffect } from "preact/hooks";
import * as d3 from "d3";

const DGraph: FunctionalComponent = () => {
    return (
        <h1 class={style.bebong}>DGraph</h1>
        // <header class={style.header}>
        //     <h1>Preact App</h1>
        //     <nav>
        //         <Link activeClassName={style.active} href="/">
        //             Home
        //         </Link>
        //     </nav>
        // </header>
    );
};

export default DGraph;

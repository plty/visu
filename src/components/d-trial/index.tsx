import { FunctionalComponent, h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import * as style from "./style.css";
import * as d3 from "d3";
import { constructGraph } from "./friend";

interface Props {
    data: Graph;
}

export type Graph = {
    nodes: [Node];
    links: [Link];
};

export type Node = {
    id: string;
    group: string;
    radius: number;
    citing_patents_count: 2;
};

export type Link = {
    source: string;
    target: string;
    value: number;
};

const DTrial: FunctionalComponent<Props> = ({ data }: Props) => {
    const container = useRef(null);

    useEffect(() => {
        const svg = d3.select(container.current);
        const { nodes, links } = data;
        constructGraph(svg, nodes, links);
    }, [data, container.current]);

    const side = 512;
    const viewBox = [-side / 2, -side / 2, side, side]
        .map(v => v.toString())
        .join(" ");
    return <svg class={style.container} ref={container} viewBox={viewBox} />;
};

export default DTrial;

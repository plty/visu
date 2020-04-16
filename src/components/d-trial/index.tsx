import { FunctionalComponent, h } from "preact";
import { useRef, useEffect } from "preact/hooks";
import * as style from "./style.css";
import * as d3 from "d3";

interface Props {
    data: number[];
}

const DTrial: FunctionalComponent<Props> = ({ data }: Props) => {
    const container = useRef(null);

    useEffect(() => {
        const controller = d3
            .select(container.current)
            .append("g")
            .selectAll("text")
            .data(data);

        // Enter new D3 elements
        controller
            .enter()
            .append("text")
            .attr("x", (v, i) => i * 60)
            .attr("y", 20)
            .style("font-size", 24)
            .text((v: number) => v);

        // Update existing D3 elements
        controller.attr("x", (d, i) => i * 40).text((d: number) => d);

        // Remove old D3 elements
        controller.exit().remove();
    }, [data, container.current]);

    return <svg class={style.container} ref={container} />;
};

export default DTrial;

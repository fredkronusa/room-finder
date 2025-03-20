import { graphData } from "@/store/graphData";
import { NavigationContextType } from "@/utils/types";

interface PositionsProps {
  positionRadius: number;
  className: string;
  navigation?: NavigationContextType["navigation"];
}
const Positions = ({
  positionRadius,
  className,
  navigation,
}: PositionsProps) => {
  const positionBackgroundColor = "#4285f4";
  const positionBackgroundRadius = positionRadius + 17;
  const positionBackgroundOpacity = 0.5;
  const startVertex = graphData.vertices.find(
    (v) => v.id === navigation?.start
  );

  function isActivePosition(vertexId: string) {
    return navigation?.start === vertexId;
  }
  return (
    <g id="Vertexes">
      {/* Background circle for Google Maps like look */}
      <circle
        id="background-circle"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill={positionBackgroundColor}
        opacity={positionBackgroundOpacity}
        r={positionBackgroundRadius}
      />
      {graphData.vertices.map((vertex) => (
        <circle
          // only allow click on positions that are not referring to an object
          key={vertex.id}
          id={vertex.id}
          // show only positions that are not referring to an object (e.g. shops, restrooms, etc.)
          className={`position ${vertex.objectName ? "opacity-0" : className} ${isActivePosition(vertex.id) && "position-active opacity-100"}`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}
      {/* Circle animation */}
      <circle
        id="circle-animation"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill="none"
        stroke="white"
        strokeWidth={2}
        r={positionRadius}
      >
        <animate
          attributeName="stroke-width"
          values="1;3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default Positions;

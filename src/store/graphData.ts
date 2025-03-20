export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: "v1", objectName: 'Elevators', cx: 1400, cy: 1060 },
    { id: "v2", objectName: null, cx: 1400, cy: 800 },
    { id: "v3", objectName: null, cx: 1850, cy: 800 },
    { id: "v4", objectName: null, cx: 2150, cy: 800 },
    { id: "v5", objectName: 'Toilet', cx: 2150, cy: 900 },
    { id: "v6", objectName: null, cx: 2300, cy: 800 },
    { id: "v7", objectName: null, cx: 2300, cy: 650 },
    { id: "v8", objectName: 'Kembla | Grange', cx: 2370, cy: 650 },
    { id: "v9", objectName: null, cx: 2500, cy: 800 },
    { id: "v10", objectName: null, cx: 2500, cy: 980 },
    { id: "v11", objectName: 'Wagga Wagga', cx: 2580, cy: 980 },
    { id: "v12", objectName: null, cx: 2880, cy: 800 },
    { id: "v13", objectName: 'Randwick', cx: 2880, cy: 900 },
    { id: "v14", objectName: null, cx: 1400, cy: 1315 },
    { id: "v15", objectName: null, cx: 2500, cy: 1315 },
    { id: "v16", objectName: null, cx: 2500, cy: 1160 },
    { id: "v17", objectName: 'Orange', cx: 2580, cy: 1160 },
    { id: "v18", objectName: null, cx: 3250, cy: 1315 },
    { id: "v19", objectName: null, cx: 3250, cy: 1530 },
    { id: "v20", objectName: 'VIC-HUB-L3E-04', cx: 3550, cy: 1530 },
    { id: "v20", objectName: 'VIC-HUB-L3E-05', cx: 3550, cy: 1530 },
    { id: "v21", objectName: null, cx: 2580, cy: 1615 },
    { id: "v22", objectName: 'Forbes', cx: 2680, cy: 1590 },
    { id: "v23", objectName: null, cx: 3330, cy: 1315 },
    { id: "v24", objectName: null, cx: 3330, cy: 1045 },
    { id: "v25", objectName: 'Penrith', cx: 3250, cy: 1045 },
    { id: "v26", objectName: null, cx: 1400, cy: 650 },
    { id: "v27", objectName: null, cx: 660, cy: 500 },
    { id: "v28", objectName: null, cx: 580, cy: 620 },
    { id: "v29", objectName: 'Griffith', cx: 480, cy: 580 },
    { id: "v30", objectName: null, cx: 580, cy: 620 },
    { id: "v31", objectName: null, cx: 465, cy: 800 },
    { id: "v32", objectName: 'Alexandria', cx: 385, cy: 760 },
    { id: "v33", objectName: null, cx: 1400, cy: 1315 },
    { id: "v34", objectName: null, cx: 1080, cy: 1315 },
    { id: "v35", objectName: null, cx: 350, cy: 1035 },
    { id: "v36", objectName: 'VIC-HUB-L3E-01', cx: 180, cy: 1050 },
    { id: "v36", objectName: 'VIC-HUB-L3E-02', cx: 180, cy: 1050 },
    { id: "v37", objectName: 'VIC-HUB-L3E-03', cx: 660, cy: 200 },
  ],

  edges: [
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v2_to_v4", from: "v2", to: "v4" },
    { id: "v4_to_v5", from: "v4", to: "v5" },
    { id: "v2_to_v12", from: "v2", to: "v12" },
    { id: "v12_to_v13", from: "v12", to: "v13" },
    { id: "v4_to_v6", from: "v4", to: "v6" },
    { id: "v6_to_v7", from: "v6", to: "v7" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v1_to_v14", from: "v1", to: "v14" },
    { id: "v14_to_v15", from: "v14", to: "v15" },
    { id: "v15_to_v16", from: "v15", to: "v16" },
    { id: "v16_to_v17", from: "v16", to: "v17" },
    { id: "v14_to_v18", from: "v14", to: "v18" },
    { id: "v18_to_v19", from: "v18", to: "v19" },
    { id: "v19_to_v20", from: "v19", to: "v20" },
    { id: "v6_to_v9", from: "v6", to: "v9" },
    { id: "v9_to_v10", from: "v9", to: "v10" },
    { id: "v10_to_v11", from: "v10", to: "v11" },
    { id: "v15_to_v21", from: "v15", to: "v21" },
    { id: "v21_to_v22", from: "v21", to: "v22" },
    { id: "v18_to_v23", from: "v18", to: "v23" },
    { id: "v23_to_v24", from: "v23", to: "v24" },
    { id: "v24_to_v25", from: "v24", to: "v25" },
    { id: "v2_to_v26", from: "v2", to: "v26" },
    { id: "v26_to_v27", from: "v26", to: "v27" },
    { id: "v27_to_v28", from: "v27", to: "v28" },
    { id: "v28_to_v29", from: "v28", to: "v29" },
    { id: "v28_to_v30", from: "v28", to: "v30" },
    { id: "v30_to_v31", from: "v30", to: "v31" },
    { id: "v31_to_v32", from: "v31", to: "v32" },
    { id: "v14_to_v33", from: "v14", to: "v33" },
    { id: "v33_to_v34", from: "v33", to: "v34" },
    { id: "v34_to_v35", from: "v34", to: "v35" },
    { id: "v35_to_v36", from: "v35", to: "v36" },
    { id: "v27_to_v37", from: "v27", to: "v37" },

  ],
};

const canvas = document.querySelector("#meshCanvas");
const ctx = canvas?.getContext("2d");
const meshWidth = 760;
const meshHeight = 475;

// Conforming L mesh, built by merging adjacent perturbed triangles.
// Shared vertices include local jitter and a global sinusoidal deformation.
// Regions contain exclusively 3, 4, 5, 6 and 7 sided star-shaped cells.
// This is a method illustration, not a computed PDE solution or timing result.
const mesh = {"points":[[101.166,25.447],[128.156,24.17],[160.34,26.823],[196.959,37.449],[226.435,42.279],[251.4,37.289],[291.713,46.201],[110.796,49.853],[135.231,49.386],[177.847,60.642],[199.535,73.558],[229.295,63.387],[265.123,64.427],[299.143,67.359],[104.819,81.722],[138.357,96.862],[164.812,97.216],[206.973,92.841],[238.058,103.921],[273.047,107.044],[298.731,106.883],[111.186,118.07],[136.541,114.712],[176.486,131.465],[211.48,129.429],[241.658,130.383],[258.768,126.414],[292.899,132.52],[105.052,138.306],[134.946,147.733],[162.184,157.543],[205.53,156.676],[223.312,159.471],[266.357,163.043],[292.609,165.213],[98.888,179.379],[130.496,186.893],[167.194,184.828],[198.34,195.44],[219.439,201.738],[259.271,194.635],[287.519,203.955],[105.074,202.119],[124.915,209.397],[149.985,224.853],[182.603,223.546],[213.213,229.682],[246.127,232.306],[278.265,227.54],[98.415,234.462],[130.763,250.136],[149.983,252.287],[185.625,257.922],[220.014,255.367],[248.413,256.051],[277.711,263.489],[303.506,258.038],[339.14,257.635],[374.743,249.977],[399.603,246.136],[425.903,238.954],[461.843,231.831],[497.958,234.991],[525.763,228.307],[557.947,239.509],[585.93,225.645],[615.056,234.271],[653.605,238.817],[89.766,270.073],[119.41,270.93],[147.674,285.506],[189.892,279.673],[214.783,292.071],[252.853,290.18],[267.354,284.698],[309.509,285.546],[334.804,290.639],[363.485,273.646],[407.569,266.865],[422.823,265.471],[455.751,276.16],[496.661,262.256],[515.817,266.001],[547.245,262.629],[590.088,269.713],[613.486,264.19],[641.95,276.74],[88.373,301.638],[123.375,302.792],[159.366,313.019],[181.008,310.567],[217.854,312.286],[249.767,328.348],[274.665,324.856],[308.164,323.29],[336.835,318.446],[369.479,313.033],[393.995,310.323],[431.291,296.063],[452.987,293.382],[486.773,288.557],[528.486,291.383],[549.673,287.076],[589.813,289.606],[613.28,305.291],[652.319,302.367],[91.152,328.908],[114.732,330.186],[152.108,346.198],[194.256,345.697],[224.395,351.064],[247.958,351.122],[277.015,351.113],[315.767,355.727],[343.633,340.577],[376.116,346.978],[401.53,338.275],[425.906,331.961],[456.864,329.08],[494.901,329.269],[533.396,319.731],[552.077,321.201],[594.026,326.429],[620.274,322.71],[646.018,335.403],[90.877,369.925],[128.72,367.861],[159.009,378.484],[190.937,370.81],[229.031,372.176],[254.133,375.264],[287.45,378.27],[318.213,387.822],[354.414,385.702],[377.349,369.836],[403.639,376.233],[441.527,362.935],[477.036,361.812],[505.915,350.949],[532.158,363.344],[564.863,349.282],[599.49,358.118],[627.183,356.495],[652.774,358.052],[106.53,395.126],[133.133,394.145],[165.046,410.644],[187.981,398.646],[224.099,408.662],[255.481,405.025],[286.268,409.468],[316.083,411.923],[361.464,416.41],[386.152,406.498],[422.606,407.437],[449.608,397.815],[483.11,392.728],[512.127,396.312],[542.788,382.897],[563.1,394.56],[595.327,382.535],[631.904,391.763],[655.68,397.234]],"cells":[{"vertices":[0,1,7],"region":0},{"vertices":[5,6,13],"region":0},{"vertices":[4,5,11],"region":0},{"vertices":[3,4,11],"region":0},{"vertices":[1,8,7],"region":0},{"vertices":[19,27,26],"region":0},{"vertices":[19,20,27],"region":0},{"vertices":[19,26,25],"region":0},{"vertices":[13,20,19],"region":0},{"vertices":[7,8,15],"region":0},{"vertices":[7,15,14],"region":0},{"vertices":[14,15,21],"region":0},{"vertices":[15,22,21],"region":0},{"vertices":[15,23,22],"region":0},{"vertices":[1,2,9],"region":0},{"vertices":[2,3,9],"region":0},{"vertices":[1,9,8],"region":0},{"vertices":[8,9,15],"region":0},{"vertices":[9,16,15],"region":0},{"vertices":[15,16,23],"region":0},{"vertices":[9,17,16],"region":0},{"vertices":[16,17,23],"region":0},{"vertices":[17,24,23],"region":0},{"vertices":[17,25,24],"region":0},{"vertices":[3,10,9],"region":0},{"vertices":[3,11,10],"region":0},{"vertices":[9,10,17],"region":0},{"vertices":[10,11,17],"region":0},{"vertices":[11,18,17],"region":0},{"vertices":[17,18,25],"region":0},{"vertices":[18,19,25],"region":0},{"vertices":[11,19,18],"region":0},{"vertices":[5,12,11],"region":0},{"vertices":[11,12,19],"region":0},{"vertices":[5,13,12],"region":0},{"vertices":[12,13,19],"region":0},{"vertices":[25,32,31,24],"region":1},{"vertices":[30,23,24,31],"region":1},{"vertices":[54,47,48,55],"region":1},{"vertices":[41,48,47,40],"region":1},{"vertices":[46,47,54,53],"region":1},{"vertices":[43,44,51,50],"region":1},{"vertices":[49,42,43,50],"region":1},{"vertices":[35,36,43,42],"region":1},{"vertices":[25,26,33,32],"region":1},{"vertices":[34,33,26,27],"region":1},{"vertices":[33,34,41,40],"region":1},{"vertices":[33,40,39,32],"region":1},{"vertices":[39,40,47,46],"region":1},{"vertices":[31,32,39,38],"region":1},{"vertices":[46,45,38,39],"region":1},{"vertices":[46,53,52,45],"region":1},{"vertices":[45,52,51,44],"region":1},{"vertices":[36,35,28,29],"region":1},{"vertices":[29,28,21,22],"region":1},{"vertices":[22,23,30,29],"region":1},{"vertices":[30,37,36,29],"region":1},{"vertices":[37,30,31,38],"region":1},{"vertices":[43,36,37,44],"region":1},{"vertices":[38,45,44,37],"region":1},{"vertices":[149,129,130,131,150],"region":2},{"vertices":[125,126,127,145,144],"region":2},{"vertices":[146,145,127,128,147],"region":2},{"vertices":[128,129,149,148,147],"region":2},{"vertices":[50,51,69,68,49],"region":2},{"vertices":[88,107,87,68,69],"region":2},{"vertices":[125,106,87,107,126],"region":2},{"vertices":[126,107,89,108,127],"region":2},{"vertices":[89,107,88,69,70],"region":2},{"vertices":[51,52,71,70,69],"region":2},{"vertices":[52,53,73,72,71],"region":2},{"vertices":[54,55,74,73,53],"region":2},{"vertices":[74,93,92,91,73],"region":2},{"vertices":[91,90,71,72,73],"region":2},{"vertices":[70,71,90,109,89],"region":2},{"vertices":[111,110,109,90,91],"region":2},{"vertices":[92,93,112,111,91],"region":2},{"vertices":[128,127,108,89,109],"region":2},{"vertices":[112,131,130,129,111],"region":2},{"vertices":[111,129,128,109,110],"region":2},{"vertices":[131,113,133,132,151,150],"region":3},{"vertices":[94,113,131,112,93,75],"region":3},{"vertices":[153,152,151,132,133,134],"region":3},{"vertices":[57,75,93,74,55,56],"region":3},{"vertices":[135,117,136,137,156,155],"region":3},{"vertices":[135,155,154,153,134,115],"region":3},{"vertices":[98,99,118,137,136,117],"region":3},{"vertices":[113,114,95,115,134,133],"region":3},{"vertices":[113,94,75,76,95,114],"region":3},{"vertices":[58,77,95,76,75,57],"region":3},{"vertices":[78,97,96,77,58,59],"region":3},{"vertices":[95,77,96,97,116,115],"region":3},{"vertices":[116,97,98,117,135,115],"region":3},{"vertices":[98,97,78,59,60,79],"region":3},{"vertices":[60,61,80,99,98,79],"region":3},{"vertices":[162,161,141,122,123,142,143],"region":4},{"vertices":[143,142,123,103,104,105,124],"region":4},{"vertices":[141,161,160,159,139,121,140],"region":4},{"vertices":[121,102,103,123,122,141,140],"region":4},{"vertices":[139,159,158,157,156,137,138],"region":4},{"vertices":[101,120,121,139,138,119,100],"region":4},{"vertices":[81,100,119,138,137,118,99],"region":4},{"vertices":[61,62,63,82,81,99,80],"region":4},{"vertices":[84,103,102,121,120,101,83],"region":4},{"vertices":[101,100,81,82,63,64,83],"region":4},{"vertices":[103,84,83,64,65,66,85],"region":4},{"vertices":[104,103,85,66,67,86,105],"region":4}]};

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * scale);
  canvas.height = Math.floor(rect.height * scale);
  // Keep mesh geometry proportional, including fractional CSS pixel sizes.
  const meshScale = Math.min(canvas.width / meshWidth, canvas.height / meshHeight);
  ctx.setTransform(
    meshScale, 0, 0, meshScale,
    (canvas.width - meshWidth * meshScale) / 2,
    (canvas.height - meshHeight * meshScale) / 2,
  );
}


function drawMesh() {
  ctx.clearRect(0, 0, meshWidth, meshHeight);
  const gradient = ctx.createLinearGradient(0, 0, meshWidth, meshHeight);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(1, "#eef4f1");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, meshWidth, meshHeight);

  const fills = ["#dcebe4", "#c8ded5", "#b6d1c6", "#c5d9df", "#e3d8b9"];
  const edges = new Map();
  mesh.cells.forEach(({ vertices, region }) => {
    ctx.beginPath();
    vertices.forEach((id, i) => {
      const [x, y] = mesh.points[id];
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
      const next = vertices[(i + 1) % vertices.length];
      const key = [id, next].sort((a, b) => a - b).join(":");
      if (!edges.has(key)) edges.set(key, { ends: [id, next], regions: [] });
      edges.get(key).regions.push(region);
    });
    ctx.closePath();
    ctx.fillStyle = fills[region];
    ctx.fill();
  });

  function strokeEdge({ ends }) {
    const [a, b] = ends.map(id => mesh.points[id]);
    ctx.beginPath();
    ctx.moveTo(...a);
    ctx.lineTo(...b);
    ctx.stroke();
  }

  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.strokeStyle = "#7c9990";
  ctx.lineWidth = 0.85;
  edges.forEach(strokeEdge);

  ctx.strokeStyle = "#365e51";
  ctx.lineWidth = 1.8;
  edges.forEach(edge => { if (edge.regions.length === 1) strokeEdge(edge); });

  const interfaceNodes = new Set();
  ctx.strokeStyle = "#9b743a";
  ctx.lineWidth = 2;
  edges.forEach(edge => {
    if (edge.regions.length === 2 && edge.regions[0] !== edge.regions[1]) {
      strokeEdge(edge);
      edge.ends.forEach(id => interfaceNodes.add(id));
    }
  });

  mesh.points.forEach(([x, y], id) => {
    ctx.beginPath();
    ctx.arc(x, y, interfaceNodes.has(id) ? 2.5 : 1.5, 0, Math.PI * 2);
    ctx.fillStyle = interfaceNodes.has(id) ? "#9b743a" : "#426a5d";
    ctx.fill();
  });
}

function render() {
  if (!canvas || !ctx) return;
  resizeCanvas();
  drawMesh();
}

if (canvas && ctx) {
  window.addEventListener("resize", render);
  render();
}

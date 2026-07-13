const canvas = document.querySelector("#meshCanvas");
const ctx = canvas?.getContext("2d");

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const scale = window.devicePixelRatio || 1;
  canvas.width = Math.floor(rect.width * scale);
  canvas.height = Math.floor(rect.height * scale);
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
}

function makePoints(width, height) {
  const points = [];
  const cols = 7;
  const rows = 5;
  const padX = width * 0.08;
  const padY = height * 0.1;
  const stepX = (width - padX * 2) / (cols - 1);
  const stepY = (height - padY * 2) / (rows - 1);

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const wave = Math.sin(x * 1.6 + y * 0.7) * 16;
      const drift = Math.cos(y * 1.4 + x * 0.5) * 12;
      points.push({
        x: padX + x * stepX + drift,
        y: padY + y * stepY + wave,
      });
    }
  }

  return { points, cols, rows };
}

function drawMesh() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(1, "#e8f0ed");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const { points, cols, rows } = makePoints(width, height);
  const polygons = [];

  for (let y = 0; y < rows - 1; y += 1) {
    for (let x = 0; x < cols - 1; x += 1) {
      const i = y * cols + x;
      polygons.push([points[i], points[i + 1], points[i + cols + 1], points[i + cols]]);
    }
  }

  polygons.forEach((poly, index) => {
    ctx.beginPath();
    poly.forEach((point, pointIndex) => {
      if (pointIndex === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.fillStyle = index % 3 === 0 ? "rgba(31, 93, 80, 0.1)" : "rgba(49, 95, 121, 0.08)";
    ctx.strokeStyle = "rgba(24, 47, 40, 0.24)";
    ctx.lineWidth = 1.1;
    ctx.fill();
    ctx.stroke();
  });

  points.forEach((point, index) => {
    ctx.beginPath();
    ctx.arc(point.x, point.y, index % 5 === 0 ? 4 : 3, 0, Math.PI * 2);
    ctx.fillStyle = index % 4 === 0 ? "#8a6428" : "#1f5d50";
    ctx.fill();
  });

  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.82);
  ctx.bezierCurveTo(width * 0.32, height * 0.72, width * 0.6, height * 0.92, width * 0.9, height * 0.68);
  ctx.strokeStyle = "rgba(138, 100, 40, 0.42)";
  ctx.lineWidth = 3;
  ctx.stroke();
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

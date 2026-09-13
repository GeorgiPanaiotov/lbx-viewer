const fileData = "";

const dropZone = document.getElementById("drop-zone");
const fileInput = document.getElementById("file-input");

dropZone?.addEventListener("click", () => fileInput?.click());

fileInput?.addEventListener("change", (e) =>
  handleFile(e?.target?.files[0]),
);

dropZone?.addEventListener("dragover", (e) => e.preventDefault());
dropZone?.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e?.dataTransfer.files.length)
    handleFile(e?.dataTransfer.files[0]);
});

const handleFile = (file) => {
  if (!file) return;

  const reader = new FileReader();

  reader.readAsText(file);
  reader.onload = (e) => parseCustomTextFormat(e?.target.result);
};

const parseCustomTextFormat = (bytes) => {
  console.log("Raw File Bytes Loaded:", bytes);
  fileData = bytes;
};

document.addEventListener("DOMContentLoaded", function () {
  var myChart = echarts.init(document.getElementById("cpu-container"));

  var option = {
    title: {
      text: "LBX Record CPU",
    },
    tooltip: {},
    legend: {
      data: ["RSS", "CPU %", "VM Peak"],
    },
    xAxis: {
      data: ["20:50:14.419", "20:50:14.470", "20:50:14.520", "20:50:14.570", "20:50:14.620", "20:50:14.671"],
    },
    yAxis: {},
    series: [
      {
        name: "CPU %",
        type: "line",
        smooth: true,
        data: [0.000, 0.994, 0.997, 1.993, 0.994, 0.997],
      },
      {
        name: "RSS",
        type: "line",
        smooth: true,
        data: [50, 200, 316, 110, 110, 210],
      },
      {
        name: "VM Peak",
        type: "line",
        smooth: true,
        data: [0, 10, 31, 130, 10, 30],
      }
    ],
  };

  myChart.setOption(option);
});


document.addEventListener("DOMContentLoaded", function () {
  var myChart = echarts.init(document.getElementById("mem-container"));

  var option = {
    title: {
      text: "LBX Record Memory",
    },
    tooltip: {},
    legend: {
      data: ["RSS", "CPU %", "VM Peak"],
    },
    xAxis: {
      data: ["20:50:14.419", "20:50:14.470", "20:50:14.520", "20:50:14.570", "20:50:14.620", "20:50:14.671"],
    },
    yAxis: {},
    series: [
      {
        name: "CPU %",
        type: "line",
        smooth: true,
        data: [0.000, 0.994, 0.997, 1.993, 0.994, 0.997],
      },
      {
        name: "RSS",
        type: "line",
        smooth: true,
        data: [50, 200, 316, 110, 110, 210],
      },
      {
        name: "VM Peak",
        type: "line",
        smooth: true,
        data: [0, 10, 31, 130, 10, 30],
      }
    ],
  };

  myChart.setOption(option);
});
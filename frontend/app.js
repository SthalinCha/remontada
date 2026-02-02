const API_BASE = "/api";
const state = {
  items: [],
  results: [],
};

const fileInput = document.getElementById("file-input");
const uploadBtn = document.getElementById("upload-btn");
const clearBtn = document.getElementById("clear-btn");
const statusEl = document.getElementById("status");
const gallery = document.getElementById("gallery");
const resultsSection = document.getElementById("results-section");
const results = document.getElementById("results");
const dropZone = document.getElementById("drop-zone");
const modeRadios = document.querySelectorAll('input[name="mode"]');
const capacitiesInput = document.getElementById("capacities-input");
const clustersInput = document.getElementById("clusters-input");
const addImagesBtn = document.getElementById("add-images-btn");
const updateCapacitiesBtn = document.getElementById("update-capacities-btn");
const statusBtn = document.getElementById("status-btn");
const clusterStatusDisplay = document.getElementById("cluster-status-display");
const clusterStatusContent = document.getElementById("cluster-status-content");
const addImagesBtnHu = document.getElementById("add-images-btn-hu");
const updateCapacitiesBtnHu = document.getElementById("update-capacities-btn-hu");
const statusBtnHu = document.getElementById("status-btn-hu");
const clusterStatusDisplayHu = document.getElementById("cluster-status-display-hu");
const clusterStatusContentHu = document.getElementById("cluster-status-content-hu");
const addImagesBtnZernike = document.getElementById("add-images-btn-zernike");
const updateCapacitiesBtnZernike = document.getElementById("update-capacities-btn-zernike");
const statusBtnZernike = document.getElementById("status-btn-zernike");
const clusterStatusDisplayZernike = document.getElementById("cluster-status-display-zernike");
const clusterStatusContentZernike = document.getElementById("cluster-status-content-zernike");
const addImagesBtnSift = document.getElementById("add-images-btn-sift");
const updateCapacitiesBtnSift = document.getElementById("update-capacities-btn-sift");
const statusBtnSift = document.getElementById("status-btn-sift");
const clusterStatusDisplaySift = document.getElementById("cluster-status-display-sift");
const clusterStatusContentSift = document.getElementById("cluster-status-content-sift");
const addImagesBtnHog = document.getElementById("add-images-btn-hog");
const updateCapacitiesBtnHog = document.getElementById("update-capacities-btn-hog");
const statusBtnHog = document.getElementById("status-btn-hog");
const clusterStatusDisplayHog = document.getElementById("cluster-status-display-hog");
const clusterStatusContentHog = document.getElementById("cluster-status-content-hog");
const addImagesBtnCnn = document.getElementById("add-images-btn-cnn");
const updateCapacitiesBtnCnn = document.getElementById("update-capacities-btn-cnn");
const statusBtnCnn = document.getElementById("status-btn-cnn");
const clusterStatusDisplayCnn = document.getElementById("cluster-status-display-cnn");
const clusterStatusContentCnn = document.getElementById("cluster-status-content-cnn");

// Elementos para External Metrics (Momentos con Etiquetas)
const externalNumGroupsInput = document.getElementById("external-num-groups");
const externalCapacitiesInput = document.getElementById("external-capacities");
const initExternalBtn = document.getElementById("init-external-btn");
const externalGroupsContainer = document.getElementById("external-groups-container");
const externalGroupsInputs = document.getElementById("external-groups-inputs");
const calculateMetricsBtn = document.getElementById("calculate-metrics-btn");
const externalMetricsResults = document.getElementById("external-metrics-results");
const clustersVisualization = document.getElementById("clusters-visualization");
const resetExternalBtn = document.getElementById("reset-external-btn");

// Referencias DOM para Hu con Etiquetas
const externalHuNumGroupsInput = document.getElementById("external-hu-num-groups");
const externalHuCapacitiesInput = document.getElementById("external-hu-capacities");
const initExternalHuBtn = document.getElementById("init-external-hu-btn");
const externalHuGroupsContainer = document.getElementById("external-hu-groups-container");
const externalHuGroupsInputs = document.getElementById("external-hu-groups-inputs");
const calculateMetricsHuBtn = document.getElementById("calculate-metrics-hu-btn");
const externalMetricsHuResults = document.getElementById("external-metrics-hu-results");
const clustersHuVisualization = document.getElementById("clusters-hu-visualization");
const resetExternalHuBtn = document.getElementById("reset-external-hu-btn");

// Referencias DOM para Zernike con Etiquetas
const externalZernikeNumGroupsInput = document.getElementById("external-zernike-num-groups");
const externalZernikeCapacitiesInput = document.getElementById("external-zernike-capacities");
const initExternalZernikeBtn = document.getElementById("init-external-zernike-btn");
const externalZernikeGroupsContainer = document.getElementById("external-zernike-groups-container");
const externalZernikeGroupsInputs = document.getElementById("external-zernike-groups-inputs");
const calculateMetricsZernikeBtn = document.getElementById("calculate-metrics-zernike-btn");
const externalMetricsZernikeResults = document.getElementById("external-metrics-zernike-results");
const clustersZernikeVisualization = document.getElementById("clusters-zernike-visualization");
const resetExternalZernikeBtn = document.getElementById("reset-external-zernike-btn");

// Referencias DOM para SIFT con Etiquetas
const externalSiftNumGroupsInput = document.getElementById("external-sift-num-groups");
const externalSiftCapacitiesInput = document.getElementById("external-sift-capacities");
const initExternalSiftBtn = document.getElementById("init-external-sift-btn");
const externalSiftGroupsContainer = document.getElementById("external-sift-groups-container");
const externalSiftGroupsInputs = document.getElementById("external-sift-groups-inputs");
const calculateMetricsSiftBtn = document.getElementById("calculate-metrics-sift-btn");
const externalMetricsSiftResults = document.getElementById("external-metrics-sift-results");
const clustersSiftVisualization = document.getElementById("clusters-sift-visualization");
const resetExternalSiftBtn = document.getElementById("reset-external-sift-btn");

// Referencias DOM para HOG con Etiquetas
const externalHogNumGroupsInput = document.getElementById("external-hog-num-groups");
const externalHogCapacitiesInput = document.getElementById("external-hog-capacities");
const initExternalHogBtn = document.getElementById("init-external-hog-btn");
const externalHogGroupsContainer = document.getElementById("external-hog-groups-container");
const externalHogGroupsInputs = document.getElementById("external-hog-groups-inputs");
const calculateMetricsHogBtn = document.getElementById("calculate-metrics-hog-btn");
const externalMetricsHogResults = document.getElementById("external-metrics-hog-results");
const clustersHogVisualization = document.getElementById("clusters-hog-visualization");
const resetExternalHogBtn = document.getElementById("reset-external-hog-btn");

// Referencias DOM para CNN con Etiquetas
const externalCnnNumGroupsInput = document.getElementById("external-cnn-num-groups");
const externalCnnCapacitiesInput = document.getElementById("external-cnn-capacities");
const initExternalCnnBtn = document.getElementById("init-external-cnn-btn");
const externalCnnGroupsContainer = document.getElementById("external-cnn-groups-container");
const externalCnnGroupsInputs = document.getElementById("external-cnn-groups-inputs");
const calculateMetricsCnnBtn = document.getElementById("calculate-metrics-cnn-btn");
const externalMetricsCnnResults = document.getElementById("external-metrics-cnn-results");
const clustersCnnVisualization = document.getElementById("clusters-cnn-visualization");
const resetExternalCnnBtn = document.getElementById("reset-external-cnn-btn");

// Estado para External Metrics
let externalMetricsState = {
  numGroups: 0,
  groupsData: {} // {groupId: {label: string, fileInput: HTMLElement}}
};

// Estado para Hu External Metrics
let externalMetricsHuState = {
  numGroups: 0,
  groupsData: {}
};

// Estado para Zernike External Metrics
let externalMetricsZernikeState = {
  numGroups: 0,
  groupsData: {}
};

// Estado para SIFT External Metrics
let externalMetricsSiftState = {
  numGroups: 0,
  groupsData: {}
};

// Estado para HOG External Metrics
let externalMetricsHogState = {
  numGroups: 0,
  groupsData: {}
};

// Estado para CNN External Metrics
let externalMetricsCnnState = {
  numGroups: 0,
  groupsData: {}
};

function setStatus(text) {
  statusEl.textContent = text;
}

function resolveUrl(path) {
  return `${API_BASE}${path}`;
}

function getMode() {
  const selected = document.querySelector('input[name="mode"]:checked');
  return selected ? selected.value : "gallery";
}

function renderItem(item) {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = item.filename || "imagen";

  const images = document.createElement("div");
  images.className = "images";

  const original = document.createElement("img");
  original.src = resolveUrl(item.original_url);
  original.alt = "Original";

  const processed = document.createElement("img");
  processed.src = resolveUrl(item.processed_url);
  processed.alt = "Procesada";

  const binarized = document.createElement("img");
  binarized.src = resolveUrl(item.binarized_url);
  binarized.alt = "Binarizada";

  images.appendChild(original);
  images.appendChild(processed);
  images.appendChild(binarized);

  card.appendChild(title);
  card.appendChild(images);

  gallery.prepend(card);
}

function addItems(items) {
  items.forEach((item) => {
    state.items.push(item);
    renderItem(item);
  });
}

function clearGallery() {
  state.items = [];
  gallery.innerHTML = "";
}

function renderResults(resultList, type) {
  resultsSection.style.display = "block";
  gallery.parentElement.style.display = "none";

  if (type === "momentos" || type === "hu" || type === "zernike" || type === "sift" || type === "hog" || type === "cnn") {
    resultList.forEach((item) => {
      state.results.push(item);
      const cid = typeof item.cluster_id === "number" ? item.cluster_id : "sin-cluster";
      let group = results.querySelector(`[data-cluster-id="${cid}"]`);
      if (!group) {
        group = document.createElement("div");
        group.className = "cluster-group";
        group.dataset.clusterId = cid;

        const title = document.createElement("h3");
        title.textContent = `Cluster ${cid}`;

        const centroid = document.createElement("div");
        centroid.className = "cluster-centroid";
        centroid.textContent = "Centroide: []";

        const grid = document.createElement("div");
        grid.className = "cluster-grid";

        group.appendChild(title);
        group.appendChild(centroid);
        group.appendChild(grid);
        results.appendChild(group);
      }

      const centroidEl = group.querySelector(".cluster-centroid");
      if (centroidEl && Array.isArray(item.ultimo_centroide)) {
        const c = item.ultimo_centroide.slice(0, 8).map(v => Number(v).toFixed(3)).join(", ");
        centroidEl.textContent = `Centroide: [${c}, ...]`;
      }

      const grid = group.querySelector(".cluster-grid");
      const tile = document.createElement("div");
      tile.className = "cluster-item";

      const img = document.createElement("img");
      img.src = resolveUrl(item.original_url);
      img.alt = item.filename || "imagen";

      const caption = document.createElement("div");
      caption.className = "cluster-caption";
      caption.textContent = item.filename || "imagen";

      tile.appendChild(img);
      tile.appendChild(caption);
      grid.appendChild(tile);
    });
    return;
  }

  resultList.forEach((item) => {
    state.results.push(item);

    const resultItem = document.createElement("div");
    resultItem.className = "result-item";

    const preview = document.createElement("div");
    preview.className = "result-preview";

    if (type === "sift") {
      const processedDiv = document.createElement("div");
      const processedImg = document.createElement("img");
      processedImg.src = resolveUrl(item.processed_url);
      const processedLabel = document.createElement("div");
      processedLabel.className = "result-preview-label";
      processedLabel.textContent = "SIFT";
      processedDiv.appendChild(processedImg);
      processedDiv.appendChild(processedLabel);
      preview.appendChild(processedDiv);
    } else if (type === "hog") {
      const originalDiv = document.createElement("div");
      const originalImg = document.createElement("img");
      originalImg.src = resolveUrl(item.original_url);
      const originalLabel = document.createElement("div");
      originalLabel.className = "result-preview-label";
      originalLabel.textContent = "Original";
      originalDiv.appendChild(originalImg);
      originalDiv.appendChild(originalLabel);

      const processedDiv = document.createElement("div");
      const processedImg = document.createElement("img");
      processedImg.src = resolveUrl(item.processed_url);
      const processedLabel = document.createElement("div");
      processedLabel.className = "result-preview-label";
      processedLabel.textContent = "HOG";
      processedDiv.appendChild(processedImg);
      processedDiv.appendChild(processedLabel);

      preview.appendChild(originalDiv);
      preview.appendChild(processedDiv);
    } else if (type === "cnn") {
      const originalDiv = document.createElement("div");
      const originalImg = document.createElement("img");
      originalImg.src = resolveUrl(item.original_url);
      const originalLabel = document.createElement("div");
      originalLabel.className = "result-preview-label";
      originalLabel.textContent = "Original";
      originalDiv.appendChild(originalImg);
      originalDiv.appendChild(originalLabel);

      const processedDiv = document.createElement("div");
      const processedImg = document.createElement("img");
      processedImg.src = resolveUrl(item.processed_url);
      const processedLabel = document.createElement("div");
      processedLabel.className = "result-preview-label";
      processedLabel.textContent = "CNN/ResNet50";
      processedDiv.appendChild(processedImg);
      processedDiv.appendChild(processedLabel);

      preview.appendChild(originalDiv);
      preview.appendChild(processedDiv);
    } else {
      const originalDiv = document.createElement("div");
      const originalImg = document.createElement("img");
      originalImg.src = resolveUrl(item.original_url);
      const originalLabel = document.createElement("div");
      originalLabel.className = "result-preview-label";
      originalLabel.textContent = "Original";
      originalDiv.appendChild(originalImg);
      originalDiv.appendChild(originalLabel);

      const processedDiv = document.createElement("div");
      const processedImg = document.createElement("img");
      processedImg.src = resolveUrl(item.processed_url);
      const processedLabel = document.createElement("div");
      processedLabel.className = "result-preview-label";
      processedLabel.textContent = "Procesada";
      processedDiv.appendChild(processedImg);
      processedDiv.appendChild(processedLabel);

      const binarizedDiv = document.createElement("div");
      const binarizedImg = document.createElement("img");
      binarizedImg.src = resolveUrl(item.binarized_url);
      const binarizedLabel = document.createElement("div");
      binarizedLabel.className = "result-preview-label";
      binarizedLabel.textContent = "Binarizada";
      binarizedDiv.appendChild(binarizedImg);
      binarizedDiv.appendChild(binarizedLabel);

      preview.appendChild(originalDiv);
      preview.appendChild(processedDiv);
      preview.appendChild(binarizedDiv);
    }

    const dataSection = document.createElement("div");
    dataSection.className = "result-data";

    const title = document.createElement("h4");
    title.textContent = item.filename;

    const momentosData = document.createElement("div");
    
    if (type === "hu") {
      const h = item.momentos_hu;
      momentosData.innerHTML = `
        <p><strong>Momentos de Hu:</strong></p>
        <p>  h1: ${h.hu1.toExponential(6)}</p>
        <p>  h2: ${h.hu2.toExponential(6)}</p>
        <p>  h3: ${h.hu3.toExponential(6)}</p>
        <p>  h4: ${h.hu4.toExponential(6)}</p>
        <p>  h5: ${h.hu5.toExponential(6)}</p>
        <p>  h6: ${h.hu6.toExponential(6)}</p>
        <p>  h7: ${h.hu7.toExponential(6)}</p>
      `;
    } else if (type === "zernike") {
      const z = item.momentos_zernike || {};
      const keys = Object.keys(z);
      if (keys.length === 0) {
        momentosData.innerHTML = '<p><strong>Momentos de Zernike:</strong> no disponibles</p>';
      } else {
        let html = '<p><strong>Momentos de Zernike:</strong></p>';
        for (let i = 0; i < keys.length; i += 5) {
          const chunk = keys.slice(i, i + 5);
          html += '<p>  ' + chunk.map(k => {
            const val = Number(z[k]);
            const text = Number.isFinite(val) ? val.toExponential(4) : String(z[k]);
            return `${k}: ${text}`;
          }).join(' | ') + '</p>';
        }
        momentosData.innerHTML = html;
      }
    } else if (type === "sift") {
      const d = item.descriptores || [];
      const count = d.length;
      const sample = d.slice(0, 3);
      let html = `<p><strong>SIFT:</strong> ${count} descriptores</p>`;
      if (sample.length > 0) {
        html += '<p><strong>Ejemplo (primeros 3):</strong></p>';
        sample.forEach((vec, i) => {
          const shortVec = vec.slice(0, 8).map(v => Number(v).toFixed(3)).join(', ');
          html += `<p>  d${i + 1}: [${shortVec}, ...]</p>`;
        });
      }
      momentosData.innerHTML = html;
    } else if (type === "hog") {
      const d = item.descriptores_hog || [];
      const count = d.length;
      const sample = d.slice(0, 12).map(v => Number(v).toFixed(4)).join(', ');
      let html = `<p><strong>HOG:</strong> ${count} valores</p>`;
      if (count > 0) {
        html += `<p><strong>Ejemplo (primeros 12):</strong> [${sample}, ...]</p>`;
      }
      momentosData.innerHTML = html;
    } else if (type === "cnn") {
      const d = item.descriptores_cnn || [];
      const count = d.length;
      const sample = d.slice(0, 12).map(v => Number(v).toFixed(4)).join(', ');
      let html = `<p><strong>CNN/ResNet50:</strong> ${count} valores</p>`;
      if (count > 0) {
        html += `<p><strong>Ejemplo (primeros 12):</strong> [${sample}, ...]</p>`;
      }
      momentosData.innerHTML = html;
    } else {
      const m = item.momentos;
      momentosData.innerHTML = `
        <p><strong>Momentos Espaciales:</strong></p>
        <p>  m00: ${m.m00.toFixed(2)} | m10: ${m.m10.toFixed(2)} | m01: ${m.m01.toFixed(2)}</p>
        <p>  m20: ${m.m20.toFixed(2)} | m11: ${m.m11.toFixed(2)} | m02: ${m.m02.toFixed(2)}</p>
        <p>  m30: ${m.m30.toFixed(2)} | m21: ${m.m21.toFixed(2)} | m12: ${m.m12.toFixed(2)} | m03: ${m.m03.toFixed(2)}</p>
        <p><strong>Momentos Centrales:</strong></p>
        <p>  mu20: ${m.mu20.toFixed(2)} | mu11: ${m.mu11.toFixed(2)} | mu02: ${m.mu02.toFixed(2)}</p>
        <p>  mu30: ${m.mu30.toFixed(2)} | mu21: ${m.mu21.toFixed(2)} | mu12: ${m.mu12.toFixed(2)} | mu03: ${m.mu03.toFixed(2)}</p>
        <p><strong>Momentos Normalizados:</strong></p>
        <p>  nu20: ${m.nu20.toExponential(4)} | nu11: ${m.nu11.toExponential(4)} | nu02: ${m.nu02.toExponential(4)}</p>
        <p>  nu30: ${m.nu30.toExponential(4)} | nu21: ${m.nu21.toExponential(4)} | nu12: ${m.nu12.toExponential(4)} | nu03: ${m.nu03.toExponential(4)}</p>
      `;
      if (item.ultimo_centroide) {
        const c = item.ultimo_centroide.slice(0, 6).map(v => Number(v).toFixed(3)).join(", ");
        momentosData.innerHTML += `
          <p><strong>Cluster:</strong> ${item.cluster_id}</p>
          <p><strong>Último centroide:</strong> [${c}, ...]</p>
        `;
      }
    }

    dataSection.appendChild(title);
    dataSection.appendChild(momentosData);

    resultItem.appendChild(preview);
    resultItem.appendChild(dataSection);

    results.appendChild(resultItem);
  });
}

async function loadExisting() {
  setStatus("Cargando...");
  try {
    const res = await fetch(`${API_BASE}/images`);
    const data = await res.json();
    if (Array.isArray(data)) {
      addItems(data);
    }
    setStatus("Listo");
  } catch (err) {
    setStatus("Error al cargar");
  }
}

async function uploadFiles(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  uploadBtn.disabled = true;
  setStatus("Subiendo...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    if (mode === "momentos") {
      const caps = capacitiesInput.value.trim();
      const k = clustersInput.value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "momentos");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else if (mode === "hu") {
      const caps = document.getElementById("hu-capacities-input").value.trim();
      const k = document.getElementById("hu-clusters-input").value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze-hu`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "hu");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else if (mode === "zernike") {
      const caps = document.getElementById("zernike-capacities-input").value.trim();
      const k = document.getElementById("zernike-clusters-input").value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze-zernike`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "zernike");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else if (mode === "sift") {
      const caps = document.getElementById("sift-capacities-input").value.trim();
      const k = document.getElementById("sift-clusters-input").value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze-sift`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "sift");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else if (mode === "hog") {
      const caps = document.getElementById("hog-capacities-input").value.trim();
      const k = document.getElementById("hog-clusters-input").value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze-hog`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "hog");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else if (mode === "cnn") {
      const caps = document.getElementById("cnn-capacities-input").value.trim();
      const k = document.getElementById("cnn-clusters-input").value.trim();
      if (!caps && !k) {
        setStatus("Ingresa capacities o número de clusters");
        uploadBtn.disabled = false;
        return;
      }
      if (caps) {
        form.append("capacities", caps);
      }
      if (k) {
        form.append("clusters", k);
      }
      const res = await fetch(`${API_BASE}/analyze-cnn`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.results) {
        renderResults(data.results, "cnn");
        if (data.metrics) {
          displayMetrics(data.metrics);
        }
      }
    } else {
      const res = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      const data = await res.json();
      if (data.items) {
        addItems(data.items);
      }
    }

    setStatus("Listo");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al subir";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    uploadBtn.disabled = false;
  }
}

async function addImagesToCluster(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  if (mode !== "momentos") {
    setStatus("❌ Selecciona 'Momentos' para agregar imágenes al clustering");
    return;
  }

  addImagesBtn.disabled = true;
  setStatus("Verificando modelo de clustering...");

  // Primero verificar que existe un modelo activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status`);
    const statusData = await statusRes.json();
    
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Sube imágenes primero con capacidades");
      addImagesBtn.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtn.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "momentos");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtn.disabled = false;
  }
}

async function updateCapacities() {
  const mode = getMode();
  if (mode !== "momentos") {
    setStatus("Selecciona 'Momentos' para actualizar restricciones");
    return;
  }

  const caps = capacitiesInput.value.trim();
  if (!caps) {
    setStatus("Ingresa capacities para actualizar restricciones");
    return;
  }

  updateCapacitiesBtn.disabled = true;
  setStatus("Actualizando restricciones...");

  const form = new FormData();
  form.append("capacities", caps);

  try {
    const res = await fetch(`${API_BASE}/update-capacities`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatus();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtn.disabled = false;
  }
}

async function showClusterStatus() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplay.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContent.innerHTML = html;
    clusterStatusDisplay.style.display = "block";
  } catch (err) {
    console.error("Error al obtener estado", err);
  }
}

async function deleteAll() {
  clearBtn.disabled = true;
  setStatus("Borrando...");
  try {
    const res = await fetch(`${API_BASE}/images`, { method: "DELETE" });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }
    clearGallery();
    state.results = [];
    results.innerHTML = "";
    resultsSection.style.display = "none";
    gallery.parentElement.style.display = "block";
    setStatus("Listo");
  } catch (err) {
    setStatus("Error al borrar");
  } finally {
    clearBtn.disabled = false;
  }
}

// Funciones para Hu Moments
async function addImagesToClusterHu(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  if (mode !== "hu") {
    setStatus("❌ Selecciona 'Momentos de Hu' para agregar imágenes al clustering");
    return;
  }

  addImagesBtnHu.disabled = true;
  setStatus("Verificando modelo de clustering...");

  // Primero verificar que existe un modelo activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status-hu`);
    const statusData = await statusRes.json();
    
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Sube imágenes primero con capacidades");
      addImagesBtnHu.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtnHu.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images-hu`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "hu");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtnHu.disabled = false;
  }
}

async function updateCapacitiesHu() {
  const mode = getMode();
  if (mode !== "hu") {
    setStatus("Selecciona 'Momentos de Hu' para actualizar restricciones");
    return;
  }

  const caps = document.getElementById("hu-capacities-input").value.trim();
  if (!caps) {
    setStatus("Ingresa capacities para actualizar restricciones");
    return;
  }

  updateCapacitiesBtnHu.disabled = true;
  setStatus("Actualizando restricciones...");

  const form = new FormData();
  form.append("capacities", caps);

  try {
    const res = await fetch(`${API_BASE}/update-capacities-hu`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatusHu();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtnHu.disabled = false;
  }
}

async function showClusterStatusHu() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status-hu`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplayHu.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContentHu.innerHTML = html;
    clusterStatusDisplayHu.style.display = "block";
  } catch (err) {
    console.error("Error al obtener estado", err);
  }
}

async function addImagesToClusterZernike(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  if (mode !== "zernike") {
    setStatus("❌ Selecciona 'Momentos de Zernike' para agregar imágenes al clustering");
    return;
  }

  addImagesBtnZernike.disabled = true;
  setStatus("Verificando modelo de clustering...");

  // Primero verificar que existe un modelo activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status-zernike`);
    const statusData = await statusRes.json();
    
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Sube imágenes primero con capacidades");
      addImagesBtnZernike.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtnZernike.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images-zernike`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "zernike");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtnZernike.disabled = false;
  }
}

async function updateCapacitiesZernike() {
  const mode = getMode();
  if (mode !== "zernike") {
    setStatus("Selecciona 'Momentos de Zernike' para actualizar restricciones");
    return;
  }

  const caps = document.getElementById("zernike-capacities-input").value.trim();
  if (!caps) {
    setStatus("Ingresa capacities para actualizar restricciones");
    return;
  }

  updateCapacitiesBtnZernike.disabled = true;
  setStatus("Actualizando restricciones...");

  const form = new FormData();
  form.append("capacities", caps);

  try {
    const res = await fetch(`${API_BASE}/update-capacities-zernike`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatusZernike();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtnZernike.disabled = false;
  }
}

async function showClusterStatusZernike() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status-zernike`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplayZernike.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContentZernike.innerHTML = html;
    clusterStatusDisplayZernike.style.display = "block";
  } catch (err) {
    console.error("Error al obtener estado", err);
  }
}

async function addImagesToClusterSift(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  if (mode !== "sift") {
    setStatus("❌ Selecciona 'SIFT' para agregar imágenes al clustering");
    return;
  }

  addImagesBtnSift.disabled = true;
  setStatus("Verificando modelo de clustering...");

  // Primero verificar que existe un modelo activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status-sift`);
    const statusData = await statusRes.json();
    
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Sube imágenes primero con capacidades");
      addImagesBtnSift.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtnSift.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images-sift`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "sift");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtnSift.disabled = false;
  }
}

async function updateCapacitiesSift() {
  const mode = getMode();
  if (mode !== "sift") {
    setStatus("Selecciona 'SIFT' para actualizar restricciones");
    return;
  }

  const caps = document.getElementById("sift-capacities-input").value.trim();
  if (!caps) {
    setStatus("Ingresa capacities para actualizar restricciones");
    return;
  }

  updateCapacitiesBtnSift.disabled = true;
  setStatus("Actualizando restricciones...");

  const form = new FormData();
  form.append("capacities", caps);

  try {
    const res = await fetch(`${API_BASE}/update-capacities-sift`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatusSift();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtnSift.disabled = false;
  }
}

async function showClusterStatusSift() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status-sift`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplaySift.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContentSift.innerHTML = html;
    clusterStatusDisplaySift.style.display = "block";
  } catch (err) {
    console.error("Error al obtener estado", err);
  }
}

async function addImagesToClusterHog(files) {
  if (!files || files.length === 0) {
    return;
  }

  const mode = getMode();
  if (mode !== "hog") {
    setStatus("❌ Selecciona 'HOG' para agregar imágenes al clustering");
    return;
  }

  addImagesBtnHog.disabled = true;
  setStatus("Verificando modelo de clustering...");

  // Primero verificar que existe un modelo activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status-hog`);
    const statusData = await statusRes.json();
    
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Sube imágenes primero con capacidades");
      addImagesBtnHog.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtnHog.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images-hog`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "hog");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtnHog.disabled = false;
  }
}

async function updateCapacitiesHog() {
  const mode = getMode();
  if (mode !== "hog") {
    setStatus("Selecciona 'HOG' para actualizar restricciones");
    return;
  }

  const caps = document.getElementById("hog-capacities-input").value.trim();
  if (!caps) {
    setStatus("Ingresa capacities para actualizar restricciones");
    return;
  }

  updateCapacitiesBtnHog.disabled = true;
  setStatus("Actualizando restricciones...");

  const form = new FormData();
  form.append("capacities", caps);

  try {
    const res = await fetch(`${API_BASE}/update-capacities-hog`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatusHog();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus(msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtnHog.disabled = false;
  }
}

async function showClusterStatusHog() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status-hog`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplayHog.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContentHog.innerHTML = html;
    clusterStatusDisplayHog.style.display = "block";
  } catch (err) {
    console.error("Error al obtener estado", err);
  }
}

uploadBtn.addEventListener("click", () => uploadFiles(fileInput.files));
clearBtn.addEventListener("click", deleteAll);
fileInput.addEventListener("change", () => setStatus(`${fileInput.files.length} archivo(s) listo(s)`));
addImagesBtn.addEventListener("click", () => addImagesToCluster(fileInput.files));
updateCapacitiesBtn.addEventListener("click", updateCapacities);
statusBtn.addEventListener("click", showClusterStatus);
addImagesBtnHu.addEventListener("click", () => addImagesToClusterHu(fileInput.files));
updateCapacitiesBtnHu.addEventListener("click", updateCapacitiesHu);
statusBtnHu.addEventListener("click", showClusterStatusHu);
addImagesBtnZernike.addEventListener("click", () => addImagesToClusterZernike(fileInput.files));
updateCapacitiesBtnZernike.addEventListener("click", updateCapacitiesZernike);
statusBtnZernike.addEventListener("click", showClusterStatusZernike);
addImagesBtnSift.addEventListener("click", () => addImagesToClusterSift(fileInput.files));
updateCapacitiesBtnSift.addEventListener("click", updateCapacitiesSift);
statusBtnSift.addEventListener("click", showClusterStatusSift);
addImagesBtnHog.addEventListener("click", () => addImagesToClusterHog(fileInput.files));
updateCapacitiesBtnHog.addEventListener("click", updateCapacitiesHog);
statusBtnHog.addEventListener("click", showClusterStatusHog);
addImagesBtnCnn.addEventListener("click", () => addImagesToClusterCnn(fileInput.files));
updateCapacitiesBtnCnn.addEventListener("click", updateCapacitiesCnn);
statusBtnCnn.addEventListener("click", showClusterStatusCnn);

// ==========================================
// FUNCIONES PARA CNN
// ==========================================

async function addImagesToClusterCnn(files) {
  if (!files || files.length === 0) {
    setStatus("Selecciona imágenes primero");
    return;
  }

  addImagesBtnCnn.disabled = true;
  
  // Verificar si el modelo está activo
  try {
    const statusRes = await fetch(`${API_BASE}/cluster-status-cnn`);
    if (!statusRes.ok) {
      throw new Error("Error al verificar modelo");
    }
    const statusData = await statusRes.json();
    if (!statusData.active) {
      setStatus("❌ No hay modelo activo. Ejecuta /analyze-cnn primero");
      addImagesBtnCnn.disabled = false;
      return;
    }
    
    console.log("✓ Modelo activo encontrado");
  } catch (err) {
    setStatus("❌ Error verificando modelo");
    addImagesBtnCnn.disabled = false;
    return;
  }

  setStatus("Agregando imágenes...");

  const form = new FormData();
  Array.from(files).forEach((file) => form.append("files", file));

  try {
    const res = await fetch(`${API_BASE}/add-images-cnn`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.results) {
      renderResults(data.results, "cnn");
    }
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("✓ Imágenes agregadas exitosamente");
    fileInput.value = "";
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al agregar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    addImagesBtnCnn.disabled = false;
  }
}

async function updateCapacitiesCnn() {
  const caps = document.getElementById("cnn-capacities-input").value.trim();
  if (!caps) {
    setStatus("Ingresa las nuevas capacidades");
    return;
  }

  updateCapacitiesBtnCnn.disabled = true;
  setStatus("Actualizando restricciones...");

  try {
    const form = new FormData();
    form.append("capacities", caps);

    const res = await fetch(`${API_BASE}/update-capacities-cnn`, {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text);
    }

    const data = await res.json();
    if (data.metrics) {
      displayMetrics(data.metrics);
    }
    setStatus("Restricciones actualizadas ✓");
    // Mostrar estado después de actualizar
    await showClusterStatusCnn();
  } catch (err) {
    const msg = err && err.message ? err.message : "Error al actualizar";
    setStatus("❌ " + msg.replace(/^"|"$/g, ""));
  } finally {
    updateCapacitiesBtnCnn.disabled = false;
  }
}

async function showClusterStatusCnn() {
  try {
    const res = await fetch(`${API_BASE}/cluster-status-cnn`);
    if (!res.ok) return;
    
    const status = await res.json();
    if (!status.active) {
      clusterStatusDisplayCnn.style.display = "none";
      return;
    }
    
    let html = "<ul style='margin: 5px 0; padding-left: 20px;'>";
    for (let i = 0; i < status['num_clusters']; i++) {
      const current = status['current_counts'][i] || 0;
      const capacity = status['capacities'][i] || 0;
      const available = status['available_spaces'][i] || 0;
      const percent = Math.round((current / capacity) * 100);
      html += `<li>Cluster ${i}: ${current}/${capacity} (${available} cupo) [${percent}%]</li>`;
    }
    html += "</ul>";
    
    clusterStatusContentCnn.innerHTML = html;
    clusterStatusDisplayCnn.style.display = "block";
  } catch (err) {
    console.error("Error mostrando estado de CNN:", err);
  }
}

// ==========================================
// FUNCIONES PARA EXTERNAL METRICS (Momentos con Etiquetas)
// ==========================================

async function initializeExternalMetrics() {
  const numGroups = parseInt(externalNumGroupsInput.value);
  
  if (!numGroups || numGroups < 2) {
    alert("Por favor indica un número válido de grupos (mínimo 2)");
    return;
  }
  
  setStatus("Inicializando sesión de métricas externas...");
  
  try {
    const response = await fetch(resolveUrl("/external-metrics/initialize"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `num_clusters=${numGroups}`
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      setStatus("Error en inicialización");
      return;
    }
    
    const data = await response.json();
    externalMetricsState.numGroups = numGroups;
    externalMetricsState.groupsData = {};
    
    // Crear inputs para cada grupo
    externalGroupsInputs.innerHTML = "";
    for (let i = 0; i < numGroups; i++) {
      const groupDiv = document.createElement("div");
      groupDiv.className = "group-upload-section";
      groupDiv.style.cssText = `
        border: 2px dashed #2196F3;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        background: #f5f5f5;
      `;
      
      groupDiv.innerHTML = `
        <h4>📁 Grupo ${i} (Carpeta ${i})</h4>
        <div style="margin-bottom: 10px;">
          <label>Etiqueta/Clase:</label>
          <input 
            type="text" 
            id="group-label-${i}" 
            placeholder="Ej: Gato, Perro, etc." 
            style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
          />
        </div>
        <div style="margin-bottom: 10px;">
          <label>Carga imágenes de esta carpeta:</label>
          <input 
            type="file" 
            id="group-files-${i}" 
            multiple 
            accept="image/*"
            style="display: block; margin-top: 5px;"
          />
        </div>
        <div id="group-status-${i}" style="font-size: 12px; color: #666;"></div>
      `;
      
      externalGroupsInputs.appendChild(groupDiv);
      externalMetricsState.groupsData[i] = { label: "", files: null };
    }
    
    externalGroupsContainer.style.display = "block";
    setStatus(`Sesión inicializada para ${numGroups} grupos`);
    
  } catch (err) {
    alert(`Error: ${err.message}`);
    setStatus("Error en inicialización");
  }
}

async function uploadGroupImages(groupId) {
  const labelInput = document.getElementById(`group-label-${groupId}`);
  const filesInput = document.getElementById(`group-files-${groupId}`);
  
  if (!labelInput.value.trim()) {
    alert(`Por favor ingresa una etiqueta para el grupo ${groupId}`);
    return false;
  }
  
  if (!filesInput.files || filesInput.files.length === 0) {
    alert(`Por favor selecciona imágenes para el grupo ${groupId}`);
    return false;
  }
  
  const label = labelInput.value.trim();
  const files = filesInput.files;
  
  setStatus(`Cargando imágenes del grupo ${groupId}...`);
  
  try {
    const formData = new FormData();
    formData.append("group_id", groupId);
    formData.append("label", label);
    
    for (let file of files) {
      formData.append("files", file);
    }
    
    const response = await fetch(resolveUrl("/external-metrics/upload-group"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error en grupo ${groupId}: ${error.detail}`);
      return false;
    }
    
    const data = await response.json();
    externalMetricsState.groupsData[groupId] = {
      label: label,
      files: files.length,
      uploaded: data.num_images_uploaded
    };
    
    const statusDiv = document.getElementById(`group-status-${groupId}`);
    statusDiv.innerHTML = `✅ Cargadas ${data.num_images_uploaded} imágenes de "${label}"`;
    statusDiv.style.color = "#4caf50";
    
    setStatus(`Grupo ${groupId} cargado exitosamente`);
    return true;
    
  } catch (err) {
    alert(`Error cargando grupo ${groupId}: ${err.message}`);
    setStatus("Error en carga");
    return false;
  }
}

async function uploadAllGroups() {
  let allUploaded = true;
  
  for (let i = 0; i < externalMetricsState.numGroups; i++) {
    const filesInput = document.getElementById(`group-files-${i}`);
    if (filesInput.files.length > 0) {
      const uploaded = await uploadGroupImages(i);
      if (!uploaded) allUploaded = false;
    }
  }
  
  return allUploaded;
}

async function calculateExternalMetrics() {
  // Verificar que todos los grupos tengan imágenes
  let hasAllGroups = true;
  for (let i = 0; i < externalMetricsState.numGroups; i++) {
    const filesInput = document.getElementById(`group-files-${i}`);
    if (!filesInput.files || filesInput.files.length === 0) {
      alert(`Por favor carga imágenes en todos los grupos. Grupo ${i} está vacío.`);
      return;
    }
  }
  
  // Primero subir todos los grupos
  setStatus("Cargando todas las imágenes...");
  const allUploaded = await uploadAllGroups();
  
  if (!allUploaded) {
    alert("Error cargando algunos grupos. Intenta de nuevo.");
    return;
  }
  
  setStatus("Calculando ARI/AMI/NMI...");
  
  try {
    const formData = new FormData();
    if (externalCapacitiesInput && externalCapacitiesInput.value.trim()) {
      formData.append("capacities", externalCapacitiesInput.value.trim());
    }

    const response = await fetch(resolveUrl("/external-metrics/calculate"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      return;
    }
    
    const data = await response.json();
    
    // Mostrar resultados de métricas
    document.getElementById("result-ari").textContent = data.external_metrics.ARI.toFixed(4);
    document.getElementById("result-ami").textContent = data.external_metrics.AMI.toFixed(4);
    document.getElementById("result-nmi").textContent = data.external_metrics.NMI.toFixed(4);
    document.getElementById("result-dunn").textContent = data.internal_metrics.dunn_index.toFixed(4);
    document.getElementById("result-silhouette").textContent = data.internal_metrics.silhouette_coefficient.toFixed(4);
    
    const summary = data.summary;
    document.getElementById("metrics-summary").innerHTML = `
      <strong>Resumen:</strong><br>
      • Total de imágenes: ${summary.num_images}<br>
      • Número de clusters: ${summary.num_clusters}<br>
      • Grupos etiquetados: ${summary.true_groups}<br>
      • Clusters predichos: ${summary.predicted_clusters}
    `;
    
    // Renderizar clusters con imágenes
    renderClustersVisualization(data.clusters);
    
    externalMetricsResults.style.display = "block";
    setStatus("✅ Métricas calculadas exitosamente");
    
  } catch (err) {
    alert(`Error calculando métricas: ${err.message}`);
    setStatus("Error en cálculo de métricas");
  }
}

function renderClustersVisualization(clustersData) {
  if (!clustersVisualization) return;
  
  clustersVisualization.innerHTML = "";
  
  // Ordenar clusters por ID
  const sortedClusters = Object.keys(clustersData).sort((a, b) => parseInt(a) - parseInt(b));
  
  sortedClusters.forEach(clusterId => {
    const images = clustersData[clusterId];
    
    // Crear contenedor para el cluster
    const clusterDiv = document.createElement("div");
    clusterDiv.style.cssText = `
      margin-bottom: 20px;
      padding: 15px;
      border: 2px solid #2196F3;
      border-radius: 8px;
      background: #f0f7ff;
    `;
    
    // Título del cluster
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = `
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    `;
    
    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = `
      <strong style="font-size: 16px; color: #1976d2;">🎯 Cluster ${clusterId}</strong>
      <span style="font-size: 12px; color: #666; margin-left: 10px;">(${images.length} imágenes)</span>
    `;
    titleDiv.appendChild(titleSpan);
    clusterDiv.appendChild(titleDiv);
    
    // Galería de imágenes
    const galleryDiv = document.createElement("div");
    galleryDiv.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
    `;
    
    images.forEach(img => {
      const cardDiv = document.createElement("div");
      cardDiv.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 8px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
      `;
      
      cardDiv.onmouseover = () => {
        cardDiv.style.transform = "scale(1.05)";
        cardDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      };
      
      cardDiv.onmouseout = () => {
        cardDiv.style.transform = "scale(1)";
        cardDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      };
      
      // Badge con etiqueta verdadera
      const badgeColor = "#1976d2";
      const imageUrl = img.binarized_url || img.processed_url || img.original_url;
      const imageTag = imageUrl
        ? `<img src="${resolveUrl(imageUrl)}" alt="${img.filename}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 4px; margin-bottom: 6px;" />`
        : `<div style="height: 90px; display: flex; align-items: center; justify-content: center; background: #eee; border-radius: 4px; margin-bottom: 6px; font-size: 11px;">Sin imagen</div>`;

      cardDiv.innerHTML = `
        ${imageTag}
        <div style="margin-bottom: 5px;">
          <span style="
            display: inline-block;
            background: ${badgeColor};
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: bold;
          ">${img.true_label}</span>
        </div>
        <div style="font-size: 10px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${img.filename}
        </div>
      `;
      
      galleryDiv.appendChild(cardDiv);
    });
    
    clusterDiv.appendChild(galleryDiv);
    clustersVisualization.appendChild(clusterDiv);
  });
}

async function resetExternalMetrics() {
  if (confirm("¿Deseas reiniciar la sesión de métricas externas?")) {
    try {
      await fetch(resolveUrl("/external-metrics/reset"), {
        method: "DELETE"
      });
      
      externalMetricsState = { numGroups: 0, groupsData: {} };
      externalGroupsContainer.style.display = "none";
      externalMetricsResults.style.display = "none";
      externalNumGroupsInput.value = "";
      if (externalCapacitiesInput) {
        externalCapacitiesInput.value = "";
      }
      externalGroupsInputs.innerHTML = "";
      if (clustersVisualization) {
        clustersVisualization.innerHTML = "";
      }
      
      setStatus("Sesión reiniciada");
    } catch (err) {
      alert(`Error reiniciando: ${err.message}`);
    }
  }
}

// ==========================================
// FUNCIONES PARA EXTERNAL METRICS HU
// ==========================================

async function initializeExternalMetricsHu() {
  const numGroups = parseInt(externalHuNumGroupsInput.value);
  
  if (!numGroups || numGroups < 2) {
    alert("Por favor indica un número válido de grupos (mínimo 2)");
    return;
  }
  
  setStatus("Inicializando sesión de métricas externas (Hu)...");
  
  try {
    const response = await fetch(resolveUrl("/external-metrics-hu/initialize"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `num_clusters=${numGroups}`
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      setStatus("Error en inicialización");
      return;
    }
    
    const data = await response.json();
    externalMetricsHuState.numGroups = numGroups;
    externalMetricsHuState.groupsData = {};
    
    // Crear inputs para cada grupo
    externalHuGroupsInputs.innerHTML = "";
    for (let i = 0; i < numGroups; i++) {
      const groupDiv = document.createElement("div");
      groupDiv.className = "group-upload-section";
      groupDiv.style.cssText = `
        border: 2px dashed #2196F3;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 15px;
        background: #f5f5f5;
      `;
      
      groupDiv.innerHTML = `
        <h4>📁 Grupo ${i} (Carpeta ${i})</h4>
        <div style="margin-bottom: 10px;">
          <label>Etiqueta/Clase:</label>
          <input 
            type="text" 
            id="group-hu-label-${i}" 
            placeholder="Ej: Gato, Perro, etc." 
            style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;"
          />
        </div>
        <div style="margin-bottom: 10px;">
          <label>Carga imágenes de esta carpeta:</label>
          <input 
            type="file" 
            id="group-hu-files-${i}" 
            multiple 
            accept="image/*"
            style="display: block; margin-top: 5px;"
          />
        </div>
        <div id="group-hu-status-${i}" style="font-size: 12px; color: #666;"></div>
      `;
      
      externalHuGroupsInputs.appendChild(groupDiv);
      externalMetricsHuState.groupsData[i] = { label: "", files: null };
    }
    
    externalHuGroupsContainer.style.display = "block";
    setStatus(`Sesión Hu inicializada para ${numGroups} grupos`);
    
  } catch (err) {
    alert(`Error: ${err.message}`);
    setStatus("Error en inicialización");
  }
}

async function uploadGroupImagesHu(groupId) {
  const labelInput = document.getElementById(`group-hu-label-${groupId}`);
  const filesInput = document.getElementById(`group-hu-files-${groupId}`);
  
  if (!labelInput.value.trim()) {
    alert(`Por favor ingresa una etiqueta para el grupo ${groupId}`);
    return false;
  }
  
  if (!filesInput.files || filesInput.files.length === 0) {
    alert(`Por favor selecciona imágenes para el grupo ${groupId}`);
    return false;
  }
  
  const label = labelInput.value.trim();
  const files = filesInput.files;
  
  setStatus(`Cargando imágenes del grupo ${groupId}...`);
  
  try {
    const formData = new FormData();
    formData.append("group_id", groupId);
    formData.append("label", label);
    
    for (let file of files) {
      formData.append("files", file);
    }
    
    const response = await fetch(resolveUrl("/external-metrics-hu/upload-group"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error en grupo ${groupId}: ${error.detail}`);
      return false;
    }
    
    const data = await response.json();
    externalMetricsHuState.groupsData[groupId] = {
      label: label,
      files: files.length,
      uploaded: data.num_images_uploaded
    };
    
    const statusDiv = document.getElementById(`group-hu-status-${groupId}`);
    statusDiv.innerHTML = `✅ Cargadas ${data.num_images_uploaded} imágenes de "${label}"`;
    statusDiv.style.color = "#4caf50";
    
    setStatus(`Grupo ${groupId} cargado exitosamente`);
    return true;
    
  } catch (err) {
    alert(`Error cargando grupo ${groupId}: ${err.message}`);
    setStatus("Error en carga");
    return false;
  }
}

async function uploadAllGroupsHu() {
  let allUploaded = true;
  
  for (let i = 0; i < externalMetricsHuState.numGroups; i++) {
    const filesInput = document.getElementById(`group-hu-files-${i}`);
    if (filesInput.files.length > 0) {
      const uploaded = await uploadGroupImagesHu(i);
      if (!uploaded) allUploaded = false;
    }
  }
  
  return allUploaded;
}

async function calculateExternalMetricsHu() {
  // Verificar que todos los grupos tengan imágenes
  let hasAllGroups = true;
  for (let i = 0; i < externalMetricsHuState.numGroups; i++) {
    const filesInput = document.getElementById(`group-hu-files-${i}`);
    if (!filesInput.files || filesInput.files.length === 0) {
      alert(`Por favor carga imágenes en todos los grupos. Grupo ${i} está vacío.`);
      return;
    }
  }
  
  // Primero subir todos los grupos
  setStatus("Cargando todas las imágenes (Hu)...");
  const allUploaded = await uploadAllGroupsHu();
  
  if (!allUploaded) {
    alert("Error cargando algunos grupos. Intenta de nuevo.");
    return;
  }
  
  setStatus("Calculando ARI/AMI/NMI (Hu)...");
  
  try {
    const formData = new FormData();
    if (externalHuCapacitiesInput && externalHuCapacitiesInput.value.trim()) {
      formData.append("capacities", externalHuCapacitiesInput.value.trim());
    }

    const response = await fetch(resolveUrl("/external-metrics-hu/calculate"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      return;
    }
    
    const data = await response.json();
    
    // Mostrar resultados de métricas
    document.getElementById("result-hu-ari").textContent = data.external_metrics.ARI.toFixed(4);
    document.getElementById("result-hu-ami").textContent = data.external_metrics.AMI.toFixed(4);
    document.getElementById("result-hu-nmi").textContent = data.external_metrics.NMI.toFixed(4);
    document.getElementById("result-hu-dunn").textContent = data.internal_metrics.dunn_index.toFixed(4);
    document.getElementById("result-hu-silhouette").textContent = data.internal_metrics.silhouette_coefficient.toFixed(4);
    
    const summary = data.summary;
    const summaryDiv = document.getElementById("metrics-hu-summary");
    if (summaryDiv) {
      summaryDiv.innerHTML = `
        <strong>Resumen:</strong><br>
        • Total de imágenes: ${summary.num_images}<br>
        • Número de clusters: ${summary.num_clusters}<br>
        • Grupos etiquetados: ${summary.true_groups}<br>
        • Clusters predichos: ${summary.predicted_clusters}
      `;
    }
    
    // Renderizar clusters con imágenes
    renderClustersVisualizationHu(data.clusters);
    
    externalMetricsHuResults.style.display = "block";
    setStatus("✅ Métricas Hu calculadas exitosamente");
    
  } catch (err) {
    alert(`Error calculando métricas: ${err.message}`);
    setStatus("Error en cálculo de métricas");
  }
}

function renderClustersVisualizationHu(clustersData) {
  if (!clustersHuVisualization) return;
  
  clustersHuVisualization.innerHTML = "";
  
  // Ordenar clusters por ID
  const sortedClusters = Object.keys(clustersData).sort((a, b) => parseInt(a) - parseInt(b));
  
  sortedClusters.forEach(clusterId => {
    const images = clustersData[clusterId];
    
    // Crear contenedor para el cluster
    const clusterDiv = document.createElement("div");
    clusterDiv.style.cssText = `
      margin-bottom: 20px;
      padding: 15px;
      border: 2px solid #2196F3;
      border-radius: 8px;
      background: #f0f7ff;
    `;
    
    // Título del cluster
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = `
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      gap: 10px;
    `;
    
    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = `
      <strong style="font-size: 16px; color: #1976d2;">🎯 Cluster ${clusterId}</strong>
      <span style="font-size: 12px; color: #666; margin-left: 10px;">(${images.length} imágenes)</span>
    `;
    titleDiv.appendChild(titleSpan);
    clusterDiv.appendChild(titleDiv);
    
    // Galería de imágenes
    const galleryDiv = document.createElement("div");
    galleryDiv.style.cssText = `
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
    `;
    
    images.forEach(img => {
      const cardDiv = document.createElement("div");
      cardDiv.style.cssText = `
        background: white;
        border: 1px solid #ddd;
        border-radius: 6px;
        padding: 8px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition: transform 0.2s;
      `;
      
      cardDiv.onmouseover = () => {
        cardDiv.style.transform = "scale(1.05)";
        cardDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      };
      
      cardDiv.onmouseout = () => {
        cardDiv.style.transform = "scale(1)";
        cardDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      };
      
      // Badge con etiqueta verdadera
      const badgeColor = "#1976d2";
      const imageUrl = img.binarized_url || img.processed_url || img.original_url;
      const imageTag = imageUrl
        ? `<img src="${resolveUrl(imageUrl)}" alt="${img.filename}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 4px; margin-bottom: 6px;" />`
        : `<div style="height: 90px; display: flex; align-items: center; justify-content: center; background: #eee; border-radius: 4px; margin-bottom: 6px; font-size: 11px;">Sin imagen</div>`;

      cardDiv.innerHTML = `
        ${imageTag}
        <div style="margin-bottom: 5px;">
          <span style="
            display: inline-block;
            background: ${badgeColor};
            color: white;
            padding: 2px 6px;
            border-radius: 3px;
            font-size: 11px;
            font-weight: bold;
          ">${img.true_label}</span>
        </div>
        <div style="font-size: 10px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
          ${img.filename}
        </div>
      `;
      
      galleryDiv.appendChild(cardDiv);
    });
    
    clusterDiv.appendChild(galleryDiv);
    clustersHuVisualization.appendChild(clusterDiv);
  });
}

async function resetExternalMetricsHu() {
  if (confirm("¿Deseas reiniciar la sesión de métricas externas (Hu)?")) {
    try {
      await fetch(resolveUrl("/external-metrics-hu/reset"), {
        method: "DELETE"
      });
      
      externalMetricsHuState = { numGroups: 0, groupsData: {} };
      externalHuGroupsContainer.style.display = "none";
      externalMetricsHuResults.style.display = "none";
      externalHuNumGroupsInput.value = "";
      if (externalHuCapacitiesInput) {
        externalHuCapacitiesInput.value = "";
      }
      externalHuGroupsInputs.innerHTML = "";
      if (clustersHuVisualization) {
        clustersHuVisualization.innerHTML = "";
      }
      
      setStatus("Sesión Hu reiniciada");
    } catch (err) {
      alert(`Error reiniciando: ${err.message}`);
    }
  }
}

// Event listeners para External Metrics
if (initExternalBtn) {
  initExternalBtn.addEventListener("click", initializeExternalMetrics);
}

if (calculateMetricsBtn) {
  calculateMetricsBtn.addEventListener("click", calculateExternalMetrics);
}

if (resetExternalBtn) {
  resetExternalBtn.addEventListener("click", resetExternalMetrics);
}

// Event listeners para Hu External Metrics
if (initExternalHuBtn) {
  initExternalHuBtn.addEventListener("click", initializeExternalMetricsHu);
}

if (calculateMetricsHuBtn) {
  calculateMetricsHuBtn.addEventListener("click", calculateExternalMetricsHu);
}

if (resetExternalHuBtn) {
  resetExternalHuBtn.addEventListener("click", resetExternalMetricsHu);
}

// Event listeners para Zernike External Metrics
if (initExternalZernikeBtn) {
  initExternalZernikeBtn.addEventListener("click", initializeExternalMetricsZernike);
}

if (calculateMetricsZernikeBtn) {
  calculateMetricsZernikeBtn.addEventListener("click", calculateExternalMetricsZernike);
}

if (resetExternalZernikeBtn) {
  resetExternalZernikeBtn.addEventListener("click", resetExternalMetricsZernike);
}

// Event listeners para SIFT External Metrics
if (initExternalSiftBtn) {
  initExternalSiftBtn.addEventListener("click", initializeExternalMetricsSift);
}

if (calculateMetricsSiftBtn) {
  calculateMetricsSiftBtn.addEventListener("click", calculateExternalMetricsSift);
}

if (resetExternalSiftBtn) {
  resetExternalSiftBtn.addEventListener("click", resetExternalMetricsSift);
}

// Event listeners para HOG External Metrics
if (initExternalHogBtn) {
  initExternalHogBtn.addEventListener("click", initializeExternalMetricsHog);
}

if (calculateMetricsHogBtn) {
  calculateMetricsHogBtn.addEventListener("click", calculateExternalMetricsHog);
}

if (resetExternalHogBtn) {
  resetExternalHogBtn.addEventListener("click", resetExternalMetricsHog);
}

// Event listeners para CNN External Metrics
if (initExternalCnnBtn) {
  initExternalCnnBtn.addEventListener("click", initializeExternalMetricsCnn);
}

if (calculateMetricsCnnBtn) {
  calculateMetricsCnnBtn.addEventListener("click", calculateExternalMetricsCnn);
}

if (resetExternalCnnBtn) {
  resetExternalCnnBtn.addEventListener("click", resetExternalMetricsCnn);
}

["dragenter", "dragover"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropZone.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  dropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropZone.classList.remove("dragover");
  });
});

dropZone.addEventListener("drop", (event) => {
  const files = event.dataTransfer.files;
  fileInput.files = files;
  setStatus(`${files.length} archivo(s) listo(s)`);
});

modeRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    const mode = getMode();
    const momentosConfig = document.getElementById("momentos-config");
    const huConfig = document.getElementById("hu-config");
    const zernikeConfig = document.getElementById("zernike-config");
    const siftConfig = document.getElementById("sift-config");
    const hogConfig = document.getElementById("hog-config");
    const cnnConfig = document.getElementById("cnn-config");
    const externalMetricsConfig = document.getElementById("external-metrics-config");
    const externalMetricsHuConfig = document.getElementById("external-metrics-hu-config");
    const externalMetricsZernikeConfig = document.getElementById("external-metrics-zernike-config");
    const externalMetricsSiftConfig = document.getElementById("external-metrics-sift-config");
    const externalMetricsHogConfig = document.getElementById("external-metrics-hog-config");
    const externalMetricsCnnConfig = document.getElementById("external-metrics-cnn-config");
    
    // Ocultar todas las configuraciones
    if (momentosConfig) momentosConfig.style.display = "none";
    if (huConfig) huConfig.style.display = "none";
    if (zernikeConfig) zernikeConfig.style.display = "none";
    if (siftConfig) siftConfig.style.display = "none";
    if (hogConfig) hogConfig.style.display = "none";
    if (cnnConfig) cnnConfig.style.display = "none";
    if (externalMetricsConfig) externalMetricsConfig.style.display = "none";
    if (externalMetricsHuConfig) externalMetricsHuConfig.style.display = "none";
    if (externalMetricsZernikeConfig) externalMetricsZernikeConfig.style.display = "none";
    if (externalMetricsSiftConfig) externalMetricsSiftConfig.style.display = "none";
    if (externalMetricsHogConfig) externalMetricsHogConfig.style.display = "none";
    if (externalMetricsCnnConfig) externalMetricsCnnConfig.style.display = "none";
    
    // Mostrar configuración según el modo
    if (mode === "momentos" && momentosConfig) {
      momentosConfig.style.display = "flex";
    } else if (mode === "hu" && huConfig) {
      huConfig.style.display = "flex";
    } else if (mode === "zernike" && zernikeConfig) {
      zernikeConfig.style.display = "flex";
    } else if (mode === "sift" && siftConfig) {
      siftConfig.style.display = "flex";
    } else if (mode === "hog" && hogConfig) {
      hogConfig.style.display = "flex";
    } else if (mode === "cnn" && cnnConfig) {
      cnnConfig.style.display = "flex";
    } else if (mode === "external-metrics" && externalMetricsConfig) {
      externalMetricsConfig.style.display = "block";
    } else if (mode === "external-metrics-hu" && externalMetricsHuConfig) {
      externalMetricsHuConfig.style.display = "block";
    } else if (mode === "external-metrics-zernike" && externalMetricsZernikeConfig) {
      externalMetricsZernikeConfig.style.display = "block";
    } else if (mode === "external-metrics-sift" && externalMetricsSiftConfig) {
      externalMetricsSiftConfig.style.display = "block";
    } else if (mode === "external-metrics-hog" && externalMetricsHogConfig) {
      externalMetricsHogConfig.style.display = "block";
    } else if (mode === "external-metrics-cnn" && externalMetricsCnnConfig) {
      externalMetricsCnnConfig.style.display = "block";
    }
    
    if (mode === "gallery") {
      resultsSection.style.display = "none";
      gallery.parentElement.style.display = "block";
    } else {
      state.results = [];
      results.innerHTML = "";
      resultsSection.style.display = "none";
    }
  });
});

// ==========================================
// FUNCIONES PARA EXTERNAL METRICS ZERNIKE
// ==========================================

async function initializeExternalMetricsZernike() {
  const numGroups = parseInt(externalZernikeNumGroupsInput.value);
  
  if (!numGroups || numGroups < 2) {
    alert("Por favor indica un número válido de grupos (mínimo 2)");
    return;
  }
  
  setStatus("Inicializando sesión de métricas externas (Zernike)...");
  
  try {
    const response = await fetch(resolveUrl("/external-metrics-zernike/initialize"), {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `num_clusters=${numGroups}`
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      setStatus("Error en inicialización");
      return;
    }
    
    const data = await response.json();
    externalMetricsZernikeState.numGroups = numGroups;
    externalMetricsZernikeState.groupsData = {};
    
    externalZernikeGroupsInputs.innerHTML = "";
    for (let i = 0; i < numGroups; i++) {
      const groupDiv = document.createElement("div");
      groupDiv.className = "group-upload-section";
      groupDiv.style.cssText = `border: 2px dashed #2196F3; border-radius: 8px; padding: 15px; margin-bottom: 15px; background: #f5f5f5;`;
      
      groupDiv.innerHTML = `
        <h4>📁 Grupo ${i} (Carpeta ${i})</h4>
        <div style="margin-bottom: 10px;"><label>Etiqueta/Clase:</label><input type="text" id="group-zernike-label-${i}" placeholder="Ej: Gato, Perro, etc." style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" /></div>
        <div style="margin-bottom: 10px;"><label>Carga imágenes de esta carpeta:</label><input type="file" id="group-zernike-files-${i}" multiple accept="image/*" style="display: block; margin-top: 5px;" /></div>
        <div id="group-zernike-status-${i}" style="font-size: 12px; color: #666;"></div>
      `;
      
      externalZernikeGroupsInputs.appendChild(groupDiv);
      externalMetricsZernikeState.groupsData[i] = { label: "", files: null };
    }
    
    externalZernikeGroupsContainer.style.display = "block";
    setStatus(`Sesión Zernike inicializada para ${numGroups} grupos`);
    
  } catch (err) {
    alert(`Error: ${err.message}`);
    setStatus("Error en inicialización");
  }
}

async function uploadGroupImagesZernike(groupId) {
  const labelInput = document.getElementById(`group-zernike-label-${groupId}`);
  const filesInput = document.getElementById(`group-zernike-files-${groupId}`);
  
  if (!labelInput.value.trim()) {
    alert(`Por favor ingresa una etiqueta para el grupo ${groupId}`);
    return false;
  }
  
  if (!filesInput.files || filesInput.files.length === 0) {
    alert(`Por favor selecciona imágenes para el grupo ${groupId}`);
    return false;
  }
  
  const label = labelInput.value.trim();
  const files = filesInput.files;
  
  setStatus(`Cargando imágenes del grupo ${groupId}...`);
  
  try {
    const formData = new FormData();
    formData.append("group_id", groupId);
    formData.append("label", label);
    
    for (let file of files) {
      formData.append("files", file);
    }
    
    const response = await fetch(resolveUrl("/external-metrics-zernike/upload-group"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error en grupo ${groupId}: ${error.detail}`);
      return false;
    }
    
    const data = await response.json();
    externalMetricsZernikeState.groupsData[groupId] = {
      label: label,
      files: files.length,
      uploaded: data.num_images_uploaded
    };
    
    const statusDiv = document.getElementById(`group-zernike-status-${groupId}`);
    statusDiv.innerHTML = `✅ Cargadas ${data.num_images_uploaded} imágenes de "${label}"`;
    statusDiv.style.color = "#4caf50";
    
    setStatus(`Grupo ${groupId} cargado exitosamente`);
    return true;
    
  } catch (err) {
    alert(`Error cargando grupo ${groupId}: ${err.message}`);
    setStatus("Error en carga");
    return false;
  }
}

async function uploadAllGroupsZernike() {
  let allUploaded = true;
  
  for (let i = 0; i < externalMetricsZernikeState.numGroups; i++) {
    const filesInput = document.getElementById(`group-zernike-files-${i}`);
    if (filesInput.files.length > 0) {
      const uploaded = await uploadGroupImagesZernike(i);
      if (!uploaded) allUploaded = false;
    }
  }
  
  return allUploaded;
}

async function calculateExternalMetricsZernike() {
  for (let i = 0; i < externalMetricsZernikeState.numGroups; i++) {
    const filesInput = document.getElementById(`group-zernike-files-${i}`);
    if (!filesInput.files || filesInput.files.length === 0) {
      alert(`Por favor carga imágenes en todos los grupos. Grupo ${i} está vacío.`);
      return;
    }
  }
  
  setStatus("Cargando todas las imágenes (Zernike)...");
  const allUploaded = await uploadAllGroupsZernike();
  
  if (!allUploaded) {
    alert("Error cargando algunos grupos. Intenta de nuevo.");
    return;
  }
  
  setStatus("Calculando ARI/AMI/NMI (Zernike)...");
  
  try {
    const formData = new FormData();
    if (externalZernikeCapacitiesInput && externalZernikeCapacitiesInput.value.trim()) {
      formData.append("capacities", externalZernikeCapacitiesInput.value.trim());
    }

    const response = await fetch(resolveUrl("/external-metrics-zernike/calculate"), {
      method: "POST",
      body: formData
    });
    
    if (!response.ok) {
      const error = await response.json();
      alert(`Error: ${error.detail}`);
      return;
    }
    
    const data = await response.json();
    
    document.getElementById("result-zernike-ari").textContent = data.external_metrics.ARI.toFixed(4);
    document.getElementById("result-zernike-ami").textContent = data.external_metrics.AMI.toFixed(4);
    document.getElementById("result-zernike-nmi").textContent = data.external_metrics.NMI.toFixed(4);
    document.getElementById("result-zernike-dunn").textContent = data.internal_metrics.dunn_index.toFixed(4);
    document.getElementById("result-zernike-silhouette").textContent = data.internal_metrics.silhouette_coefficient.toFixed(4);
    
    const summary = data.summary;
    const summaryDiv = document.getElementById("metrics-zernike-summary");
    if (summaryDiv) {
      summaryDiv.innerHTML = `<strong>Resumen:</strong><br>• Total de imágenes: ${summary.num_images}<br>• Número de clusters: ${summary.num_clusters}<br>• Grupos etiquetados: ${summary.true_groups}<br>• Clusters predichos: ${summary.predicted_clusters}`;
    }
    
    renderClustersVisualizationZernike(data.clusters);
    
    externalMetricsZernikeResults.style.display = "block";
    setStatus("✅ Métricas Zernike calculadas exitosamente");
    
  } catch (err) {
    alert(`Error calculando métricas: ${err.message}`);
    setStatus("Error en cálculo de métricas");
  }
}

function renderClustersVisualizationZernike(clustersData) {
  if (!clustersZernikeVisualization) return;
  
  clustersZernikeVisualization.innerHTML = "";
  
  const sortedClusters = Object.keys(clustersData).sort((a, b) => parseInt(a) - parseInt(b));
  
  sortedClusters.forEach(clusterId => {
    const images = clustersData[clusterId];
    
    const clusterDiv = document.createElement("div");
    clusterDiv.style.cssText = `margin-bottom: 20px; padding: 15px; border: 2px solid #2196F3; border-radius: 8px; background: #f0f7ff;`;
    
    const titleDiv = document.createElement("div");
    titleDiv.style.cssText = `display: flex; align-items: center; margin-bottom: 10px; gap: 10px;`;
    
    const titleSpan = document.createElement("span");
    titleSpan.innerHTML = `<strong style="font-size: 16px; color: #1976d2;">🎯 Cluster ${clusterId}</strong><span style="font-size: 12px; color: #666; margin-left: 10px;">(${images.length} imágenes)</span>`;
    titleDiv.appendChild(titleSpan);
    clusterDiv.appendChild(titleDiv);
    
    const galleryDiv = document.createElement("div");
    galleryDiv.style.cssText = `display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px;`;
    
    images.forEach(img => {
      const cardDiv = document.createElement("div");
      cardDiv.style.cssText = `background: white; border: 1px solid #ddd; border-radius: 6px; padding: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s;`;
      
      cardDiv.onmouseover = () => {
        cardDiv.style.transform = "scale(1.05)";
        cardDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      };
      
      cardDiv.onmouseout = () => {
        cardDiv.style.transform = "scale(1)";
        cardDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
      };
      
      const badgeColor = "#1976d2";
      const imageUrl = img.binarized_url || img.processed_url || img.original_url;
      const imageTag = imageUrl
        ? `<img src="${resolveUrl(imageUrl)}" alt="${img.filename}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 4px; margin-bottom: 6px;" />`
        : `<div style="height: 90px; display: flex; align-items: center; justify-content: center; background: #eee; border-radius: 4px; margin-bottom: 6px; font-size: 11px;">Sin imagen</div>`;

      cardDiv.innerHTML = `
        ${imageTag}
        <div style="margin-bottom: 5px;"><span style="display: inline-block; background: ${badgeColor}; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; font-weight: bold;">${img.true_label}</span></div>
        <div style="font-size: 10px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${img.filename}</div>
      `;
      
      galleryDiv.appendChild(cardDiv);
    });
    
    clusterDiv.appendChild(galleryDiv);
    clustersZernikeVisualization.appendChild(clusterDiv);
  });
}

async function resetExternalMetricsZernike() {
  if (confirm("¿Deseas reiniciar la sesión de métricas externas (Zernike)?")) {
    try {
      await fetch(resolveUrl("/external-metrics-zernike/reset"), {
        method: "DELETE"
      });
      
      externalMetricsZernikeState = { numGroups: 0, groupsData: {} };
      externalZernikeGroupsContainer.style.display = "none";
      externalMetricsZernikeResults.style.display = "none";
      externalZernikeNumGroupsInput.value = "";
      if (externalZernikeCapacitiesInput) {
        externalZernikeCapacitiesInput.value = "";
      }
      externalZernikeGroupsInputs.innerHTML = "";
      if (clustersZernikeVisualization) {
        clustersZernikeVisualization.innerHTML = "";
      }
      
      setStatus("Sesión Zernike reiniciada");
    } catch (err) {
      alert(`Error reiniciando: ${err.message}`);
    }
  }
}

// ==========================================
// FUNCIONES PARA EXTERNAL METRICS SIFT, HOG, CNN
// ==========================================

// Helper genérico para crear funciones de external metrics
function createExternalMetricsFunctions(methodName, methodUrl, stateObj, refs) {
  return {
    async initialize() {
      const numGroups = parseInt(refs.numGroupsInput.value);
      
      if (!numGroups || numGroups < 2) {
        alert("Por favor indica un número válido de grupos (mínimo 2)");
        return;
      }
      
      setStatus(`Inicializando sesión de métricas externas (${methodName})...`);
      
      try {
        const response = await fetch(resolveUrl(`/external-metrics-${methodUrl}/initialize`), {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `num_clusters=${numGroups}`
        });
        
        if (!response.ok) {
          const error = await response.json();
          alert(`Error: ${error.detail}`);
          setStatus("Error en inicialización");
          return;
        }
        
        const data = await response.json();
        stateObj.numGroups = numGroups;
        stateObj.groupsData = {};
        
        refs.groupsInputs.innerHTML = "";
        for (let i = 0; i < numGroups; i++) {
          const groupDiv = document.createElement("div");
          groupDiv.className = "group-upload-section";
          groupDiv.style.cssText = `border: 2px dashed #2196F3; border-radius: 8px; padding: 15px; margin-bottom: 15px; background: #f5f5f5;`;
          
          groupDiv.innerHTML = `
            <h4>📁 Grupo ${i} (Carpeta ${i})</h4>
            <div style="margin-bottom: 10px;"><label>Etiqueta/Clase:</label><input type="text" id="group-${methodUrl}-label-${i}" placeholder="Ej: Gato, Perro, etc." style="width: 100%; padding: 8px; border: 1px solid #ddd; border-radius: 4px;" /></div>
            <div style="margin-bottom: 10px;"><label>Carga imágenes de esta carpeta:</label><input type="file" id="group-${methodUrl}-files-${i}" multiple accept="image/*" style="display: block; margin-top: 5px;" /></div>
            <div id="group-${methodUrl}-status-${i}" style="font-size: 12px; color: #666;"></div>
          `;
          
          refs.groupsInputs.appendChild(groupDiv);
          stateObj.groupsData[i] = { label: "", files: null };
        }
        
        refs.groupsContainer.style.display = "block";
        setStatus(`Sesión ${methodName} inicializada para ${numGroups} grupos`);
        
      } catch (err) {
        alert(`Error: ${err.message}`);
        setStatus("Error en inicialización");
      }
    },

    async uploadGroup(groupId) {
      const labelInput = document.getElementById(`group-${methodUrl}-label-${groupId}`);
      const filesInput = document.getElementById(`group-${methodUrl}-files-${groupId}`);
      
      if (!labelInput.value.trim()) {
        alert(`Por favor ingresa una etiqueta para el grupo ${groupId}`);
        return false;
      }
      
      if (!filesInput.files || filesInput.files.length === 0) {
        alert(`Por favor selecciona imágenes para el grupo ${groupId}`);
        return false;
      }
      
      const label = labelInput.value.trim();
      const files = filesInput.files;
      
      setStatus(`Cargando imágenes del grupo ${groupId}...`);
      
      try {
        const formData = new FormData();
        formData.append("group_id", groupId);
        formData.append("label", label);
        
        for (let file of files) {
          formData.append("files", file);
        }
        
        const response = await fetch(resolveUrl(`/external-metrics-${methodUrl}/upload-group`), {
          method: "POST",
          body: formData
        });
        
        if (!response.ok) {
          const error = await response.json();
          alert(`Error en grupo ${groupId}: ${error.detail}`);
          return false;
        }
        
        const data = await response.json();
        stateObj.groupsData[groupId] = {
          label: label,
          files: files.length,
          uploaded: data.num_images_uploaded
        };
        
        const statusDiv = document.getElementById(`group-${methodUrl}-status-${groupId}`);
        statusDiv.innerHTML = `✅ Cargadas ${data.num_images_uploaded} imágenes de "${label}"`;
        statusDiv.style.color = "#4caf50";
        
        setStatus(`Grupo ${groupId} cargado exitosamente`);
        return true;
        
      } catch (err) {
        alert(`Error cargando grupo ${groupId}: ${err.message}`);
        setStatus("Error en carga");
        return false;
      }
    },

    async uploadAllGroups() {
      let allUploaded = true;
      
      for (let i = 0; i < stateObj.numGroups; i++) {
        const filesInput = document.getElementById(`group-${methodUrl}-files-${i}`);
        if (filesInput.files.length > 0) {
          const uploaded = await this.uploadGroup(i);
          if (!uploaded) allUploaded = false;
        }
      }
      
      return allUploaded;
    },

    async calculate() {
      for (let i = 0; i < stateObj.numGroups; i++) {
        const filesInput = document.getElementById(`group-${methodUrl}-files-${i}`);
        if (!filesInput.files || filesInput.files.length === 0) {
          alert(`Por favor carga imágenes en todos los grupos. Grupo ${i} está vacío.`);
          return;
        }
      }
      
      setStatus(`Cargando todas las imágenes (${methodName})...`);
      const allUploaded = await this.uploadAllGroups();
      
      if (!allUploaded) {
        alert("Error cargando algunos grupos. Intenta de nuevo.");
        return;
      }
      
      setStatus(`Calculando ARI/AMI/NMI (${methodName})...`);
      
      try {
        const formData = new FormData();
        if (refs.capacitiesInput && refs.capacitiesInput.value.trim()) {
          formData.append("capacities", refs.capacitiesInput.value.trim());
        }

        const response = await fetch(resolveUrl(`/external-metrics-${methodUrl}/calculate`), {
          method: "POST",
          body: formData
        });
        
        if (!response.ok) {
          const error = await response.json();
          alert(`Error: ${error.detail}`);
          return;
        }
        
        const data = await response.json();
        
        document.getElementById(`result-${methodUrl}-ari`).textContent = data.external_metrics.ARI.toFixed(4);
        document.getElementById(`result-${methodUrl}-ami`).textContent = data.external_metrics.AMI.toFixed(4);
        document.getElementById(`result-${methodUrl}-nmi`).textContent = data.external_metrics.NMI.toFixed(4);
        document.getElementById(`result-${methodUrl}-dunn`).textContent = data.internal_metrics.dunn_index.toFixed(4);
        document.getElementById(`result-${methodUrl}-silhouette`).textContent = data.internal_metrics.silhouette_coefficient.toFixed(4);
        
        const summary = data.summary;
        const summaryDiv = document.getElementById(`metrics-${methodUrl}-summary`);
        if (summaryDiv) {
          summaryDiv.innerHTML = `<strong>Resumen:</strong><br>• Total de imágenes: ${summary.num_images}<br>• Número de clusters: ${summary.num_clusters}<br>• Grupos etiquetados: ${summary.true_groups}<br>• Clusters predichos: ${summary.predicted_clusters}`;
        }
        
        this.renderVisualization(data.clusters, refs.visualization);
        
        refs.results.style.display = "block";
        setStatus(`✅ Métricas ${methodName} calculadas exitosamente`);
        
      } catch (err) {
        alert(`Error calculando métricas: ${err.message}`);
        setStatus("Error en cálculo de métricas");
      }
    },

    renderVisualization(clustersData, container) {
      if (!container) return;
      
      container.innerHTML = "";
      
      const sortedClusters = Object.keys(clustersData).sort((a, b) => parseInt(a) - parseInt(b));
      
      sortedClusters.forEach(clusterId => {
        const images = clustersData[clusterId];
        
        const clusterDiv = document.createElement("div");
        clusterDiv.style.cssText = `margin-bottom: 20px; padding: 15px; border: 2px solid #2196F3; border-radius: 8px; background: #f0f7ff;`;
        
        const titleSpan = document.createElement("span");
        titleSpan.innerHTML = `<strong style="font-size: 16px; color: #1976d2;">🎯 Cluster ${clusterId}</strong><span style="font-size: 12px; color: #666; margin-left: 10px;">(${images.length} imágenes)</span>`;
        clusterDiv.appendChild(titleSpan);
        
        const galleryDiv = document.createElement("div");
        galleryDiv.style.cssText = `display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 10px; margin-top: 10px;`;
        
        images.forEach(img => {
          const cardDiv = document.createElement("div");
          cardDiv.style.cssText = `background: white; border: 1px solid #ddd; border-radius: 6px; padding: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1); transition: transform 0.2s;`;
          
          cardDiv.onmouseover = () => {
            cardDiv.style.transform = "scale(1.05)";
            cardDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
          };
          
          cardDiv.onmouseout = () => {
            cardDiv.style.transform = "scale(1)";
            cardDiv.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
          };
          
          const imageUrl = img.binarized_url || img.processed_url || img.original_url;
          const imageTag = imageUrl
            ? `<img src="${resolveUrl(imageUrl)}" alt="${img.filename}" style="width: 100%; height: 90px; object-fit: cover; border-radius: 4px; margin-bottom: 6px;" />`
            : `<div style="height: 90px; display: flex; align-items: center; justify-content: center; background: #eee; border-radius: 4px; margin-bottom: 6px; font-size: 11px;">Sin imagen</div>`;

          cardDiv.innerHTML = `
            ${imageTag}
            <div style="margin-bottom: 5px;"><span style="display: inline-block; background: #1976d2; color: white; padding: 2px 6px; border-radius: 3px; font-size: 11px; font-weight: bold;">${img.true_label}</span></div>
            <div style="font-size: 10px; color: #666; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${img.filename}</div>
          `;
          
          galleryDiv.appendChild(cardDiv);
        });
        
        clusterDiv.appendChild(galleryDiv);
        container.appendChild(clusterDiv);
      });
    },

    async reset() {
      if (confirm(`¿Deseas reiniciar la sesión de métricas externas (${methodName})?`)) {
        try {
          await fetch(resolveUrl(`/external-metrics-${methodUrl}/reset`), {
            method: "DELETE"
          });
          
          stateObj.numGroups = 0;
          stateObj.groupsData = {};
          refs.groupsContainer.style.display = "none";
          refs.results.style.display = "none";
          refs.numGroupsInput.value = "";
          if (refs.capacitiesInput) {
            refs.capacitiesInput.value = "";
          }
          refs.groupsInputs.innerHTML = "";
          if (refs.visualization) {
            refs.visualization.innerHTML = "";
          }
          
          setStatus(`Sesión ${methodName} reiniciada`);
        } catch (err) {
          alert(`Error reiniciando: ${err.message}`);
        }
      }
    }
  };
}

// Crear funciones para SIFT
const siftFunctions = createExternalMetricsFunctions("SIFT", "sift", externalMetricsSiftState, {
  numGroupsInput: externalSiftNumGroupsInput,
  capacitiesInput: externalSiftCapacitiesInput,
  groupsContainer: externalSiftGroupsContainer,
  groupsInputs: externalSiftGroupsInputs,
  results: externalMetricsSiftResults,
  visualization: clustersSiftVisualization
});

async function initializeExternalMetricsSift() { await siftFunctions.initialize(); }
async function calculateExternalMetricsSift() { await siftFunctions.calculate(); }
async function resetExternalMetricsSift() { await siftFunctions.reset(); }

// Crear funciones para HOG
const hogFunctions = createExternalMetricsFunctions("HOG", "hog", externalMetricsHogState, {
  numGroupsInput: externalHogNumGroupsInput,
  capacitiesInput: externalHogCapacitiesInput,
  groupsContainer: externalHogGroupsContainer,
  groupsInputs: externalHogGroupsInputs,
  results: externalMetricsHogResults,
  visualization: clustersHogVisualization
});

async function initializeExternalMetricsHog() { await hogFunctions.initialize(); }
async function calculateExternalMetricsHog() { await hogFunctions.calculate(); }
async function resetExternalMetricsHog() { await hogFunctions.reset(); }

// Crear funciones para CNN
const cnnFunctions = createExternalMetricsFunctions("CNN", "cnn", externalMetricsCnnState, {
  numGroupsInput: externalCnnNumGroupsInput,
  capacitiesInput: externalCnnCapacitiesInput,
  groupsContainer: externalCnnGroupsContainer,
  groupsInputs: externalCnnGroupsInputs,
  results: externalMetricsCnnResults,
  visualization: clustersCnnVisualization
});

async function initializeExternalMetricsCnn() { await cnnFunctions.initialize(); }
async function calculateExternalMetricsCnn() { await cnnFunctions.calculate(); }
async function resetExternalMetricsCnn() { await cnnFunctions.reset(); }

function displayMetrics(metrics) {
  // Crear o actualizar el contenedor de métricas
  let metricsContainer = document.getElementById("metrics-display");
  if (!metricsContainer) {
    metricsContainer = document.createElement("div");
    metricsContainer.id = "metrics-display";
    metricsContainer.className = "metrics-container";
    resultsSection.insertBefore(metricsContainer, results);
  }

  const dunn = metrics.dunn_index !== undefined ? metrics.dunn_index : "N/A";
  const silhouette = metrics.silhouette_coefficient !== undefined ? metrics.silhouette_coefficient : "N/A";

  metricsContainer.innerHTML = `
    <div class="metrics-box">
      <h3>📊 Métricas de Evaluación</h3>
      <div class="metrics-grid">
        <div class="metric-item">
          <span class="metric-label">Índice de Dunn:</span>
          <span class="metric-value">${dunn}</span>
          <small>Mayor es mejor (separación entre clusters)</small>
        </div>
        <div class="metric-item">
          <span class="metric-label">Coeficiente de Silueta:</span>
          <span class="metric-value">${silhouette}</span>
          <small>Rango [-1, 1], mayor es mejor</small>
        </div>
      </div>
    </div>
  `;
}

loadExisting();

// Inicializar configuración de modo
const mode = getMode();
const momentosConfig = document.getElementById("momentos-config");
const huConfig = document.getElementById("hu-config");
if (mode === "momentos" && momentosConfig) {
  momentosConfig.style.display = "flex";
} else if (mode === "hu" && huConfig) {
  huConfig.style.display = "flex";
}

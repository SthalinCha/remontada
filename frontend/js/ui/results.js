/**
 * ui/results.js
 * Responsabilidad: Renderizado de resultados de clustering
 * - Mostrar clusters con imágenes agrupadas
 * - Visualización de centroides
 * - Organización por cluster_id
 */

import { state } from '../state.js';
import { resolveUrl } from '../utils.js';

export function renderResults(resultList, type) {
  const resultsSection = document.getElementById("results-section");
  const results = document.getElementById("results");
  const gallerySection = document.getElementById("gallery-section");
  
  resultsSection.style.display = "block";
  gallerySection.style.display = "none";

  if (!results) return;

  // Si es clustering con agrupación
  if (type === "momentos" || type === "hu" || type === "zernike" || 
      type === "sift" || type === "hog" || type === "cnn") {
    
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

      // Actualizar centroide
      const centroidEl = group.querySelector(".cluster-centroid");
      if (centroidEl && Array.isArray(item.ultimo_centroide)) {
        const c = item.ultimo_centroide.slice(0, 8)
          .map(v => Number(v).toFixed(3)).join(", ");
        centroidEl.textContent = `Centroide: [${c}, ...]`;
      }

      // Agregar imagen
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
  }
}

export function clearResultsDisplay() {
  const results = document.getElementById("results");
  const resultsSection = document.getElementById("results-section");
  
  if (results) {
    results.innerHTML = "";
  }
  
  // Limpiar estado de resultados
  state.results = [];
  
  // Ocultar sección de resultados al cambiar de modo
  if (resultsSection) {
    resultsSection.style.display = "none";
  }
}

export function renderClusterVisualization(clustersData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  container.innerHTML = "";
  
  const sortedClusters = Object.keys(clustersData).sort((a, b) => parseInt(a) - parseInt(b));
  
  sortedClusters.forEach(clusterId => {
    const images = clustersData[clusterId];
    
    // Usar el estilo moderno estándar
    const clusterDiv = document.createElement("div");
    clusterDiv.className = "cluster-group";
    clusterDiv.dataset.clusterId = clusterId;
    
    // Título
    const title = document.createElement("h3");
    title.textContent = `Cluster ${clusterId}`;
    clusterDiv.appendChild(title);
    
    // Info
    const info = document.createElement("div");
    info.className = "cluster-centroid";
    info.textContent = `${images.length} imágenes en este cluster`;
    clusterDiv.appendChild(info);
    
    // Grid
    const grid = document.createElement("div");
    grid.className = "cluster-grid";
    
    images.forEach(img => {
      const tile = document.createElement("div");
      tile.className = "cluster-item";
      
      // Imagen
      const imgEl = document.createElement("img");
      const imageUrl = img.binarized_url || img.processed_url || img.original_url;
      imgEl.src = resolveUrl(imageUrl);
      imgEl.alt = img.filename || "imagen";
      tile.appendChild(imgEl);
      
      // Badge de etiqueta real (si existe)
      if (img.true_label) {
        const labelBadge = document.createElement("div");
        labelBadge.className = "cluster-caption";
        labelBadge.innerHTML = `<span style="display: inline-block; background: #667eea; color: white; padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; margin-bottom: 4px;">🏷️ ${img.true_label}</span>`;
        tile.appendChild(labelBadge);
      }
      
      // Nombre del archivo
      const caption = document.createElement("div");
      caption.className = "cluster-caption";
      caption.textContent = img.filename || "imagen";
      tile.appendChild(caption);
      
      grid.appendChild(tile);
    });
    
    clusterDiv.appendChild(grid);
    container.appendChild(clusterDiv);
  });
}

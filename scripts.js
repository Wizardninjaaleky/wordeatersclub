// Simulated data for expositions
const expositions = [
    {
      title: "Faith and Works",
      content: "A detailed exposition on the relationship between faith and works.",
      date: "2025-01-10",
    },
    {
      title: "The Power of Prayer",
      content: "An exploration of the role of prayer in spiritual growth.",
      date: "2025-01-09",
    },
    {
      title: "Love Thy Neighbor",
      content: "A deep dive into loving others as yourself.",
      date: "2025-01-08",
    },
  ];
  
  // Dynamically load expositions into the page
  const expositionContainer = document.getElementById("expositions");
  if (expositionContainer) {
    expositions.forEach((exp) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-3";
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${exp.title}</h5>
            <p class="card-text">${exp.content}</p>
            <p class="text-muted">${exp.date}</p>
            <button class="btn btn-primary">Read More</button>
          </div>
        </div>
      `;
      expositionContainer.appendChild(card);
    });
  }
  document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filtered = expositions.filter((exp) =>
    exp.title.toLowerCase().includes(query) || exp.content.toLowerCase().includes(query)
  );

  // Clear current expositions
  expositionContainer.innerHTML = "";

  // Display filtered results
  filtered.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${exp.title}</h5>
          <p class="card-text">${exp.content}</p>
          <p class="text-muted">${exp.date}</p>
          <button class="btn btn-primary">Read More</button>
        </div>
      </div>
    `;
    expositionContainer.appendChild(card);
  });
});
document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filtered = expositions.filter((exp) =>
    exp.title.toLowerCase().includes(query) || exp.content.toLowerCase().includes(query)
  );

  // Clear current expositions
  expositionContainer.innerHTML = "";

  // Display filtered results
  filtered.forEach((exp) => {
    const card = document.createElement("div");
    card.className = "col-md-4 mb-3";
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${exp.title}</h5>
          <p class="card-text">${exp.content}</p>
          <p class="text-muted">${exp.date}</p>
          <button class="btn btn-primary">Read More</button>
        </div>
      </div>
    `;
    expositionContainer.appendChild(card);
  });
});
document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById("searchBar").value.toLowerCase();
    const filtered = expositions.filter((exp) =>
      exp.title.toLowerCase().includes(query) || exp.content.toLowerCase().includes(query)
    );
  
    // Clear current expositions
    expositionContainer.innerHTML = "";
  
    // Display filtered results
    filtered.forEach((exp) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-3";
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${exp.title}</h5>
            <p class="card-text">${exp.content}</p>
            <p class="text-muted">${exp.date}</p>
            <button class="btn btn-primary">Read More</button>
          </div>
        </div>
      `;
      expositionContainer.appendChild(card);
    });
  });
  
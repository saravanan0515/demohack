async function loadCollegeData() {
  const status = document.getElementById("status");

  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error("Could not load data.json");
    }

    const data = await response.json();
    document.title = data.college;

    const heading = document.createElement("h2");
    heading.textContent = data.college;
    document.body.appendChild(heading);

    const code = document.createElement("p");
    code.textContent = "Participant code: " + data.code;
    document.body.appendChild(code);

    const list = document.createElement("ul");
    data.labs.forEach((lab) => {
      const item = document.createElement("li");
      item.textContent = `${lab.name}: ${lab.opens} - ${lab.closes}`;
      list.appendChild(item);
    });
    document.body.appendChild(list);

    status.textContent = "Lab data loaded successfully.";
  } catch (error) {
    status.textContent = "Could not load college data. " + error.message;
  }
}

loadCollegeData();

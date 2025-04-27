// Array of links (you can add your own pages here)
const links = [
    { label: "Week 1 - Practice Review", url: "week1/index.html" },
    { label: "Week 2 Assignment", url: "week2/index.html" },
    { label: "Week 3 Project", url: "week3/index.html" },
    // Add more as you build your portfolio
  ];
  
  // Get the <ol> element by its ID
  const toc = document.getElementById("toc");
  
  // Loop through the links array
  links.forEach(link => {
    const li = document.createElement("li");        // Create <li>
    const a = document.createElement("a");          // Create <a>
    a.textContent = link.label;                     // Set the text
    a.href = link.url;                              // Set the href
    li.appendChild(a);                              // Add <a> to <li>
    toc.appendChild(li);                            // Add <li> to <ol>
  });
  
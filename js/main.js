window.addEventListener("load", () => {
  const links = [
      {
        label: "Week 1 Notes",
        url: "week1/reading_notes.html"
      }
    ]

  var list = document.getElementById("list");

  for(var i = 0; i < links.length; i++) {
      let link = document.createElement("li");
      let ref = document.createElement("a");
      ref.innerHTML = links[i].label;
      ref.setAttribute('href', links[i].url);
      link.appendChild(ref);
      console.log(link);
      list.appendChild(link);
  }
});

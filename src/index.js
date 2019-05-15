fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())

  .then(body => {
    body.map(data => console.log(data.name));
    const lis = body.map(data => {
      let li = document.createElement("li");
      let text = `Name:${data.name},Email:${data.email}`;
      let textNode = document.createTextNode(text);
      li.appendChild(textNode);
      return li;
    });

    lis.forEach(li => {
      document.getElementById("myList").appendChild(li);
    });
  })
  .catch(err => console.log(err));

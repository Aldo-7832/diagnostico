function showContent() {
    console.log("Llega a la función");
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(data => {
        console.log(data.data);
        let rows = "";
        data.data.forEach(element => {
            rows += `<tr>
                <td>${element.id}</td>
                <td>${element.first_name}</td>
                <td>${element.last_name}</td>
                <td>${element.email}</td>
            </tr>`;
        });
        

        $("#results").append(rows);
    });

}
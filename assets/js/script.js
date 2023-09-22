fetch('included.html')
    .then(response => response.text())
    .then(data =>{
        document.getElementById('includeContent').innerHTML.data;
    });
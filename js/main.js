fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
       document.getElementById('dog-pic').setAttribute('src',data.message)
    })
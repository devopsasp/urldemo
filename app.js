import url from 'url'
const urltext="http://localhost:8080/myapp/home.html?item=coffee&price=200"
const myurl=url.parse(urltext,true)
console.log(myurl)
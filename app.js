var http = require("http");
var fs = require("fs");
function serveView(response, page) {
    fs.readFile("views/"+page, "utf8", function(errors, contents){
        response.writeHead(200, {"Content-type": "text/html"});
        response.write(contents);
        response.end();
    });
}
function serveCSS(response, page) {
    fs.readFile("stylesheets/"+page, "utf8", function(errors, contents){
        response.writeHead(200, {"Content-type": "text/css"});
        response.write(contents);
        response.end();
    });
}
function serveImg(response, page) {
    fs.readFile("images/"+page, function(errors, contents){
        response.writeHead(200, {"Content-type": "image/jpg"});
        response.write(contents);
        response.end();
    });
}
var server = http.createServer(function (request, response){
    console.log("client request URL: " + request.url);
    if(request.url === "/") {
        serveView(response, "index.html");
    }
    else if(request.url === "/cars") {
        serveView(response, "cars.html");
    }
    else if(request.url === "/cars/new") {
        serveView(response, "cars_new.html");
    }
    else if(request.url === "/cats") {
        serveView(response, "cats.html");
    }
    else if(request.url === "/stylesheets/style.css") {
        serveCSS(response, "style.css");
    }
    else if(request.url === "/images/asphalt-auto-automobile-170811.jpg") {
        serveImg(response, "asphalt-auto-automobile-170811.jpg")
    }
    else if(request.url === "/images/automobile-automotive-car-358070.jpg") {
        serveImg(response, "automobile-automotive-car-358070.jpg")
    }
    else if(request.url === "/images/automobile-bmw-car-707046.jpg") {
        serveImg(response, "automobile-bmw-car-707046.jpg")
    }
    else if(request.url === "/images/automobile-cars-headlights-120049.jpg") {
        serveImg(response, "automobile-cars-headlights-120049.jpg")
    }
    else if(request.url === "/images/adorable-animal-animal-world-209037.jpg") {
        serveImg(response, "adorable-animal-animal-world-209037.jpg")
    }
    else if(request.url === "/images/adorable-animal-blur-326875.jpg") {
        serveImg(response, "adorable-animal-blur-326875.jpg")
    }
    else if(request.url === "/images/animal-animal-photography-cat-57416.jpg") {
        serveImg(response, "animal-animal-photography-cat-57416.jpg")
    }
    else if(request.url === "/images/animal-cat-face-close-up-416160.jpg") {
        serveImg(response, "animal-cat-face-close-up-416160.jpg")
    }
    else {
        response.writeHead(404);
        response.end("File not found");
    }
});
server.listen(6789);
console.log("Running in localhost at port 6789");
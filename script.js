//Declarations
var links = ["https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/354941/pexels-photo-354941.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2304895/pexels-photo-2304895.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/1770808/pexels-photo-1770808.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2404055/pexels-photo-2404055.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2274075/pexels-photo-2274075.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/1502941/pexels-photo-1502941.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/3779814/pexels-photo-3779814.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2407196/pexels-photo-2407196.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/593093/pexels-photo-593093.jpeg?auto=compress&cs=tinysrgb&w=800","https://images.pexels.com/photos/2793458/pexels-photo-2793458.jpeg?auto=compress&cs=tinysrgb&w=800"];
var size = links.length;
var index;

//Larger image
function larger(photo){
    document.getElementById("icon").style.display = "block";
    var lc = document.getElementById("icon-container");
    lc.appendChild(photo);
}

// Click event
function click(mouse){
    var photo = document.createElement('img')
    photo.setAttribute("id", "enlarged");
    photo.src = mouse.target.src;
    for(i = 0; i < size; i++){
        if(links[i]!=photo.src){
        }
        else{
            index = i;
            break;
        }
    }
    larger(photo);
}

// Indexing
function num(imageIndex){
    close();
    var photo = document.createElement('img')
    photo.setAttribute("id", "enlarged");
    photo.src = links[imageIndex];
    larger(photo);
}

// Shift right
function right(){
    if(index != size-1){
        index++;
    }
    else{
        index = 0;
    }
    num(index);
}

//Shift left
function left(){
    if(index != 0){
        index--;
    }
    else{
        index = size-1;
    }
    num(index);
}

//Close
function close(){
    document.getElementById("icon").style.display = "none";
    var old = document.getElementById("enlarged");
    document.getElementById("icon-container").removeChild(old);
}

var images = document.querySelectorAll(".container img")

for(i = 0; i < images.length; i++){
    images[i].addEventListener('click', click);
}

document.getElementById("right").addEventListener('click', right);
document.getElementById("left").addEventListener('click', left);
document.getElementById("close").addEventListener('click', close);
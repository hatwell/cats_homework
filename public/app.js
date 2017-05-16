var catFactsList = function(){
  var catList = document.createElement("ul");
  catList.classList.add("cat");
  return catList;
};


  var createListOfItems = function(cattributes){
  var catName = document.createElement("li");
  catName.innerText = "Name: " + cattributes['name'];
  var catFaveFood = document.createElement("li");
  catFaveFood.innerText = "Favourite Food: " + cattributes['faveFood'];
  var catPicture = document.createElement("li");
  catPicture.innerHTML = "<img width='500' src='" + cattributes['imageUrl']; + "'>";
  var catListElements = [catName, catFaveFood, catPicture];
  return catListElements;
}

var appendElements = function(catListElements){
  var catList = catFactsList();
  for (element of catListElements){
    catList.appendChild(element);
  }
  var cats = document.getElementById("#cats");
  cats.appendChild(catList);

  };



var app = function(){
  var pablo = {'name': 'Pablo', 'faveFood': 'treats', 'imageUrl':'https://pbs.twimg.com/media/C58D6fqWYAEBURO.jpg'};
  var catStuff = createListOfItems(pablo);
  appendElements(catStuff);

}

window.onload = app;

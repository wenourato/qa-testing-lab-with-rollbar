document.getElementById("What should I eat?").onclick = function () {
    // console.log('jajjsajsa')
    axios.get("/api/food/")
    .then(function (response) {
        const data = response.data;
        alert(data);
    });
};

const displayList = foodList => {
    
    const listDiv = document.getElementById('listcontainer')
    const newList = document.createElement('ul');
    
    
    listDiv.appendChild(newList);
    
    for(let i = 0; i < foodList.length; i++) {
        const listItem = document.createElement('li')
        listItem.appendChild(document.createTextNode(foodList[i]))
        newList.appendChild(listItem)
    }
}
const synchModel = (foodList) => {
    model = foodList
    displayList(model)
}
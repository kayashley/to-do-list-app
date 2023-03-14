// JS

function newItem(){

    // Adding a new item:

       let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }
    
     // Crossing out an item in the list:

       function crossOut() {
             li.classList.toggle("strike");
         }
    
         li.addEventListener("dblclick",crossOut);
    
     // Adding a delete button:

       let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);

     // Adding class DELETE
       function deleteListItem(){
             li.classList.add("delete")
         }

     // Reorder items from the list 
       $('#list').sortable();
    
    }



// jQuery

// Adding a new item to the list

// let li = $('<li>Test</li>');
// let inputValue = $('#input').val();
// li.append(inputValue);

// if (inputValue === '') {
//     alert("You must write something!");
// } else {
//     let list = $('#list');
//     list.append(li);
// }

// // Crossing out an item on the list

// function crossOut() {
//     li.toggleClass("strike");
// }

// li.on("dbclick", function crossOut () {
//     li.toggleClass("strike");
// })

// // li.on("click", function() {
// //     li.addClass("strike");
// // });


// // Adding a delete button

// let crossOutButton = $('<crossOutButton></crossOutButton>');
// crossOutButton.append(document.createTextNode('X'));
// li.append(crossOutButton);

// crossOutButton.on("click", deleteListItem);
//     function deleteListItem() {
//         li.addClass("delete");
//     }

//     $('#list').sortable();


    






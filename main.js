// TASK #1
var answerBoxNode = document.querySelector('.answer-box')
var navNode = document.querySelector('.nav-menu')

var navNodeState = { //node 'state' to help test against
	isShowing: true,
	opacity: 1,
}


var toggleButton = document.createElement('button') //creating button

answerBoxNode.appendChild(toggleButton) //appending to answerBoxNode
toggleButton.innerHTML='hide nav' //starts off with hide nav

toggleButton.addEventListener('click', function(eventObj){
	if(navNodeState.isShowing===true){
		navNode.style.opacity = '0'
		navNodeState.isShowing = false
		toggleButton.innerHTML='show nav' //click once, navigation disapears and isShowing becomes false
	}
	else{
		navNode.style.opacity = '1'
		navNodeState.isShowing = true
		toggleButton.innerHTML='hide nav'
	}
})


// TASK #2
var textBoxNode = document.querySelector('#textBox')//textbox node
var ulNode = document.querySelector('.guest-list')//ul node
console.log(ulNode)


textBoxNode.addEventListener('keydown', function(eventObj){
  if (eventObj.keyCode === 13) { //checks if enter key was pushed
    var liNode = document.createElement('li') //creates liNode
    liNode.className = "guest" //applies proper css
    ulNode.appendChild(liNode)//append liNode to UlNode
    liNode.innerHTML = eventObj.target.value// set users text as li's text content
    eventObj.target.value = '' // clear input field on keydown enter
	}
})      

// TASK #3
var textBoxNode2 = document.querySelector('#textBox2')//textbox2 node
var ulNode2 = document.querySelector('#add-guest-bonus .guest-list')//ul node
console.log(ulNode)


textBoxNode2.addEventListener('keydown', function(eventObj){
  if (eventObj.keyCode === 13) { //checks if enter key was pushed
    var liNode = document.createElement('li') //creates liNode
    liNode.className = "guest" //applies proper css
    ulNode2.appendChild(liNode)//append liNode to UlNode
    liNode.innerHTML = eventObj.target.value// set users text as li's text content
    eventObj.target.value = '' // clear input field on keydown enter

    var removeButton = document.createElement('button') //creates a button
    removeButton.innerHTML = 'X' //place x within the button
    liNode.appendChild(removeButton) //append the remove button node to your li node
    
    removeButton.addEventListener('click', function(eventObj) {//if the button is clicked...
    	ulNode2.removeChild(liNode) //remove that li
    })
}})








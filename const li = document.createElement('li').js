const li = document.createElement('li')

// Add class

li.className = "collection-item"

// Add ID

li.id = "new-item"

// Add attr

li.setAttribute('title', 'another item')

//Add text node

li.appendChild(document.textNode('Hello World'))

// Create new link var

const link = document.createElement('a')

// add class


link.className = "delete-item secondary-content"

// Add icon
link.innerHTML = '<i class="fa-remove"></i>'


// Append link to li 
li.appendChild(link)

// Append Li as child to ul

document.querySelector('ul.collection').appendChild(li)



console.log(li)

// Your job is to...

// 1.Create a new object that represents a reindeer - the object will include the reindeer's name and its color. Use a generator function to attach each of the following colors, in order, to the reindeer. Use a factory function to generate the reindeer object.

// ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

// 2. Place each object in an array named coloredReindeer.

// // Each object produced by the factory function
// [{ "name": "Dasher", "color": "Blue" }, etc...]

// 3. Iterate over the coloredReindeer array and insert a new <section> element in the colored-reindeer element that displays the reindeer name, with a font color corresponding to the color in the object.

// <!-- Example of what your HTML should look like -->
// <article id="colored-reindeer">
//     <section style="color: Blue">Dasher</section>
//     <section style="color: Red">Dancer</section>
//     etc...
// </article>
const colorGenerator = function* () {
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure",      "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
     let counter = 0

    while (counter < colors.length) {
        yield currentColor = colors[counter]
        counter += 1 
    }
}

const colorFactory = colorGenerator() 

const reindeerFactory = function (name) {
    return Object.create(null, {
        "name": { 
            value: name, 
            enumerable: true 
        },
        "color": { 
            value: colorFactory.next().value, 
            enumerable: true 
        }
    })   
}


const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]
    const coloredReindeer = []
          
    // Write a for loop that looks at each reindeer
    for (let i = 0; i < reindeer.length; i++){
        let processedReindeer = reindeerFactory(reindeer[i])
        
        coloredReindeer.push(processedReindeer)
    }


    // Return coloredReindeer array
    return coloredReindeer
}
    
console.log(coloredReindeerBuilder())
  

        
    // Invoke factory function to create reindeer object

    
        
    // Put new reindeer object in coloredReindeer array
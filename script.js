// JavaScript for toggling navigation links on smaller screens
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        menuBtn.classList.toggle('active'); // Add/remove 'active' class for styling
    });
});



// Get modal elements
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close-btn');
const modalRecipeImage = document.getElementById('modalRecipeImage');
const modalRecipeName = document.getElementById('modalRecipeName');
const modalRecipeDescription = document.getElementById('modalRecipeDescription');
const modalRecipeIngredients = document.getElementById('modalRecipeIngredients');
const modalRecipeInstructions = document.getElementById('modalRecipeInstructions');
const modalNutritionalValue = document.getElementById('modalNutritionalValue');
const modalPrepTime = document.getElementById('prepTime');
const modalCookTime = document.getElementById('cookTime');
const modalTotalTime = document.getElementById('totalTime');
const modalServings = document.getElementById('servings');

// Define recipes object
const recipes = {
    1: {
        name: 'Chili Garlic (Homemade) Paneer',//https://www.allrecipes.com/chili-garlic-homemade-paneer-recipe-7483649
        description: 'Homemade paneer is marinated in a spicy chili garlic marinade which adds a wonderful flavor to this versatile Indian cheese. Pan-frying the paneer gives it delightful texture.',
        image: 'Recipe Images/ChiliGarlicPaneer.jpg',
        ingredients:[
            'Paneer:',
            '- 2 quarts whole milk',
            '- 2 tablespoons plain yogurt',
            '- 3 tablespoons fresh lemon juice, or more as needed',
            '- 4 cups cold water',
            '\n',
            'Chili Garlic Marinade:',
            '- 4 cloves garlic, crushed',
            '- 2 to 3 tablespoons Sriracha chili sauce, or other hot chili sauce',
            '- 2 tablespoons plain yogurt',
            '- 1 lemon, juiced',
            '- 1 1/2 teaspoons garam masala, or curry spice powder',
            '- 1 teaspoon kosher salt, or to taste',
            '\n',
            'Chili Garlic Paneer:',
            '- 2 tablespoons clarified butter or ghee',
            '- 8 ounces paneer cheese (or homemade using recipe supplied here)',
            '\n',
            'Yogurt Dipping Sauce:',
            '- 1/3 cup plain yogurt',
            '- 1/4 cup finely chopped cilantro leaves',
            '- 2 tablespoons diced jalapeno pepper',
            '- 1 lime, juiced',
            '- salt to taste'
        ],
        instructions: [
            "Heat milk in a large pot on between medium and medium-high heat to 195 degrees F to 205 degrees F (90 to 9 degrees C) until milk is almost simmering. Reduce heat to low, and stir in yogurt and 3 tablespoons lemon juice. Stir for about 30 seconds, and if milk isn’t separating into curds and whey, stir in another 1 to 2 tablespoons lemon juice.",
            "Once curds form, turn off heat, and pour in cold water to stop the cooking process and cool mixture. Pour curds into a cheesecloth or a cotton towel lined colander and drain out whey. Whey can be reserved for other uses.",
            "Let curds sit and drain for 5 to 10 minutes, before gathering up the cloth, and squeezing out excess liquid. Be careful to not burn yourself, as the liquid may still be very hot. Press curds between layers of cloth into a disc of about 2 inches high, being careful not to leave excess cloth bunched up on top, or underneath the cheese. Place something flat over the cheese, and place a heavy pan on top to weigh down. Leave paneer under the weight until very firm to the touch, 30 to 90 minutes. Wrap and refrigerate until well chilled before using.",
            "For the chili garlic marinade, combine garlic, Sriracha, yogurt, lemon juice, garam masala, and kosher salt in a bowl; mix until well combined.",
            "Cut paneer into squares or rectangles about 1/4 to 1/2 inch thick, and add to the marinade, tossing well to coat thoroughly on both sides. Wrap and marinate paneer for at least 4 hours.",
            "Combine yogurt, cilantro, jalapeno, lime juice, and salt for the yogurt dipping sauce in a blender; blend until smooth.",
            "Melt butter in a non-stick pan over medium-high heat and pan-fry paneer until well browned, about 2 minutes per side. Serve immediately with dipping sauce."
        ],
        prepTime: '30 minutes',
        cookTime: '20 minutes',
        totalTime: '6 hours (includes marinating time and refridgerating time)',
        servings: '4',
        nutritionalValue: 'Calories: 413 per serving, Protein: 18g, Carbs: 36g, Fat: 23g,'
    },
    2: {
        name: 'Triple-Dipped Fried Chicken', //https://www.allrecipes.com/recipe/89268/triple-dipped-fried-chicken/
        description: 'This fried chicken batter yields the crispiest, spiciest, homemade fried chicken I have ever tasted! It has been a picnic favorite in my family for years and tastes equally good served hot or cold.',
        image: 'Recipe Images/triple-dipped-fried-chicken.jpg',
        ingredients: [    
            '- 1 quart vegetable oil for frying',
            '- 4 ⅓ cups all-purpose flour, divided',
            '- 1 ½ tablespoons garlic salt',
            '- 1 tablespoon ground black pepper',
            '- 1 tablespoon paprika',
            '- ½ teaspoon poultry seasoning',
            '- 1 ½ cups beer, or as needed',
            '- 2 egg yolks, beaten',
            '- 1 teaspoon salt',
            '- ¼ teaspoon ground black pepper',
            '- 1 (3 pound) whole chicken, cut into pieces'],
        instructions: [  
            "- Heat oil in a deep fryer to 350 degrees F (175 degrees C).",
            "- Mix 3 cups flour, garlic salt, 1 tablespoon pepper, paprika, and poultry seasoning together in a medium bowl.",
            "- Stir 1 1/2 cups beer, remaining 1 1/3 cups flour, egg yolks, salt, and 1/4 teaspoon pepper together in a separate bowl; thin with more beer if batter is too thick.",
            "- Moisten chicken pieces with a little water, then dip in seasoned flour mixture. Shake off excess and dip in beer batter, then dip in the seasoned flour mixture once more.",
            "- Lower chicken pieces carefully into the hot oil in batches. Fry until crispy and well-browned, about 15 to 18 minutes. An instant-read thermometer inserted near the bone should read 165 degrees F (74 degrees C).",
            "- Transfer to a paper towel-lined plate to drain.",
            "- Enjoy!"
        ],
        prepTime: '30 minutes',
        cookTime: '15 minutes',
        totalTime: '45 minutes',
        servings: '6',
        nutritionalValue: 'Calories: 661 per serving, Protein: 42g, Carbs: 73g, Fat: 19g'
    },
    3: {
        name: 'Pork Gyoza', //https://www.allrecipes.com/recipe/259900/pork-gyoza/
        description: 'Gyoza are pan-fried Japanese dumplings which make perfect starters or nibbles. Filled with a savory mixture of ground pork and Japanese flavors.',
        image: 'Recipe Images/Pork Gyoza.jpg',
        ingredients: [
            '- 12 ounces ground pork',
            '- ¼ head cabbage, shredded',
            '- 1 egg',
            '- 2 spring onions, sliced',
            '- 1 tablespoon soy sauce',
            '- 2 teaspoons sake',
            '- 2 teaspoons mirin',
            '- 2 teaspoons minced fresh ginger root',
            '- 40 gyoza wrappers, or as needed',
            '- 2 tablespoons vegetable oil',
            '- ½ cup water',
            '',
            'Sauce:',
            '- ¼ cup rice wine vinegar',
            '- ¼ cup soy sauce'
        ],
        instructions: [
            "Combine ground pork, cabbage, egg, spring onions, 1 tablespoon soy sauce, sake, mirin, and ginger in a large bowl; mix well.",
            "Place approximately 1 to 2 teaspoons of the pork mixture in the center of each gyoza wrapper.",
            "Moisten your fingers with water and rub around the edges of each wrapper.",
            "Fold wrappers in half over filling, creating a semi-circle.",
            "Take one side of the wrapper and make crimps along the edges for a decorative pattern (like pleats of a skirt) and press along the edges to seal the two sides together.",
            "Ensure there isn't much excess air caught inside the dumpling.",
            "Repeat until all the pork mixture is used.",
            "Heat vegetable oil in a large skillet over medium-high heat.",
            "Place as many gyoza in the skillet as fit in a single layer and fry until the bottom is browned, about 3 to 5 minutes.",
            "Add water to the skillet and reduce heat.",
            "Cover and allow gyoza to steam until all the water has evaporated, about 5 minutes.",
            "Repeat with the remaining gyoza.",
            "Mix rice vinegar and soy sauce together for a dipping sauce and serve with the gyoza."
        ],
        prepTime: '30 minutes',
        cookTime: '15 minutes',
        totalTime: '45 minutes',
        servings: '6',
        nutritionalValue: 'Calories: 661 per serving, Protein: 42g, Carbs: 73g, Fat: 19g'
    }
};

// Event listeners
document.querySelectorAll('.recipe').forEach(recipe => {
    recipe.addEventListener('click', function() {
        const recipeId = this.getAttribute('data-recipe');
        const recipeData = recipes[recipeId];

        modalRecipeName.textContent = recipeData.name;
        modalRecipeDescription.textContent = recipeData.description;

        // Set the image source
        modalRecipeImage.src = recipeData.image;

        // Format and display ingredients
        modalRecipeIngredients.innerHTML = recipeData.ingredients.map((ingredient, index) => {
            if (ingredient === '\n') {
                return '<br>'; // Add line break for sections
            } else if (ingredient.startsWith('-')) {
                return `<li>${ingredient.slice(2)}</li>`; // Add bullet points for ingredients
            } else {
                return ingredient; // Don't add bullet points for other lines
            }
        }).join('');

        // Display instructions
        modalRecipeInstructions.innerHTML = recipeData.instructions.map(instruction => `<li>${instruction}</li>`).join('');

        // Display prep time, cook time, total time, servings
        modalPrepTime.textContent = recipeData.prepTime;
        modalCookTime.textContent = recipeData.cookTime;
        modalTotalTime.textContent = recipeData.totalTime;
        modalServings.textContent = recipeData.servings;

        // Show modal
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

//upload.html

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipe = {
        name: document.getElementById('recipeName').value,
        description: document.getElementById('recipeDescription').value,
        ingredients: document.getElementById('recipeIngredients').value.split('\n'),
        instructions: document.getElementById('recipeInstructions').value.split('\n'),
        prepTime: document.getElementById('prepTime').value,
        cookTime: document.getElementById('cookTime').value,
        totalTime: document.getElementById('totalTime').value,
        servings: document.getElementById('servings').value,
        nutritionalValue: document.getElementById('nutritionalValue').value,
        image: document.getElementById('recipeImage').files[0]
    };

    console.log('Recipe submitted:', recipe);

    alert('Recipe uploaded successfully!');
});

//search bar

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const searchBar = document.getElementById('searchBar');
    const featuredSection = document.querySelector('.featured-section');
    const featuredRecipes = document.querySelector('.featured-recipes');

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = searchBar.value;

        fetch(`search.php?query=${query}`)
            .then(response => response.json())
            .then(data => {
                featuredRecipes.innerHTML = '';
                if (data.length > 0) {
                    data.forEach(recipe => {
                        const recipeDiv = document.createElement('div');
                        recipeDiv.classList.add('recipe');
                        recipeDiv.setAttribute('data-recipe', recipe.id);

                        const img = document.createElement('img');
                        img.src = recipe.Image;
                        img.alt = recipe.Name;

                        const p = document.createElement('p');
                        p.textContent = recipe.Name;

                        recipeDiv.appendChild(img);
                        recipeDiv.appendChild(p);
                        featuredRecipes.appendChild(recipeDiv);
                    });
                } else {
                    const noResults = document.createElement('p');
                    noResults.textContent = 'No recipes found.';
                    featuredRecipes.appendChild(noResults);
                }
            })
            .catch(error => console.error('Error:', error));
    });
});

//Get all recipies
document.addEventListener('DOMContentLoaded', () => {
    const exploreBtn = document.getElementById('exploreBtn');
    const allRecipesSection = document.querySelector('.all-recipes-section');
    const allRecipesContainer = document.querySelector('.all-recipes');

    exploreBtn.addEventListener('click', () => {
        fetch('get_all_recipes.php')
            .then(response => response.json())
            .then(data => {
                allRecipesContainer.innerHTML = ''; // Clear previous content
                if (data.length > 0) {
                    data.forEach(recipe => {
                        const recipeDiv = document.createElement('div');
                        recipeDiv.classList.add('recipe');
                        recipeDiv.setAttribute('data-recipe', recipe.id);

                        const img = document.createElement('img');
                        img.src = recipe.Image;
                        img.alt = recipe.Name;

                        const p = document.createElement('p');
                        p.textContent = recipe.Name;

                        recipeDiv.appendChild(img);
                        recipeDiv.appendChild(p);
                        allRecipesContainer.appendChild(recipeDiv);
                    });
                    allRecipesSection.style.display = 'block'; // Show the section
                } else {
                    const noResults = document.createElement('p');
                    noResults.textContent = 'No recipes found.';
                    allRecipesContainer.appendChild(noResults);
                    allRecipesSection.style.display = 'block'; // Show the section
                }
            })
            .catch(error => console.error('Error:', error));
    });
});

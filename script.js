let jokes = [`What does a cloud wear under his raincoat? Thunderwear.`, ` Two pickles fell out of a jar onto the floor. What did one say to the other? Dill with it.`,
  `What time is it when the clock strikes 13? Time to get a new clock.`,
  `How does a cucumber become a pickle? It goes through a jarring experience.`,
  `What do you think of that new diner on the moon? Food was good, but there really wasn’t much atmosphere.`, `Why did the dinosaur cross the road? Because the chicken wasn’t born yet.`
  , `What musical instrument is found in the bathroom? A tuba toothpaste.`
  , `Why did the kid bring a ladder to school? Because she wanted to go to high school.`
  , `What do you call a dog magician? A labracadabrador.`
  , `Where would you find an elephant? The same place you lost her.`
  , `How do you get a squirrel to like you? Act like a nut.`
  , `What do you call two birds in love? Tweethearts`
  , `How does a scientist freshen her breath? With experi-mints.`
  , `How are false teeth like stars? They come out at night.`
  , `What building in your town has the most stories? The public library.`
  , `What’s worse than finding a worm in your apple? Finding half a worm.`
  , `What is a computer's favorite snack? Computer chips.`
  , `What did one volcano say to the other? I lava you.`
  , `What is a tornado’s favorite game to play? Twister.`
  , `How does the moon cut his hair? Eclipse it.`
  , `How do you talk to a giant? Use big words.`
  , `What animal is always at a baseball game? A bat.`
  , `What falls in winter but never gets hurt? Snow.`
  , `What did the Dalmatian say after lunch? That hit the spot.`
  , `Why did the kid cross the playground? To get to the other slide.`
  , `6 Pro Chefs Reveal Their Go-To Spicy Ingredients Join Brad Leone, Zaynab Issa, Kendra Vaculin, Shilpa Uskokovic, Chris Morocco, and Rachel Gurjar in the Bon Appétit Test Kitchen as they each reveal the go-to ingredient they reach for when their recipes needs a spicy kick.`
  , `6 Pro Chefs Reveal Their Go-To Spicy Ingredients -- | 13:40`
  , `A Brief History of Goth Teaser -- | 0:40`
  , `A Daughter and Her Mother Reconnect Over Chinese Dumplings -- | 1:03`
  , `Matcha Latte -- | 0:25`
  , `How to Set a Dinner Table -- | 0:40`
  , `One Good Thing: Country Star Makes Boy's Birthday Extra Special NA | 2:03`
  , `Joe Jonas on Procedure That Made Him Feel Like It Was His 'First Day on Earth' NA | 8:04`
  , `#TrendCheck: Did Harry Styles Spit On Chris Pine? Arts and entertainment | 2:52`
  , `Why was the baby strawberry crying? Because her mom and dad were in a jam.`
  , `What did the little corn say to the mama corn? Where is pop corn?`
  , `How do you make a lemon drop? Just let it fall.`
  , `What did the limestone say to the geologist? Don’t take me for granite.`
  , `What kind of water can’t freeze? Hot water.`
  , `What kind of tree fits in your hand? A palm tree.`
  , `What do you call a dinosaur that is sleeping? A dino-snore.`
  , `Why did the teddy bear say no to dessert? Because she was stuffed.`
  , `What has ears but cannot hear? A cornfield.`
  , `What did the left eye say to the right eye? Between us, something smells.`
  , `Why did the student eat his homework? Because the teacher told him it was a piece of cake.`
  , `What is brown, hairy and wears sunglasses? A coconut on vacation.`
  , `What do you say to a rabbit on its birthday? Hoppy Birthday.`
  , `What’s the one thing will you get every year on your birthday, guaranteed? A year older.`
  , `Why do candles always go on the top of cakes? Because it's hard to light them from the bottom.`
  , `What do cakes and baseball teams have in common? They both need a good batter.`
  , `What goes up but never comes down? Your age.`
  , `What does every birthday end with? The letter Y.`
  , `What did the tiger say to her cub on his birthday? It's roar birthday.`
  , `Why did the little girl hit her birthday cake with a hammer? It was a pound cake.`
  , `Why is the obtuse triangle always so frustrated? Because it’s never right.`
  , `Why is six afraid of seven? Because seven eight nine.`
  , `What do you call guys who love math? Algebros.`
  , `How do you stay warm in any room? Go to the corner—it’s always 90 degrees.`
  , `Why was the fraction nervous about marrying the decimal? Because he would have to convert.`
  , `Are monsters good at math? Not unless you count Dracula.`
  , `Why was the math book sad? Because it had too many problems.`
  , `Why does nobody talk to circles? Because there’s no point.`
  , ` Related: 50 Funny Math Jokes and Math Puns`
  , `Why couldn't the pony sing a lullaby? She was a little horse.`
  , `What was the first animal in space? The cow that jumped over the moon.`
  , `Why don’t elephants chew gum? They do, just not in public.`
  , `What did the banana say to the dog? Bananas can’t talk.`
  , `How do you make an octopus laugh? With ten-tickles.`
  , `How do you fit more pigs on a farm? Build a sty-scraper.`
  , `What did the farmer call the cow that had no milk? An udder failure.`
  , `What do you call a cow that won't give milk? A milk dud.`
  , `Why do fish live in salt water? Because pepper makes them sneeze.`
  , `What do you get from a pampered cow? Spoiled milk.`
  , `Where do polar bears vote? The North Poll`
  , `What sound do porcupines make when they kiss? Ouch!`
  , `Why are fish so smart? Because they live in schools.`
  , `Why don’t pirates shower before they walk the plank? Because they’ll just wash up on shore later.`
  , `What happened when Bluebeard fell overboard in the Red Sea? He got marooned.`
  , `How much does it cost a pirate to get his ears pierced? About a buck an ear.`
  , `Why is pirating so addictive? They say once ye lose yer first hand, ye get hooked.`
  , `How do pirates know that they are pirates? They think, therefore they arrr.`
  , `Funny Kids' Jokes About Cats Cat-Jokes-Kids`
  , `What is a cat's favorite color? Purrr-ple.`
  , `Where did the school kittens go for their field trip? To the mew-seum.`
  , `What kind of kitten works for the Red Cross? A first-aid kit.`];


let mainBtn = document.getElementById("mainBtn");
let jokeCont = document.getElementById("joke-cont");
let home = document.getElementById("home");
let jokeLine = document.getElementById("jokeLine");
let New = document.getElementById("new");

mainBtn.addEventListener("click", function() {
  jokeCont.style.display = "block";
  let random = Math.floor(Math.random() * jokes.length);
  jokeLine.innerHTML = jokes[random];
});

New.addEventListener("click", function() {
  let random = Math.floor(Math.random() * jokes.length);
  jokeLine.innerHTML = jokes[random];
});

home.addEventListener("click", function() {
  jokeCont.style.display = "none";
});
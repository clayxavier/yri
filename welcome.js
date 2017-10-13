
      //the document.onload is an event that trigger
      //the function myFunction() when the documents is loaded 
      document.onload = myFunction();

      //myFunction now searchs for the id 
      function myFunction(){
      	var messageList = ["Hola", "Hello", "Bonjour", "Kamusta", "suh dude","Welcome", "How Are You?","The weather is nice today", "Oakland Loves U", "Peace <3", "Wow you're so cool", "THIS IS THE SITE", "What's good fam","PEEP MY SOUNDCLOUD", "I like Chocolate Icecream", "Where's the nearest record store?"];
      	var randomNumber = Math.floor(Math.random() * messageList.length);
        document.getElementById("welcomeMsg").innerHTML = messageList[randomNumber]; 
      }

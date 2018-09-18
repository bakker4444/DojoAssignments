# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / JavaScript Scroll

### Assignment details

Fix the following runtime errors from the example code:

* The last character of each string in the `words` array doesn't show up.

* The blank spaces are not appearing correctly. The cursor does not correctly shift to the right on blank spaces, instead it pauses on the previous letter and jumps to the next letter.

**Hint**

When you work with code, not all the time will you be working with code that you wrote from scratch. Oftentimes, you'll need to be able to dive into and understand an unfamiliar codebase. **Do not feel like you need to write code like this from scratch yet.** This assignment is designed to challenge you to understand and debug a couple runtime errors.

Also, consider looking up the `setInterval` function. It might be easier to debug this by slowing the interval down.

```
<html>
<head>
	<title>Javascript Demo</title>
	<style>
		body {
			background-color:black;
			font-family: monospace;
			color:white;
			font-size:50px;
			text-align: center;
			margin-top:20%;
		}
		#magic{
			color: #777;
			border-right: 1px solid #777;
			padding-right: 7px;
			display: inline;
		}
	</style>
</head>
<body>

	Coding is <div id="magic"></div>

  <script>
		var words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression", "what I learned at CodingDojo!"],
			el = document.getElementById('magic'),
			word_counter = 0,
			character_counter = 0;
		function updateText()
		{
			el.innerHTML = el.innerHTML+words[word_counter][character_counter++];
			if(character_counter == words[word_counter].length)
			{
				word_counter++; 	//choose a different word
				character_counter = 0;	//start over with the first character of the word
				el.innerHTML = '';  //set the html to be blank
				//if we're displaying the last word, go back to the first word
				if(word_counter == words.length)
					word_counter = 0;
			}
		}
		setInterval(updateText,300);
	</script>
</body>
</html>
```
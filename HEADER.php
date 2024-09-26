	<header class="siteHeader">
			<div class="leftSide">
				<a class="menuLinks" href="index.html">Home</a> 
				<a class="menuLinks" href="PHPEx.php">PHP Example</a>
				<a class="menuLinks" href="index.html">Another Link</a>
				<a class="menuLinks" href="index.html">Another Link</a>
				<a class="menuLinks" href="index.html">Another Link</a>
			</div>
      		<div class="centerField">
				<H1 style="text-shadow: 2px 2px black;">Wolf Thunderspirit</H1>
				<h3>Welcome to the party!</h3>
			</div>
      		<div class="rightSide" style="width: 200px;">
				<label for="pageThemes" id="headNavPane">Choose a Theme:</label><br>
					<select name="pageTheme" id="pageTheme" class="pageTheme" onChange="changeStyles();">
  						<option value="Spring.css" selected>Spring</option>
  						<option value="Summer.css">Summer</option>
  						<option value="Fall.css">Fall</option>
						<option value="Winter.css">Winter</option>
					</select> <br>
					<label for="pageThemes" id="headNavPane">Time</label>
						<br>
					<div id="timeDisplay"></div>    <br>
					<label for="dateDisplay" id="headNavPane">Date</label>
						<br>
					<div id="dateDisplay" onload="displayDate();"></div>
			</div>
	</header>
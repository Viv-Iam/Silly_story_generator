// Declare variables
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
var insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
var newStory = storyText;

// Call randomValueFromArray function and pass specific arrays as arguments
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);

// Replace text with text from array
newStory.replace('insertx', xItem);
newStory.replace('inserty', yItem);
newStory.replace('insertz', zItem);


function randomValueFromArray(array) {

  // Randomly get array index
  return array[Math.floor(Math.random() * array.length)];

  randomize.addEventListener('click', result);

  function result() {

    if (customName.value !== '') {
      var name = customName.value;
      newStory.replace('Bob', name);
    }

    // Check if UK radio button is checked
    if (document.getElementById("uk").checked) {

      // Convert weight from pounds to stone
      var weight = Math.round(300 / 14) + ' stone';

      // Convert temperature from Fahrenheit to Celsius
      var temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';

      // Replace temperature and weight with converted values
      newStory.replace('94 fahrenheit', temperature);
      newStory.replace('300 pounds', weight);

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
}
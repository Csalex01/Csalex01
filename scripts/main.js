$(function() {
  let wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=";
  let wordnikAPIKey = "786d54f5aaeb013f3b00008ebdd0010fc51d4922f6b6d5340 ";
  let wordnikURL = wordnikAPI + wordnikAPIKey;
  let wordnikWord;

  let giphyAPI = "https://api.giphy.com/v1/gifs/search?api_key=GpaCHgHroupp5xpkPisG9hHg1QhDMWG3&q=";
  let giphyLimit = "&limit=";
  let giphyLimitVal;
  let giphyOptions = "&offset=0&rating=G&lang=en";
  let giphyURL;

  let $inputWord = $('.word-input');
  let $randomWord = $('.random_button');
  let $submitButton = $('.submit_button');
  let $count = $('.select-count');
  let $gifContainer = $('.gif-container');

  $randomWord.on('click', () => {
    $.ajax({
      type: 'GET',
      url: wordnikURL,
      success: (word) => {
        $inputWord.val(word.word);
      }
    });
  });

  $submitButton.on('click', () => {
    wordnikWord = $inputWord.val();
    giphyLimitVal = $count.val();
    giphyURL = giphyAPI + wordnikWord + giphyLimit + giphyLimitVal + giphyOptions;
    console.log(`Word: ${wordnikWord}\nLimit: ${giphyLimitVal}`);
    $.ajax({
      type: 'GET',
      url: giphyURL,
      success: (gifs) => {
        $gifContainer.empty();
        if (gifs.data.length > 0) {
          gifs.data.forEach(x => {
            let img = document.createElement('img');
            img.src = x.images.fixed_height.url;
            $gifContainer.append(img);
          });
        } else {
          let txt = document.createElement('h1');
          txt.innerHTML = `Could not find any GIFs with the name "${wordnikWord}"!`;

          $gifContainer.append(txt);
        }
      }
    });
  });
});
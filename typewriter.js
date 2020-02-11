const sentence = "hello there from lighthouse labs";

const typewriter = words => {
  let time = 150;
  words += "\n";
  for (let letter of words) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, time);
    time += 150;
  }
};

typewriter(sentence);

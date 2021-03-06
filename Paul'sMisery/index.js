function paul(x) {
  let resoult = 0;

  x.forEach((item) => {
    if (item == "kata") resoult += 5;
    if (item == "Petes kata") resoult += 10;
    if (item == "eating") resoult += 1;
  });

  if (resoult < 40) return "Super happy!";
  if (resoult < 70 && resoult >= 40) return "Happy!";
  if (resoult < 100 && resoult >= 70) return "Sad!";
  if (resoult >= 100) return "Miserable!";
}

// Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

// Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

// kata = 5
// Petes kata = 10
// life = 0
// eating = 1
// The Misery Score is the total points gained from the array. Once you have the total, return as follows:

// < 40 = 'Super happy!'
// < 70 >= 40 = 'Happy!'
// < 100 >= 70 = 'Sad!'
// > 100 = 'Miserable!'

// (https://www.codewars.com/kata/57ee31c5e77282c24d000024)
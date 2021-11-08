var indexReward = 0;
var rewards = [];


function preload() {

  rewards.push(new Reward("images/Water.png"));
  rewards.push(new Reward("images/Rock-1.png"));
  rewards.push(new Reward("images/Rock-2.png"));
  rewards.push(new Reward("images/Rock-3.png"));
  rewards.push(new Reward("images/Rock-4.png"));
  rewards.push(new Reward("images/Rock-5.png"));

}


function setup() {
  createCanvas(windowWidth, windowHeight);

  preload();

  for (let Reward of rewards) {



  }
}





function draw() {
  //background(220);

  for (let i = 0; i <= indexReward; i++) {
    rewards[i];

    if (rewards[i]) {
      rewards[i].show();
      rewards[i].draw();

    }


  }

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (indexReward < 5) {
      indexReward++;
      
    }



  } else if (keyCode === DOWN_ARROW) {

    if (indexReward > 0) {
      indexReward--;
      
    }
  
  }

}
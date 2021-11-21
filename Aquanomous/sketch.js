var indexReward = 0;
var rewards = [];
var rewardsOn = [];
var backGround;

function preload() {
  backGround = new Reward("images/Water.png", 0);

  rewards.push(new Reward("images/Rock-1.png", 1));
  rewards.push(new Reward("images/Rock-2.png", 2));
  rewards.push(new Reward("images/Rock-3.png", 3));
  rewards.push(new Reward("images/Rock-4.png", 4));
  rewards.push(new Reward("images/Rock-5.png", 5));
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  preload();
}





function draw() {
  //background(220);
  backGround.draw();
  backGround.show();
  /* for (let i = 0; i <= indexReward; i++) {
     rewards[i];

     if (rewards[i]) {
       rewards[i].show();
       rewards[i].draw();

     }


   }*/
  for (let reward of rewardsOn) {
    reward.show();
    reward.draw();
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    if (indexReward < 5) {
      indexReward++;

      let rewardFound = false;
      while (rewardFound == false) {

        let reward = random(rewards);

        if (rewardsOn.find(value => value.id == reward.id) == undefined) {
          
          if (reward.id == 5 &&
            (rewardsOn.find(value => value.id == 2) == undefined || rewardsOn.find(value => value.id == 3) == undefined || rewardsOn.find(value => value.id == 4) == undefined))
            continue;

          rewardsOn.push(reward);
          rewardFound = true;
        }
      }
    }
  } else if (keyCode === DOWN_ARROW) {

    if (indexReward > 0) {
      indexReward--;
      let removedReward = rewardsOn.pop();
      removedReward.hide();
    }

  }

}
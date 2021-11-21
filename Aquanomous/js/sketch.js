var indexReward = 0;
var rewards = [];
var rewardsOn = [];
var backGround;
var fountains = [];

function preload() {
  backGround = new Reward("images/Water.png", 0);

  rewards.push(new Fountain(1, 1000, 250));
  rewards.push(new Fountain(2, 1000, 900));
  rewards.push(new Fountain(3, 1000, 1800));
  rewards.push(new Fountain(4, 1000, 2300));

  rewards.push(new Reward("images/Rock-1.png", 5));
  rewards.push(new Reward("images/Rock-2.png", 6));
  rewards.push(new Reward("images/Rock-3.png", 7));
  rewards.push(new Reward("images/Rock-4.png", 8));
  rewards.push(new Reward("images/Rock-5.png", 9));


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

    if (indexReward < rewards.length) {
      indexReward++;

      let rewardFound = false;
      while (rewardFound == false) {

        let reward = random(rewards);

        if (rewardsOn.find(value => value.id == reward.id) == undefined) {

          if (reward.id == 9 &&
            (rewardsOn.find(value => value.id == 6) == undefined || rewardsOn.find(value => value.id == 7) == undefined || rewardsOn.find(value => value.id == 8) == undefined))
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
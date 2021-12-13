var indexReward = 0;
var rewards = [];
var rewardsOn = [];
var backGround;
var fountains = [];
var img;




function preload() {
  backGround = new Reward("images/Water.png", 0);


  rewards.push(new Fountain(1, createVector(200, 1000)));
  rewards.push(new Fountain(2, createVector(770, 1000)));
  rewards.push(new Fountain(3, createVector(1350, 1000)));

  rewards.push(new Reward("images/Rock-1.png", 4));
  rewards.push(new Reward("images/Rock-2.png", 5));
  rewards.push(new Reward("images/Rock-3.png", 6));
  rewards.push(new Reward("images/Rock-4.png", 7));
  rewards.push(new Reward("images/Rock-5.png", 8));
  
  img=loadImage("images/Fish.png");

  //fish = new Reward("image/Fish.png",9);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function orderToDraw(rewards) {
  var orderedRewards = [];

  //add fountains
  for (let reward of rewards) {
    if (reward) {

    }
  }

}





function draw() {
  //background(220);
  backGround.draw();
  backGround.show();

 // fish.draw();
  //fish.show();

  /* for (let i = 0; i <= indexReward; i++) {
     rewards[i];

     if (rewards[i]) {
       rewards[i].show();
       rewards[i].draw();

     }


   }*/

  //rewardsOn.sort((a, b) => a.id > b.id);
  for (let reward of rewardsOn) {
    //print("id: " + reward.id);
   reward.touchedByTheFish(createVector(mouseX, mouseY));

    reward.show();
    reward.draw();
  }
  //imageMode(CENTER);
  image(img, mouseX - (img.width/4), mouseY - (img.height/4), 270,200);
  
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    if (indexReward < rewards.length) {
      indexReward++;

      let rewardFound = false;
      while (rewardFound == false) {

        let reward = random(rewards);

        if (rewardsOn.find(value => value.id == reward.id) == undefined) {

          if (reward.id == 8 &&
            (rewardsOn.find(value => value.id == 5) == undefined || rewardsOn.find(value => value.id == 6) == undefined || rewardsOn.find(value => value.id == 7) == undefined))
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

  rewardsOn.sort((a, b) => a.id - b.id);
}
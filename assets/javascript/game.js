
      //create all the variables
      var wins = 0;
      var losses = 0;
      var random_num;
      var player_guess;
      var purplegem_val;
      var orangegem_val;
      var bluegem_val;
      var pinkgem_val;
      var totalscore = 0;
      var counter = 0;

      //function to reset game
      function game_reset(){
        random_num = Math.floor((Math.random() * 100) + 10);
        purplegem_val = Math.floor((Math.random() * 15)+1);
        orangegem_val = Math.floor((Math.random() * 15)+1);
        bluegem_val = Math.floor((Math.random() * 15)+1);
        pinkgem_val = Math.floor((Math.random() * 15)+1);
        totalscore = 0;
        counter = 0;
      };

      //function to update the score
      function update_score() {
        $("#rand_num_box").html(random_num);
        $("#scorebox").html(totalscore);
        $("#win_score").html(wins);
        $("#loss_score").html(losses);
      };

      function check_score() {
        //check to see if the player won
        if (totalscore === random_num) {
        wins++;
        game_reset();
      }

      //check to see if the player lost
      if (totalscore > random_num) {
        losses++;
        game_reset();
      }

    };
      

    $(document).ready(function() {
      //start the game and initalize the variables
      game_reset();
      update_score();

        //on click event for purple gem
        $("body").on("click", "#purp-image", function() {
          totalscore = totalscore + purplegem_val;
          counter++;
          update_score();
          check_score();
        });

        //on click event for orange gem
        $("body").on("click", "#orange-image",function() {
          totalscore = totalscore + orangegem_val;
          counter++;
          update_score();
          check_score();
        });

        //on click event for blue gem
        $("body").on("click", "#blue-image", function() {
          totalscore = totalscore + bluegem_val;
          counter++;
          update_score();
          check_score();
        });

        //on click event for pink gem
        $("body").on("click", "#pink-image",function() {
          totalscore = totalscore + pinkgem_val;
          counter++;
          update_score();
          check_score();
        });
    });
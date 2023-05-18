"use strict";

$(document).ready(function() {

  /************** MODAL IN ACORDION **************/
    $(function(){
        $('.toggle_title').on('click',function() {
            $(this).toggleClass('selected');
            $(this).parent().find('.toggle_txt, .toggle_ul').slideToggle();
            $('.toggle_title').not($(this)).parent().find('.toggle_txt, .toggle_ul').slideUp();
            $('.toggle_title').not($(this)).removeClass('selected');
        });
    });

  /************** HIDE THE REPLAY BUTTON **************/
    $('.replay').hide();

  /************** VARIABLES **************/
    var playerHand = "";
    var compHand;
    var round = 1;
    var playerWins = 0;
    var compWins = 0;
    $(function() { 
    
    /************** BUTTON FUNCTIONALITY **************/
    /** HOVER **/
    $(".aimg").hover(function(){
        $(".aimg").css("opacity", "0.7");
        }, function(){
        $(".aimg").css("opacity", "1");
    });
    $(".bimg").hover(function(){
        $(".bimg").css("opacity", "0.7");
        }, function(){
        $(".bimg").css("opacity", "1");
    });
    $(".cimg").hover(function(){
        $(".cimg").css("opacity", "0.7");
        }, function(){
        $(".cimg").css("opacity", "1");
    });
    $(".dimg").hover(function(){
        $(".dimg").css("opacity", "0.7");
        }, function(){
        $(".dimg").css("opacity", "1");
    });
    $(".eimg").hover(function(){
        $(".eimg").css("opacity", "0.7");
        }, function(){
        $(".eimg").css("opacity", "1");
    });
    
    /** SELECTION **/
    $(".aimg").on("click", function() {
        $(".aimg").attr("src","img/main/a_click.png");
        $(".bimg").attr("src","img/main/b.png");
        $(".cimg").attr("src","img/main/c.png");
        $(".dimg").attr("src","img/main/d.png");
        $(".eimg").attr("src","img/main/e.png");
        playerHand = "a";
    });
    $(".bimg").on("click", function() {
        $(".aimg").attr("src","img/main/a.png");
        $(".bimg").attr("src","img/main/b_click.png");
        $(".cimg").attr("src","img/main/c.png");
        $(".dimg").attr("src","img/main/d.png");
        $(".eimg").attr("src","img/main/e.png");
        playerHand = "b";
    });
    $(".cimg").on("click", function() {
        $(".aimg").attr("src","img/main/a.png");
        $(".bimg").attr("src","img/main/b.png");
        $(".cimg").attr("src","img/main/c_click.png");
        $(".dimg").attr("src","img/main/d.png");
        $(".eimg").attr("src","img/main/e.png");
        playerHand = "c";
    });
    $(".dimg").on("click", function() {
        $(".aimg").attr("src","img/main/a.png");
        $(".bimg").attr("src","img/main/b.png");
        $(".cimg").attr("src","img/main/c.png");
        $(".dimg").attr("src","img/main/d_click.png");
        $(".eimg").attr("src","img/main/e.png");
        playerHand = "d";
    });
    $(".eimg").on("click", function() {
        $(".aimg").attr("src","img/main/a.png");
        $(".bimg").attr("src","img/main/b.png");
        $(".cimg").attr("src","img/main/c.png");
        $(".dimg").attr("src","img/main/d.png");
        $(".eimg").attr("src","img/main/e_click.png");
        playerHand = "e";
    });
    
    
    /************** COMPUTER'S HAND **************/
    var generateCompHand = function() {
        var x = (Math.floor(Math.random() * 5)) + 1;
        switch (x) {
            case 1:
                $(".aimg").css("border", "3px solid red");
                return "a";
            case 2:
                $(".bimg").css("border", "3px solid red");
                return "b";
            case 3:
                $(".cimg").css("border", "3px solid red");
                return "c";
            case 4:
                $(".dimg").css("border", "3px solid red");
                return "d";
            case 5:
                $(".eimg").css("border", "3px solid red");
                return "e";
        }
    };
    
    
    /************** DETERMINE WINNER **************/
    var winner = function() {
        //tie
        if (playerHand == compHand) {
            $(".resultState").html("引き分け");
        //win
        } else {
            if ((playerHand == "a") && (compHand == "c" || compHand == "e")) {
            $(".resultState").html("天孫降臨に近付いた!");
            playerWins++;
        } else if ((playerHand == "b") && (compHand == "a" || compHand == "e")) {
            $(".resultState").html("天孫降臨に近付いた!");
            playerWins++;
        } else if ((playerHand == "c") && (compHand == "b" || compHand == "d")) {
            $(".resultState").html("天孫降臨に近付いた!");
            playerWins++;
        } else if ((playerHand == "d") && (compHand == "c" || compHand == "b")) {
            $(".resultState").html("天孫降臨に近付いた!");
            playerWins++;
        } else if ((playerHand == "e") && (compHand == "c" || compHand == "d")) {
            $(".resultState").html("天孫降臨に近付いた!");
            playerWins++;
        // loss
        } else {
            $(".resultState").html("天孫降臨が遠のいた");
            compWins++;
        }
        }
    };
    
    
    /************** GO **************/
    $(".go").on("click", function() {
        //if no option is picked
        if (playerHand == "") {
            $(".resultState").html("選択してください");
            $('.result').show();
            $(".result").animate({opacity: "1"}, 1500);
            $(".result").animate({opacity: "1"}, 1500);
            $(".result").animate({opacity: "0"}, 1500);
            $(".fgolOptions").animate({opacity: "0.1"}, 1500);
            $(".fgolOptions").animate({opacity: "0.1"}, 1500);
            $(".fgolOptions").animate({opacity: "1"}, 1500)
            setTimeout(function(){
                $('.result').hide();
            }, 4500)
        //runs the go button    
        } else {
            //calls a function to generate the computer's hand
            compHand = generateCompHand();

            //call function to determine winner
            winner();

            // logs result to console
            console.log("Player Hand is " + playerHand);
            console.log("Comp Hand is " + compHand);
            console.log("Player Wins is "+ playerWins);
            console.log("Comp Wins is "+ compWins);

            //if wins are less than 2
            if ((playerWins < 3) && (compWins < 3)) {
                //animte in result
                setTimeout(function(){
                    $('.result').show();
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "0"}, 1500);
                    $(".fgolOptions").animate({opacity: "0.1"}, 1500);
                    $(".fgolOptions").animate({opacity: "0.1"}, 1500);
                    $(".fgolOptions").animate({opacity: "1"}, 1500)
                }, 500)

                //add win icons
                setTimeout(function(){
                    switch (playerWins) {
                        case 1:
                            $(".playCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".playCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".playCounter3").css("background-color", "#233656");
                            break;
                    }
                    switch (compWins) {
                        case 1:
                            $(".compCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".compCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".compCounter3").css("background-color", "#233656");
                            break;
                    }
                }, 1500)

                //round goes up by one
                round++;
                setTimeout(function(){
                    $(".roundNum").html(round);
                }, 4500)

                //reset values
                setTimeout(function(){
                    $(".aimg").attr("src","img/main/a.png");
                    $(".bimg").attr("src","img/main/b.png");
                    $(".cimg").attr("src","img/main/c.png");
                    $(".dimg").attr("src","img/main/d.png");
                    $(".eimg").attr("src","img/main/e.png");
                    $(".aimg").css("border", "3px solid #fff");
                    $(".bimg").css("border", "3px solid #fff");
                    $(".cimg").css("border", "3px solid #fff");
                    $(".dimg").css("border", "3px solid #fff");
                    $(".eimg").css("border", "3px solid #fff");
                    playerHand = "";
                }, 3000)
                setTimeout(function(){
                    $('.result').hide();
                }, 4500)
            
            //if wins are 2
            } else {
                //hide the GO button and show the REPLAY button
                $('.go').hide();
                $('.replay').show();
                
                //determine the winner
                if (playerWins >= 3) {
                    $(".resultState").html("天孫降臨！！");
                    $("#fgol").css("background-image", "url('img/main/win.png')");
                    $(".replay").on("click", function() {
                        $("#fgol").css("background-image", "none");
                    });
                } 
                else {
                    $(".resultState").html("天孫降臨失敗");
                    $("#fgol").css("background-image", "url('img/main/lose.png')");
                    $(".replay").on("click", function() {
                        $("#fgol").css("background-image", "none");
                    });
                }
                
                //animate in result
                setTimeout(function(){
                    $('.result').show();
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".result").animate({opacity: "1"}, 1500);
                    $(".fgolOptions").animate({opacity: "0.1"}, 1500);
                    $(".fgolOptions").animate({opacity: "0.1"}, 1500);
                }, 500)

                //add win icons
                setTimeout(function(){
                    switch (playerWins) {
                        case 1:
                            $(".playCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".playCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".playCounter3").css("background-color", "#233656");
                            break;
                    }
                    switch (compWins) {
                        case 1:
                            $(".compCounter1").css("background-color", "#233656");
                            break;
                        case 2:
                            $(".compCounter2").css("background-color", "#233656");
                            break;
                        case 3:
                            $(".compCounter3").css("background-color", "#233656");
                            break;
                    }
                }, 1500)

                //reset values
                setTimeout(function(){
                    $(".aimg").attr("src","img/main/a.png");
                    $(".bimg").attr("src","img/main/b.png");
                    $(".cimg").attr("src","img/main/c.png");
                    $(".dimg").attr("src","img/main/d.png");
                    $(".eimg").attr("src","img/main/e.png");
                    $(".aimg").css("border", "3px solid #fff");
                    $(".bimg").css("border", "3px solid #fff");
                    $(".cimg").css("border", "3px solid #fff");
                    $(".dimg").css("border", "3px solid #fff");
                    $(".eimg").css("border", "3px solid #fff");
                    playerHand = "";
                }, 3000);
            }
        }
    });
    
                
    /************** REPLAY **************/
    $(".replay").on("click", function() {
        //hide the REPLAY button and show the GO button
        $('.replay').hide();
        $('.go').show();
        
        //reset the values
        playerHand = "";
        compHand = "";
        round = 1;
        playerWins = 0;
        compWins = 0;
        $(".roundNum").html(round);
        
        //resets the win counters
        $(".playCounter1").css("background-color", "#cdd6d5");
        $(".playCounter2").css("background-color", "#cdd6d5");
        $(".playCounter3").css("background-color", "#cdd6d5");
        $(".compCounter1").css("background-color", "#cdd6d5");
        $(".compCounter2").css("background-color", "#cdd6d5");
        $(".compCounter3").css("background-color", "#cdd6d5");
        
        //clear results animation
        $(".result").animate({opacity: "0"}, 1500);
        $(".fgolOptions").animate({opacity: "1"}, 1500)
        setTimeout(function(){
            $('.result').hide();
        }, 1500)
    });         
  });
});

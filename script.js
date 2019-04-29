"use strict";
let userHealth = 40;
let grantHealth = 10;
let userWins = 0;
let grantWins = 0;
let userDamage = 0;
let grantDamage = 0;
let userName = undefined;
let play = prompt("Do you want to play?");

if (play === "yes") {
    userName = prompt("choose a username");
    while (grantWins < 1 && userWins < 3) {
        if (userHealth > 0 && grantHealth > 0) {
            userDamage = Math.floor((Math.random() * 2) + 1);
            grantDamage = Math.floor((Math.random() * 2) + 1);
            userHealth -= userDamage;
            console.log(`${userName} has ${userHealth} left`);
            grantHealth -= grantDamage;
            console.log(`Grant has ${grantHealth} left`);
            if (grantHealth <= 0) {
                console.log("You beat grant");
                userWins++;
                grantHealth = 10;
            }
            if (userWins === 3) {
                console.log("You win");
                break;
            }
            if (userHealth <= 0) {
                console.log("Grant wins");
                grantWins++;
                break;
            }
        }
    }
}
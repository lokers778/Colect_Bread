document.addEventListener("DOMContentLoaded", function () {
    function Furry() {
        this.x =4;
        this.y = 4;
        this.direction = "right";

    }

    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10)
        };
        this.showFurry = function () {

            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
        }
        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
        }
        this.moveFurry = function () {
            if (this.furry.direction === "right") {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === "left") {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === "up") {
                this.furry.y = this.furry.y + 1;
            } else if (this.furry.direction == "down") {
                this.furry.y = this.furry.y - 1;
            }
            this.hideVisibleFurry();
            this.showFurry()
        }
        var self = this;
        this.startGame = setInterval(function () {
            self.moveFurry()
        }, 250)

        this.hideVisibleFurry=function(){
            var target=document.querySelector(".furry");
            target.classList.remove("furry");
        }

    }

    var game1 = new Game();
    game1.showFurry();
    game1.showCoin();
    game1.startGame;
    console.log(self)
});
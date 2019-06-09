document.addEventListener("DOMContentLoaded", function () {
    function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = "";

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
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === "up") {
                this.furry.y = this.furry.y + 1;
            } else if (this.furry.direction == "down") {
                this.furry.y = this.furry.y - 1;
            }
            this.wallColision();
            this.checkCoinCollision();
            this.hideVisibleFurry();
            this.showFurry();
        }

        var self = this;
        this.startGame = setInterval(function () {
            self.moveFurry()
        }, 250)

        this.hideVisibleFurry = function () {
            var target = document.querySelector(".furry");
            target.classList.remove("furry");
        }
        this.movingFurry = function (event) {
            switch (event.which) {
                case 37:
                    this.furry.direction = "left";
                    break;
                case 39:
                    this.furry.direction = "right";
                    break;
                case 40:
                    this.furry.direction = "up";
                    break;
                case 38:
                    this.furry.direction = "down";
                    break;
            }


        };
        this.score = 0;
        this.checkCoinCollision = function () {
            if (this.coin.x === this.furry.x && this.coin.y === this.furry.y) {
                console.log("point");
                var targetCoin = document.querySelector(".coin");
                targetCoin.classList.remove("coin");
                this.coin = new Coin();
                this.showCoin();
                var Score = document.querySelector("#score > div > strong")
                this.score++;
                Score.innerText = this.score;

            }


        }
        this.wallColision = function () {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
                clearInterval(this.startGame);
                this.hideVisibleFurry();
                alert("GAME OVER " + "YOUR SCORE "+ this.score)
            }
        }

    }

    document.addEventListener("keydown", function (event) {
        game1.movingFurry(event)
    })

    var game1 = new Game();
    game1.showFurry();
    game1.showCoin();
    game1.startGame;
});
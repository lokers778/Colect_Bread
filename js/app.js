document.addEventListener("DOMContentLoaded", function () {
    function Duck() {
        this.x = 0;
        this.y = 0;
        this.direction = "";

    }

    function Bread() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }

    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.duck = new Duck();
        this.bread = new Bread();
        this.score = 0;
        this.index = function (x, y) {
            return x + (y * 10)
        };
        this.showDuck = function () {

            this.board[this.index(this.duck.x, this.duck.y)].classList.add("duck");
        }
        this.showBread = function () {
            this.board[this.index(this.bread.x, this.bread.y)].classList.add("bread");
        }
        this.moveDuck = function () {
            if (this.duck.direction === "right") {
                this.duck.x = this.duck.x + 1;
            } else if (this.duck.direction === "left") {
                this.duck.x = this.duck.x - 1;
            } else if (this.duck.direction === "up") {
                this.duck.y = this.duck.y + 1;
            } else if (this.duck.direction == "down") {
                this.duck.y = this.duck.y - 1;
            }
            this.wallColision();
            this.checkBreadCollision();
            this.hideVisibleDuck();
            this.showDuck();
        }

        var self = this;
        this.startGame = setInterval(function () {
            self.moveDuck()
        }, 250)

        this.hideVisibleDuck = function () {
            var target = document.querySelector(".duck");
            target.classList.remove("duck");
        }
        this.movingDuck = function (event) {
            switch (event.which) {
                case 37:
                    this.duck.direction = "left";
                    break;
                case 39:
                    this.duck.direction = "right";
                    break;
                case 40:
                    this.duck.direction = "up";
                    break;
                case 38:
                    this.duck.direction = "down";
                    break;
            }


        };
        this.score = 0;
        this.checkBreadCollision = function () {
            if (this.bread.x === this.duck.x && this.bread.y === this.duck.y) {
                console.log("point");
                var targetBread = document.querySelector(".bread");
                targetBread.classList.remove("bread");
                this.bread = new Bread();
                this.showBread();
                var Score = document.querySelector("#score > div > strong")
                this.score++;
                Score.innerText = this.score;

            }


        }
        this.wallColision = function () {
            if (this.duck.x < 0 || this.duck.x > 9 || this.duck.y < 0 || this.duck.y > 9){
                clearInterval(this.startGame);
                this.hideVisibleDuck();
                alert("GAME OVER " + "YOUR SCORE "+ this.score)
            }
        }

    }

    document.addEventListener("keydown", function (event) {
        game1.movingDuck(event)
    })

    var game1 = new Game();
    game1.showDuck();
    game1.showBread();
    game1.startGame;
});
//credit to ImKennyYip as a lot of this code comes from him


var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context; 

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var velocityX = 0;
var velocityY = 0;

var snakeBody = [];

var appleX;
var appleY;

var gameOver = false;

window.onload = function() 
{
    initialiseBoard();

    document.addEventListener("keyup", changeDirection);
    setInterval(update, 50);
}

function update() 
{
    if (gameOver) 
    {
        return;
    }

    clearBoard();

    context.fillStyle="red";
    context.fillRect(appleX, appleY, blockSize, blockSize);

    if (snakeX == appleX && snakeY == appleY) 
    {
        snakeBody.push([appleX, appleY]);
        placeApple();
    }

    for (let i = snakeBody.length-1; i > 0; i--) 
    {
        snakeBody[i] = snakeBody[i-1];
    }
    if (snakeBody.length) 
    {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) 
    {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }

    //game over conditions
    if (snakeX < 0 || snakeX > (cols-1)*blockSize || snakeY < 0 || snakeY > (rows-1)*blockSize) 
    {
        gameOver = true;
        alert("Game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) 
    {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over");
        }
    }
}

function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) 
    {
        velocityX = 0;
        velocityY = -1;
    }
    else if (e.code == "ArrowDown" && velocityY != -1) 
    {
        velocityX = 0;
        velocityY = 1;
    }
    else if (e.code == "ArrowLeft" && velocityX != 1) 
    {
        velocityX = -1;
        velocityY = 0;
    }
    else if (e.code == "ArrowRight" && velocityX != -1) 
    {
        velocityX = 1;
        velocityY = 0;
    }
}




function placeApple() 
{
    appleX = Math.floor(Math.random() * cols) * blockSize;
    appleY = Math.floor(Math.random() * rows) * blockSize;
}

function clearBoard()
{
    context.fillStyle="black";
    context.fillRect(0, 0, board.width, board.height);
}

function initialiseBoard()
{
    board = document.getElementById("board");
    board.height = rows * blockSize;
    board.width = cols * blockSize;
    context = board.getContext("2d"); 
    placeApple();
}

function restartGame() 
{
    location.reload(); // Reload the entire page
}

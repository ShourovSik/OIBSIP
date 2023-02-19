var circle= document.getElementById("circle");
        var upbtn= document.getElementById("upbtn");
        var downbtn= document.getElementById("downbtn");

        var rotateValu = circle.style.transform;
        var rotateSum;

        upbtn.onclick =function()
        {
            rotateSum = rotateValu + "rotate(-90deg)";
            circle.style.transform = rotateSum;
            rotateValu = rotateSum;

        }
       downbtn.onclick = function()
        {
            rotateSum = rotateValu + "rotate(90deg)";
            circle.style.transform = rotateSum;
            rotateValu = rotateSum;

        }
function manageLikes(likes, setLikes, amount){
    var newAmount = parseInt(likes) + parseInt(amount);
    
    if (newAmount < 0) {
        newAmount = 0
    }
    
    setLikes(newAmount);

    // console.log(likes);
    return newAmount;
}


function hoverVoting(){
    // function for changing the image of vote plus, minus to a darker version

    var upVotes = [...document.getElementsByClassName("upVote")];
    var downVotes = [...document.getElementsByClassName("downVote")];

        if (upVotes !== null && upVotes!== undefined && upVotes.length !== 0 &&downVotes !== null && downVotes!== undefined && downVotes.length !== 0 ){
            
            // up vote images change on hover and mouseout darker

            upVotes.forEach(element => {
                element.addEventListener("mouseover", function(){
                    element.getElementsByTagName("img")[0].src ="/images/icon-plus-hover.svg";
                    console.log("hover up vote");
                });
            });
            
            upVotes.forEach(element => {
                element.addEventListener("mouseout", function(){
                    element.getElementsByTagName("img")[0].src ="/images/icon-plus.svg";
                    console.log("hover up vote");
                });
            });
            
            // down vote images change on hover and mouseout darker

            downVotes.forEach(element => {
                element.addEventListener("mouseover", function(){
                    element.getElementsByTagName("img")[0].src ="/images/icon-minus-hover.svg";
                    console.log("hover down vote");
                    })
                });
                
            downVotes.forEach(element => {
                element.addEventListener("mouseout", function(){
                    element.getElementsByTagName("img")[0].src ="/images/icon-minus.svg";
                    console.log("hover down vote");
                });
            });
    }
    
}


export {manageLikes, hoverVoting}; 

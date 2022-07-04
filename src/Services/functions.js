function manageLikes(likes,setLikes, amount){
    const oldAmount = likes;
    var newAmount = parseInt(likes) + parseInt(amount);

    if (newAmount < 0) {
        newAmount = 0
    }

    console.log(oldAmount, newAmount);
    return newAmount;
}


export {manageLikes}; 
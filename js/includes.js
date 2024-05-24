const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

function findFriends(friendName) {
    const isFriends = friends.includes(friendName);
    if (isFriends) {
        return `Hoooray! ${friendName} is your friend.`;
    }
    return `Sorry, ${friendName} is not your friend.`
}

const res = findFriends('Ajax');
console.log("🚀 ~ res:", res);


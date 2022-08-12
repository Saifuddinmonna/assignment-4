// problem-5 

function isBestFriend(object1,object2) {
      
		

        if (object1.name == object2.friend && object1.friend == object2.name) {

                return true;
        }
        else {
                return false;
        }
        }
        const myFriends = isBestFriend(   object1 = { name: "abul", friend: "babul" },
        object2=  { name: "babul", friend: "abul" })
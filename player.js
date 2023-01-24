//player constants to be exported below--->

export default function Player({ name } = {}) { //empty brackets -> "destructuring" name off object that gets passed in
    this.name = name;               //if no object gets passed in, empty object bc name undefined - by default use empty obj- will not error 
    this.hand = {};
    }



function shout(string) {
    return string.toUpperCase('hello')
}

function whisper(string) {
    return string.toLowerCase('HELLO')
}

function logShout(spy) {
return console.log(spy.toUpperCase('hello'))
}
console.log(spy)

function logWhisper(spy) {
    return console.log(spy.toLowerCase('HELLO'))
}
console.log(spy)

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    } else {
      return "Hello!";
    }
  }
var censoredWords = ["sad", "bad", "mad"];

var customCensoredWords = [];

function censor(inStr) {
    for (pos in censoredWords) {
        inStr = inStr.replace(censoredWords[pos], '*' * inStr.length);
    }

    for (pos in customCensoredWords) {
        inStr = inStr.replace(customCensoredWords[pos], '****');
    }

    return inStr;
}

function addCensoredWord(word) {
    customCensoredWords.push(word);
}

function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}

exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;
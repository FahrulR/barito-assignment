function anagramGrouper(words) {
    const anagrams = {};
    words.forEach((word) => {
        const sortedWord = word.split('').sort().join();
        if (anagrams[sortedWord]) {
            return anagrams[sortedWord].push(word);
        }
        anagrams[sortedWord] = [word];
    });

    for (const i in anagrams) {
        if (anagrams[i].length > 1) {
            var result = anagrams[i].join(' ')
            console.log(result);
        }
    }
}
anagramGrouper(['bat', 'code', 'cat', 'act', 'cab', 'crazy', 'tac']);
const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']

function IsInDict(word) {
    for (var i = 0; i < dictionary.length; i++) {
        if (dictionary[i] == word) {
            return true
        }
    }
    return false
}

function wordBreak(str, n, result) {
    for (var i = 1; i <= n; i++) {
        var subStr = str.substring(0, i)
        if (IsInDict(subStr)) {
            if (i == n) {
                result += subStr
                console.log(result)
            }
            wordBreak(str.substr(i, n - i), n - i, result + subStr + ",")
        }
    }

}

var str = "programit"
var str2 = "programmerit"
wordBreak(str, str.length, "")
wordBreak(str2, str2.length, "")
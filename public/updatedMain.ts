const firstNonRepeated = (s: string): string => {

    //Declaration for character objects
    let nonRepeated = new Map<string, string>()
    let repeated = new Map<string, string>()

    /**
     * Loop through all characters in s. If a character does not exist in either nonReapeated or repeated,
     * add the character to nonRepeated. If the character exists in nonRepeated, remove it from nonRepeated. If the character removed from nonRepeated
     * does not exist in repeated, add the character to repeated.
     */
    for (let i: number = 0; i < s.length; i++){
        if(nonRepeated[s[i]] === undefined){
            if(repeated[s[i]] === undefined){
                nonRepeated[s[i]] = i
            }
        } else {
            delete nonRepeated[s[i]]
            if(repeated[s[i]] === undefined){
                repeated[s[i]] = i
            }
        }
    }
    //generate an array of keys from nonRepeated
    const keys: string[] = Object.keys(nonRepeated)
    //if the array has a length of greater than 0, return the first key, else return an empty string
    return keys.length > 0 ? keys[0] : ''
}

console.log(firstNonRepeated('aabbcc'))
console.log(firstNonRepeated('aabcdefg'))
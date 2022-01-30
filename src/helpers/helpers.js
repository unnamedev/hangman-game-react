/**
 * Check if user win
 * @param correct
 * @param wrong
 * @param word
 * @returns {string}
 */
export const checkWin = (correct, wrong, word) => {
    let status = "win"

    // Check for win
    word.split("").forEach(letter => !correct.includes(letter) ? status = "" : null)

    // Check for lose
    if (wrong.length === 6) status = "lose"

    return status
}

/**
 * Get random word from array
 * @returns {string}
 */
export const getRandomWord = () => {
    const words = ["sociologic", "crestless", "ferulae", "senhora", "tisanes", "hetmans", "prolix", "lobbyists", "exteriorizing", "chronogram"]
    return words[Math.floor(Math.random() * words.length)]
}
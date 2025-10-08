/**
 * @param {keyboardEvent} event
 * @param {string[]} keys
 * @return {boolean}
 * Accepts HTML event and array of key combos and return boolean
 * return true if all key combinations provided by the second parameter were pressed
 * returns false otherwise
 */
function handleKeyCombinations(event, keys) {
  return keys.every((key) => {
    switch (key) {
      case "Shift":
        return event.shiftKey;
      case "Alt":
        return event.altKey;
      case "Meta":
        return event.metaKey;
      case "Control":
        return event.ctrlKey;
      default:
        return event.key.toLowerCase() === key.toLowerCase();
    }
  })
}

export default handleKeyCombinations;

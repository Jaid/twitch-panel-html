import {parse} from "query-string"

/**
 * @type {Object}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.content = "{iconcenter:lock/Nur für Mods}{iconcenter:lock/Nur für Subscriber und für Mods und für dies und für das}{bold:Beispiel}:{br:5}{chat:a\nb}"
query.themeColor = "hsl(100, 100%, 50%)"

export default Object.assign(defaults, query)
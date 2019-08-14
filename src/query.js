import {parse} from "query-string"

/**
 * @type {Object}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.content = "abc{br:20}{bold:Beispiel}:{br:5}{chat:a\nb}"

export default Object.assign(defaults, query)
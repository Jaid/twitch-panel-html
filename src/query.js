import {parse} from "query-string"

/**
 * @type {Object}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.content = "a\nb{br:20}c"

export default Object.assign(defaults, query)
import {parse} from "query-string"

/**
 * @type {Object}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

// query.icon = "terminal"

export default Object.assign(defaults, query)
import {parse} from "query-string"

/**
 * @type {Object}
 */
const query = parse(document.location.search, {
  parseBooleans: true,
})

const defaults = {
  mode: "twitch",
}

export default Object.assign(defaults, query)
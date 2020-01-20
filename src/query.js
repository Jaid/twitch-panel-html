import {parse} from "query-string"

/**
 * @type {import("./lib/propTypes").Props}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

Object.assign(defaults, query)

if (defaults.debug !== undefined) {
  defaults.content = "{chat:abc}"
}

export default defaults
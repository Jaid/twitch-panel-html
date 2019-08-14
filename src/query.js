import {parse} from "query-string"

/**
 * @type {import("./lib/propTypes").Props}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.hasLink = 1

export default Object.assign(defaults, query)
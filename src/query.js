import {parse} from "query-string"

/**
 * @type {import("./lib/propTypes").Props}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.content = "a{qr:1999}b"

export default Object.assign(defaults, query)
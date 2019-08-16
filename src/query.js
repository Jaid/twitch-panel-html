import {parse} from "query-string"

/**
 * @type {import("./lib/propTypes").Props}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.content = "a{qr:553346451999}"

export default Object.assign(defaults, query)
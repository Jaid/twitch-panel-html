import {parse} from "query-string"

/**
 * @type {import("./lib/propTypes").Props}
 */
const query = parse(document.location.search)

const defaults = {
  mode: "twitch",
}

query.hasLink = true
query.icon = "github"
query.title = "Uff, das hier ist ein ganz schön langer Text."

export default Object.assign(defaults, query)
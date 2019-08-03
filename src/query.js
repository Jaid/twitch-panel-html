import {parse} from "query-string"

/**
 * @type {Object}
 * @string {}
 */
const query = parse(document.location.search)

export default {
  mode: "twitch",
  ...query,
}
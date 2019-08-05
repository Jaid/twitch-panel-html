import PropTypes from "prop-types"

/**
  * @typedef {{
  *   className: *,
  *   backgroundStripesSize: number,
  *   backgroundColor: string,
  *   themeColor: string,
  *   borderWidth: number,
  *   borderTopRightRadius: number,
  *   title: string,
  *   titleUppercase: boolean,
  *   titleSize: number,
  *   titlePadding: number,
  *   hasLink: boolean,
  *   titleWeight: number,
  *   content: string,
  *   backgroundStripesColor: string,
  *   contentPadding: number,
  *   icon: string,
  *   iconSize: number
  * }} Props
  */

export const defaultProps = {
  backgroundStripesSize: 4,
  backgroundColor: "rgb(23, 23, 23)",
  themeColor: "hsl(0, 100%, 50%)",
  borderWidth: 2,
  borderTopRightRadius: 30,
  title: "Panel",
  titleUppercase: true,
  titleSize: 36,
  titlePadding: 16,
  titleWeight: 300,
  contentPadding: 12,
  iconSize: 40,
}

export default {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  backgroundStripesSize: PropTypes.number,
  backgroundColor: PropTypes.string,
  themeColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderTopRightRadius: PropTypes.number,
  title: PropTypes.string,
  titleUppercase: PropTypes.bool,
  titleSize: PropTypes.number,
  titlePadding: PropTypes.number,
  hasLink: PropTypes.bool,
  titleWeight: PropTypes.number,
  content: PropTypes.string,
  backgroundStripesColor: PropTypes.string,
  contentPadding: PropTypes.number,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
}
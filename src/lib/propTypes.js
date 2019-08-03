import PropTypes from "prop-types"

/**
  * @typedef {{
  *   className: *,
  *   backgroundStripesSize: number,
  *   backgroundColor: string,
  *   titleColor: string,
  *   borderWidth: number,
  *   borderTopRightRadius: number,
  *   title: string,
  *   titleUppercase: boolean,
  *   titleSize: number,
  *   titlePadding: number,
  *   hasLink: boolean,
  *   titleWeight: number,
  *   content: string,
  *   backgroundStripesColor: string
  * }} Props
  */

export const defaultProps = {
  backgroundStripesSize: 4,
  backgroundColor: "rgb(23, 23, 23)",
  titleColor: "hsl(0, 100%, 50%)",
  borderWidth: 2,
  borderTopRightRadius: 30,
  title: "Panel",
  titleUppercase: true,
  titleSize: 36,
  titlePadding: 12,
  titleWeight: 300,
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
  titleColor: PropTypes.string,
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
}
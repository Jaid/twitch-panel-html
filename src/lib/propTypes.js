import PropTypes from "prop-types"

export default {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]),
  backgroundStripesSize: PropTypes.number,
  backgroundStripesOpacity: PropTypes.number,
  backgroundColor: PropTypes.string,
  titleColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderTopRightRadius: PropTypes.number,
  title: PropTypes.string,
  titleUppercase: PropTypes.bool,
  titleSize: PropTypes.number,
  titlePadding: PropTypes.number,
  hasLink: PropTypes.bool,
}
import list from "./fonts.lines"

export default {
  fonts: list.map(font => ({
    font,
    weights:
      [
        "100",
        "100i",
        "200",
        "200i",
        "300",
        "300i",
        "400",
        "400i",
        "500",
        "500i",
        "600",
        "600i",
        "700",
        "700i",
        "800",
        "800i",
        "900",
        "900i",
      ],
  })),
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin-ext",
    "vietnamese",
    "hebrew",
  ],
}
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const buttonProps = (
  color,
  backgroundColor,
  bgHoverColor,
  fontWeight,
  borderColor = "transparent"
) => {
  return {
    color,
    backgroundColor,
    borderColor,
    textTransform: "capitalize",
    borderRadius: "8px",
    fontFamily: "Poppins",
    fontWeight,
    "&:hover": {
      backgroundColor: bgHoverColor,
    },
  };
};

export const FilledButton = styled(Button)(({ wt }) => ({
  ...buttonProps("#fff", "#7739EC", "#7739EC", wt),
  marginLeft: "20px",
}));

export const OutlinedButton = styled(Button)(({ wt }) => ({
  ...buttonProps("#7739EC", "#fff", "#fff", wt, "#7739EC"),
  margin: "0 20px",
}));

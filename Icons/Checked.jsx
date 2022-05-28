import React from "react";

function Icon(props) {
  return (
    <svg
      ariaHidden="true"
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium hover-icon-animation css-ud3t3b"
      data-testid="CheckCircleOutlineOutlinedIcon"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"></path>
    </svg>
  );
}

export default Icon;
export const classes = {
  paginationParent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    width: "100%",
  },
  rowSelectContainer: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginTop: "5px",
    padding: "12px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#666666",
    "& span": {
      marginRight: "12px",
      paddingBottom: "6px",
    },
  },
  paginationContainer: {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    marginTop: "5px",
    padding: "12px",
    fontFamily: "Source Sans Pro",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#666666",
  },
  pagination: {
    marginRight: "24px",
    "& button": {
      fontFamily: "Source Sans Pro",
      fontSize: "14px",
      fontWeight: "bold",
      color: "#CCCCCC",
      margin: "0px -2px",
    },
    "& .Mui-selected": {
      color: "#666666",
      backgroundColor: "#ffffff00 !important",
      "&:hover": {
        backgroundColor: "#ffffff00 !important",
      },
    },
    "& .MuiPaginationItem-previousNext": {
      color: "#666666",
    },
  },
  rowSelect: {
    fontFamily: "Source Sans Pro",
    fontSize: "14px",
    color: "#666666",
    fontWeight: "bold",
    borderRadius: "6px !important",
    "& legend": {
      display: "none",
    },
    "& svg": {
      display: "none",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#DBDEDF",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CACDCE",
    },
    "& .MuiOutlinedInput-input": {
      padding: "4px 12px 8px 12px !important",
    },
  },
};

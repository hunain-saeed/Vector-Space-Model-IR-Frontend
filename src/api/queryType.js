const queryType = (query) => {
    let q = query.split()
    console.log(q);
  if (query.includes("/")) {    // proximity query
    return 1;
  } else if (query.includes("and") && query.includes("or")) {
      return 2;
  } else if (query.includes("and") && query.includes("not")){
      return 2;
  } else if (query.includes("or") && query.includes("not")) {
      return 2;
  } else if (query.includes("or") && query.includes("not") && query.includes("and")){
      return 2;
  } else {
      return 3;
  }
};

export default queryType;

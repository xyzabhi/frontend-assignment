const API_URL =
  "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";

const transformData = (data) => {
  return data.map((item) => ({
    "S.No.": item["s.no"],
    "Percentage funded": item["percentage.funded"],
    "Amount pledged": item["amt.pledged"],
  }));
};

export const userData = async () => {
  try {
    // Add loading state if needed
    const response = await fetch(API_URL);

    const jsonData = await response.json();

    const transformedData = transformData(jsonData);
    return {
      data: transformedData,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      data: [],
      error: error.message,
    };
  }
};

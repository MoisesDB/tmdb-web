const formatMonth = (month) => {
  switch (month) {
    case 1:
      return "Jan.";
    case 2:
      return "Fev.";
    case 3:
      return "Mar.";
    case 4:
      return "Abr.";
    case 5:
      return "Maio.";
    case 6:
      return "Jun.";
    case 7:
      return "Jul.";
    case 8:
      return "Ago.";
    case 9:
      return "Set.";
    case 10:
      return "Out.";
    case 11:
      return "Nov.";
    case 12:
      return "Dez.";
    default:
      return "Jan.";
  }
};

const formattedDate = (release_date) => {
  const date = new Date(release_date);

  return `${date.getFullYear()}`;
};

export default formattedDate;

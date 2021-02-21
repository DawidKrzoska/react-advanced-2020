export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "item added",
    };
  } else if (action.type === "NO_ITEM") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Text field is blank",
    };
  } else if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
      modalContent: "",
    };
  } else if (action.type === "REMOVE_ITEM") {
    const newItems = state.people.filter((item) => item.id !== action.payload);
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "Item Removed",
    };
  }
};

export default reducer;

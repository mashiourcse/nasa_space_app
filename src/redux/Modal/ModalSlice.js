import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditModalOpen: false,
  isAddModalOpen: false,
  isDeleteModalOpen: false,
  isViewModalOpen: false,
  //   isHomeCategorySidebarOpen: false,
};

const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsEditModalOpen: (state) => {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
    setIsAddModalOpen: (state) => {
      state.isAddModalOpen = !state.isAddModalOpen;
    },
    setIsDeleteModalOpen: (state) => {
      state.isDeleteModalOpen = !state.isDeleteModalOpen;
    },
    setIsViewModalOpen: (state) => {
      state.isViewModalOpen = !state.isViewModalOpen;
    },
    // setIsHomeCategorySidebarOpen: (state) => {
    //   state.isHomeCategorySidebarOpen = !state.isHomeCategorySidebarOpen;
    // },
  },
});

export const {
  setIsAddModalOpen,
  setIsDeleteModalOpen,
  setIsEditModalOpen,
  setIsViewModalOpen,
  //   setIsHomeCategorySidebarOpen,
} = ModalSlice.actions;

export default ModalSlice.reducer;

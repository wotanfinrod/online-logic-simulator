import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface MovedUser {
  x: number;
  y: number;
  userID: string;
}

interface ProductState {
  movedUsers: MovedUser[];
  currentUser: MovedUser;
}
const currUser = { x: 0, y: 0, userID: uuidv4() };
const initialState: ProductState = {
  movedUsers: [currUser],
  currentUser: currUser,
};

const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setMovedUsers(state: ProductState, action: PayloadAction<MovedUser[]>) {
      state.movedUsers = action.payload;
    },
    addNewMovedUser(state: ProductState, action: PayloadAction<MovedUser>) {
      const newUser = action.payload;
      const user = state.movedUsers.find(
        (user) => user.userID === newUser.userID
      );
      if (!user) {
        state.movedUsers.push(newUser);
      } else {
        user.x = newUser.x;
        user.y = newUser.y;
      }
    },
    setCurrentUsersPosition(
      state: ProductState,
      action: PayloadAction<MovedUser>
    ) {
      const newUser = action.payload;
      state.currentUser.x = newUser.x;
      state.currentUser.y = newUser.y;
      const movedCurrentUser = state.movedUsers.find(
        (user) => user.userID === newUser.userID
      )!;
      movedCurrentUser.x = newUser.x;
      movedCurrentUser.y = newUser.y;
    },
  },
});

export const { setMovedUsers, addNewMovedUser, setCurrentUsersPosition } =
  userSlice.actions;

export default userSlice.reducer;

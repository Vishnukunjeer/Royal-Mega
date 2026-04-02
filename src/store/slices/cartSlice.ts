import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: string;
  drawName: string;
  dateTime: string;
  pricePerTicket: number;
  totalPrice: number;
  tickets: Array<{
    main: number[];
    mega: number | null;
  }>;
}

interface CartState {
  items: CartItem[];
}

const savedCart = localStorage.getItem('royalLottoCart');

const initialState: CartState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // ✅ ADD
    addToCart: (
      state,
      action: PayloadAction<{
        drawName: string;
        sequence: { main: number[]; mega: number | null };
        price: number;
      }>
    ) => {
      const now = new Date();
      const formattedDate = now.toLocaleString("en-IN");

      const existingItem = state.items.find(
        item => item.drawName === action.payload.drawName
      );

      if (existingItem) {
        existingItem.tickets.push(action.payload.sequence);
        existingItem.totalPrice += action.payload.price;
        existingItem.dateTime = formattedDate;
      } else {
        state.items.push({
          id: action.payload.drawName,
          drawName: action.payload.drawName,
          dateTime: formattedDate,
          pricePerTicket: action.payload.price,
          totalPrice: action.payload.price,
          tickets: [action.payload.sequence],
        });
      }

      localStorage.setItem('royalLottoCart', JSON.stringify(state.items));
    },

    // ✅ REMOVE FULL DRAW
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem('royalLottoCart', JSON.stringify(state.items));
    },

    // ✅ REMOVE SINGLE TICKET 🔥
    removeSingleTicket: (
      state,
      action: PayloadAction<{ drawName: string; index: number }>
    ) => {
      const item = state.items.find(i => i.drawName === action.payload.drawName);
      if (!item) return;

      item.tickets.splice(action.payload.index, 1);

      item.totalPrice = item.tickets.length * item.pricePerTicket;

      if (item.tickets.length === 0) {
        state.items = state.items.filter(i => i.drawName !== action.payload.drawName);
      }

      localStorage.setItem('royalLottoCart', JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  removeSingleTicket
} = cartSlice.actions;

export default cartSlice.reducer;
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
  useDispatch,
} from "react-redux";

import { AppDispatch, RootState } from "@/features/Redux/store";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

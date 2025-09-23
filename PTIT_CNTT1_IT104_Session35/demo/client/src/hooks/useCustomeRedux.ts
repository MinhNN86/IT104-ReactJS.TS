// Customer hook thay vì sử dụng useDispatch và useSelector

import { useDispatch } from "react-redux";
import type { AppDispatch } from "../stores";
import { useSelector } from "react-redux";
import type { RootState } from "../stores";

export const useAppDisPath = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

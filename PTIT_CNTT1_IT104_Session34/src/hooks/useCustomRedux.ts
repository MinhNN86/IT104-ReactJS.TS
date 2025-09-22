import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../stores";

export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppDisPath = useDispatch.withTypes<AppDispatch>();

import {useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch } from "./upcomingsessions";
import { RootState } from "./upcomingsessions";

type DispatchFunction = ()=>AppDispatch;

export const useCartDispatch: DispatchFunction = useDispatch;
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
import { atomWithStorage } from "jotai/utils";
import { getSystemThemePreference } from "~/utils/style-utils";

export const themeAtom = atomWithStorage("theme", getSystemThemePreference());

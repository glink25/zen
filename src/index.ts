import "./index.css";
import "./zen/zen.css";

export { getHostBridge } from "./runtime/host";
export type {
    NativeBridgeMessage,
    NativeCallback,
    ZenAIToolDefinition,
    ZenInitPayload,
    ZenLocale,
    ZenRequestHandle,
    ZenRuntimeHost,
    ZenThemeMode,
} from "./runtime/types";
export type { ZenProps } from "./Zen";
export { Zen } from "./Zen";
export { getZenDayId, getZenStyleName, isZenEntranceOpen } from "./zen/date";
export type * from "./zen/types";

import { createAction } from "@reduxjs/toolkit"
import { ALERT_ON, ALERT_OFF } from "../../constants/index"

export const alertOpenTK = createAction(ALERT_ON)
export const alertCloseTK = createAction(ALERT_OFF)
import { combineReducers } from "redux";

import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import errors from "./errors_reducer";

const rootReducer = combineReducers({
  errors: errors,
  entities: entitiesReducer,
  session: sessionReducer,
  ui: uiReducer
});
export default rootReducer;

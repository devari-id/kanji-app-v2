import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";

export const actionClient = createSafeActionClient({
  handleServerError: (e) => {
    return e.message ?? DEFAULT_SERVER_ERROR_MESSAGE;
  },
});

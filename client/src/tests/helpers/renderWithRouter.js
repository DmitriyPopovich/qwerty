import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/app-router";

export const renderWithRouter = (component, initialRoute = "/") => {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};

// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserTable from "./components/UserTable";
import GlobalStyle from "./components/GlobalStyle";
import { Container, Header, UserTableWrapper } from "./components/Layout";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header>User Management Table</Header>
        <UserTableWrapper>
          <UserTable />
        </UserTableWrapper>
      </Container>
    </Provider>
  );
};

export default App;

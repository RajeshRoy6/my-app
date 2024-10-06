import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import UsersList from "../components/ApiCallComponent";

const mockStore = configureMockStore([]);

describe("UsersList Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      users: {
        users: [],
        loading: false,
        error: null,
      },
    });
  });

  beforeAll(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading message while fetching users", async () => {
    store = mockStore({
      users: {
        users: [],
        loading: true,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <UsersList />
      </Provider>
    );

    expect(screen.getByText("Loading users...")).toBeInTheDocument();
  });

  test("displays user data when users are successfully fetched", async () => {
    const mockUsers = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        username: "janedoe",
        email: "jane@example.com",
      },
    ];

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    store = mockStore({
      users: {
        users: mockUsers,
        loading: false,
        error: null,
      },
    });

    render(
      <Provider store={store}>
        <UsersList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument();
      expect(screen.getByText("johndoe")).toBeInTheDocument();
      expect(screen.getByText("john@example.com")).toBeInTheDocument();
    });
  });

  test("displays error message when fetching users fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(
      new Error("Failed to fetch users")
    );

    store = mockStore({
      users: {
        users: [],
        loading: false,
        error: "Failed to fetch users",
      },
    });

    render(
      <Provider store={store}>
        <UsersList />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("Failed to fetch users")).toBeInTheDocument();
    });
  });
});

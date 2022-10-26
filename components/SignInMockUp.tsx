import { showNotification } from "@mantine/notifications";
import { Button } from "@mantine/core";
import { useUser } from "../context/UserProvider";

export default function SignInMockUp() {
  const { user, setUser } = useUser();
  if (user && user.role == "user") {
    return (
      <div style={{ textAlign: "right" }}>
        <span style={{ marginRight: "16px" }}>{user.role}</span>
        <Button
          mt={3}
          variant="filled"
          onClick={() => {
            setUser({
              email: "admin@test.com",
              name: "admin",
              role: "admin",
            });
            showNotification({
              color: "green",
              title: "you are now logged in as 'admin'",
              message: "",
            });
          }}
        >
          sign in as admin
        </Button>
      </div>
    );
  } else if (user && user.role == "admin") {
    return (
      <div style={{ textAlign: "right" }}>
        <span style={{ marginRight: "16px" }}>{user.role}</span>{" "}
        <Button
          mt={3}
          variant="filled"
          onClick={() => {
            setUser({
              email: "user@test.com",
              name: "user",
              role: "user",
            });
            showNotification({
              color: "green",
              title: "you are now logged in as 'user'",
              message: "",
            });
          }}
        >
          sign in as user
        </Button>
      </div>
    );
  }
  return (
    <span
      style={{ width: "100%", textAlign: "right", display: "inline-block" }}
    >
      <Button mt={3} color={"gray"} variant="subtle">
        Sign in
      </Button>
    </span>
  );
}

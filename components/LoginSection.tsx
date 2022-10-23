import { Button } from "@mantine/core";
import Link from "next/link";
export default function LoginSection() {
  const session = "";
  if (session) {
    return (
      <span style={{ textAlign: "right" }}>
        Signed in as {session?.user?.email}
        <Button variant="filled" onClick={() => signOut()}>
          Sign out{" "}
        </Button>
      </span>
    );
  }
  return (
    <span
      style={{ width: "100%", textAlign: "right", display: "inline-block" }}
    >
      <Link href={"/SignIn"}>
        <Button color={"gray"} variant="subtle">
          Sign in
        </Button>
      </Link>
    </span>
  );
}

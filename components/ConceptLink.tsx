import Link from "next/link";
import router from "next/router";

export function ConceptLink(props: any) {
  const { concept } = props;
  const route = "/concept/" + concept.conceptId;
  return (
    <div>
      <Link
        href={{
          pathname: route,
        }}
      >
        <span
          onClick={() => {
            router.push(route);
          }}
        >
          {concept.displayName}
        </span>
      </Link>
    </div>
  );
}

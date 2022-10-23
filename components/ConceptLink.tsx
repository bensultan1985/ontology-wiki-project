import Link from "next/link";
import router from "next/router";

export function ConceptLink(props) {
  const { concept } = props;
  const route = "/concept/" + concept.conceptId;
  return (
    <div>
      <Link
        href={{
          pathname: route,
          // query: concept.conceptId,
        }}
      >
        <a
          href={route}
          onClick={() => {
            router.push(route);
          }}
        >
          {concept.displayName}
        </a>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 md:py-40">
      <p className="label text-muted">404</p>
      <h1 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)] leading-[1] tracking-[-0.03em]">
        There&rsquo;s nothing at this address.
      </h1>
      <p className="mt-8 text-xl text-muted">
        It may have moved when I rebuilt the site.{" "}
        <Link href="/" className="ink-link text-ink">
          Start from the home page
        </Link>
        .
      </p>
    </section>
  );
}

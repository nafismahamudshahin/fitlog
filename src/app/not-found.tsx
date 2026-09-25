import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <section className="flex min-h-[80vh] items-center justify-center px-5">
            <div className="text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#9CFF00]">
                    Page Not Found
                </p>

                <h1 className="text-8xl font-black text-white sm:text-9xl">
                    404
                </h1>

                <p className="mt-4 text-[#9CA3AF]">
                    Looks like this page went off the workout plan.
                </p>

                <Link href="/" className="mt-6 inline-block rounded-lg bg-[#9CFF00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b0ff32]">
                    Back to Home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
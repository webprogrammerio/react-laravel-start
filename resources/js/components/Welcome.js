import React from "react";
import { createRoot } from "react-dom/client";

export default function Welcome() {
    return (
        <>
            <header className="max-w-lg mx-auto">
                <h1 className="text-4xl font-bold text-white text-center">
                    React Laravel App
                </h1>
            </header>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                <section>
                    <h3 className="font-bold text-2xl">Welcome</h3>
                    <p className="text-gray-600 pt-2">
                        Sign in to your account.
                    </p>
                </section>

                <section className="mt-10">
                    <form className="flex flex-col" method="POST" action="#">
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                            />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                            />
                        </div>
                        <div className="flex justify-end">
                            <a
                                href="#"
                                className="text-sm text-blue-600 hover:text-blue-700 hover:underline mb-6"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </form>
                </section>
            </main>

            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                <p className="text-white">
                    Don't have an account?{" "}
                    <a href="#" className="font-bold hover:underline">
                        Sign up
                    </a>
                    .
                </p>
            </div>

            <footer className="max-w-lg mx-auto flex justify-center text-white">
                <a
                    href="https://webprogrammer.io/site/react-laravel-tutorial-intro/"
                    className="hover:underline"
                    target="_blank"
                >
                    React Laravel Tutorial
                </a>
                <span className="mx-3">•</span>
                <a
                    href="https://davidgrzyb.com/"
                    className="hover:underline"
                    target="_blank"
                >
                    Tailwind Login Template by David Grzyb
                </a>
            </footer>
        </>
    );
}

if (document.getElementById("root")) {
    const root = createRoot(document.getElementById("root"));
    root.render(<Welcome />);
}

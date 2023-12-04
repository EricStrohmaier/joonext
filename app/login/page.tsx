import LoginExtension from "../components/LoginExtension";

const LoginPage = () => {

  return (
    <>
      <div className="h-full">
        <div className="flex flex-col items-center flex-1 px-4 my-12 justify-center sm:px-6 lg:px-20 xl:px-24">
          <div className="w-full max-w-md mx-auto">
            <div>
              <h2 className="text-xl font-bold leading-9 tracking-tight md:text-3xl">
                Login to your NOSTR account
              </h2>
              <div className="mt-2 text-sm font-light leading-6 text-opacity-80 md:text-lg">
                My <span className="font-bold">WHAT</span> account? Learn more
                at{" "}
                <a
                  href="https://nostr.com"
                  className="font-light text-blue-600 hover:text-blue-500 hover:underline"
                >
                  nostr.com
                </a>
              </div>
            </div>
            <LoginExtension />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

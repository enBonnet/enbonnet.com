
import { Logo } from "~/components/icons/logo";

export const Hero = () => {
	return (
                <div className="h-screen flex justify-center max-w-full items-center">
                    <div className="flex md:flex-row flex-col gap-8 p-4 justify-center md:justify-start w-4xl">
                        <div className="flex items-center justify-center md:flex-1">
                            <div role="img" aria-labelledby="logo-title logo-desc">
                                <span id="logo-title" className="sr-only">
                                    Ender Bonnet Logo
                                </span>
                                <span id="logo-desc" className="sr-only">
                                    Personal logo of Ender Bonnet, Software Engineer based in
                                    Santiago, Chile
                                </span>
                                <Logo />
                            </div>
                        </div>
                        <div className="flex gap-4 items-start justify-center flex-col md:flex-1">
                            <div className="max-w-xl">
                                <h1 className="text-4xl">
                                    <span className="font-extrabold">Ender</span>{" "}
                                    <span className="font-normal">Bonnet</span>
                                </h1>
                                <h2 className="text-2xl border-b-4 border-[#462b6d] w-fit">
                                    @enBonnet
                                </h2>
                                <div className="text-2xl">
                                    <p className="py-2">
                                        <span className="font-bold">Software Engineer</span> based on
                                        Santiago, Chile 🇨🇱
                                    </p>
                                    <p className="py-2">
                                        Currently working at{" "}
                                        <a
                                            className="border-b-4 border-black"
                                            href="https://www.uber.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit Uber's website"
                                        >
                                            Uber
                                        </a>{" "}
                                        in{" "}
                                        <a
                                            className="border-b-4 border-[#0e8345]"
                                            href="https://www.ubereats.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Visit UberEats website"
                                        >
                                            UberEats
                                        </a>
                                    </p>
                                    <p className="py-2">
                                        Reach me out in the internet on{" "}
                                        <a
                                            className="border-b-4 border-[#0A66C2] font-semibold"
                                            href="https://linkedin.com/in/enbonnet"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Connect with me on LinkedIn"
                                        >
                                            LinkedIn
                                        </a>
                                        ,{" "}
                                        <a
                                            className="border-b-4 border-[#333333] font-semibold"
                                            href="https://github.com/enbonnet"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Check my projects on Github"
                                        >
                                            Github
                                        </a>{" "}
                                        or{" "}
                                        <a
                                            className="border-b-4 border-[#1DA1F2] font-semibold"
                                            href="https://bsky.app/profile/enbonnet.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Follow me on Bluesky"
                                        >
                                            Bluesky
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
export const ProjectsSection = () => {
	return (
		<div className="min-h-screen flex justify-center max-w-full items-center bg-[#392358]">
			<div className="flex md:flex-row flex-col gap-8 px-4 py-8 justify-center md:justify-start w-4xl">
				<div>
					<div className="mb-8">
						<h2 className="text-4xl font-extrabold">Projects</h2>
					</div>
					<div className="flex md:flex-row flex-col gap-9 justify-around items-center mb-12">
						<div className="min-w-44 max-w-44 shadow-black shadow-sm rounded-lg">
							<img
								className="rounded-lg"
								src="/images/routes-react-router-screenshot.png"
								alt="Routes React Router"
							/>
						</div>
						<div>
							<div className="mb-2">
								<a
									href="https://github.com/enBonnet/routes-react-router"
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold"
								>
									<h3 className="text-2xl font-bold">Routes - React Router</h3>
								</a>
								<p className="text-lg">
									Route Annotator for React Router Route Annotator is a VSCode
									extension that adds helpful annotations to your routes.ts
									files when working with react-router. It displays clickable
									CodeLens links above each route or index declaration, showing
									the full path derived from nested prefix() and route()
									structures.
								</p>
							</div>
							<div>
								<div>
									<span className="mr-2">VSCode Extension:</span>
									<a
										href="https://marketplace.visualstudio.com/items?itemName=enBonnet.routes-react-router"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										enBonnet.routes-react-router
									</a>
								</div>
								<div>
									<span className="mr-2">Open VSX:</span>
									<a
										href="https://open-vsx.org/extension/enBonnet/routes-react-router"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										enBonnet/routes-react-router
									</a>
								</div>
								<div>
									<span className="mr-2">Github:</span>
									<a
										href="https://github.com/enBonnet/routes-react-router"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										enBonnet/routes-react-router
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-9 justify-around items-center mb-12">
						<div>
							<div className="mb-2">
								<a
									href="https://ilpane.lat"
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold"
								>
									<h3 className="text-2xl font-bold">Il Pane</h3>
								</a>
								<p className="text-lg">
									An easy way to craft and share bread recipes, pretty cool it
									calculates the amount of hydration based on the absorption
									capacity of each ingredient or the user can adjust the
									percentage of humidity.
								</p>
							</div>
							<div>
								<div>
									<span className="mr-2">Site:</span>
									<a
										href="https://ilpane.lat"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										ilpane.lat
									</a>
								</div>
								<div>
									<span className="mr-2">Github:</span>
									<a
										href="https://github.com/enbonnet/ilpane"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										enbonnet/ilpane
									</a>
								</div>
							</div>
						</div>
						<div className="min-w-44 max-w-44 shadow-black shadow-sm rounded-lg">
							<img
								className="rounded-lg"
								src="/images/ilpane-screenshot.png"
								alt="Il Pane"
							/>
						</div>
					</div>
					<div className="flex md:flex-row flex-col-reverse gap-9 justify-around items-center">
						<div className="min-w-44 max-w-44 shadow-black shadow-sm rounded-lg">
							<img
								className="rounded-lg"
								src="/images/frontend-tools-screenshot.png"
								alt="Frontend Tools"
							/>
						</div>
						<div>
							<div className="mb-2">
								<a
									href="https://github.com/enBonnet/Frontend-Tools"
									target="_blank"
									rel="noopener noreferrer"
									className="font-bold"
								>
									<h3 className="text-2xl font-bold">Frontend Tools</h3>
								</a>
								<p className="text-lg">
									A collection of tools for frontend developers, including a
									color picker, a font size calculator, and a responsive design
									tool.
								</p>
							</div>
							<div>
								<div>
									<span className="mr-2">Github:</span>
									<a
										href="https://github.com/enBonnet/Frontend-Tools"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold"
									>
										enBonnet/Frontend-Tools
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

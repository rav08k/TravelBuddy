import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";
import travelPackages from "../all_utils/PackageApi";
import PackageCard from "./PackageCard";

function Packages() {


	return (
		<Section className="pkgs" id="pkgs">
			<Container>
				<h1 className="title">Choose Your Dream Place</h1>
				<h3 className="subtitle">
					We have our footprints all around the World!
				</h3>
				<div className="pkg_box_wrap" id="pkg_box_wrap">
                    {travelPackages.map((e)=>
                        <PackageCard key={"pk_"+e.id} ele={e}/>
                    )}
                </div>
			</Container>
		</Section>
	);
}

export default Packages;

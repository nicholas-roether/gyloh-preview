import React from "react";
import PartnerCard from "./PartnerCard";
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";

import natImage from "../images/partners/nat.jpg";
import pfannenbergImage from "../images/partners/pfannenberg.jpg";
import tuhhImage from "../images/partners/tuhh.jpg";
import hcuImage from "../images/partners/hcu.png";
import tsgImage from "../images/partners/tsg.jpg";
import youngClassXImage from "../images/partners/young-classx.jpg";
import mintPinkImage from "../images/partners/mint-pink.jpg";
import eTwinningImage from "../images/partners/etwinning.png";
import bilingualImage from "../images/partners/bilingual.jpg";
import jugendDebattiertImage from "../images/partners/jugend-debattiert.jpg";
import delfDalfImage from "../images/partners/delf-dalf.jpg";
import certiLinguaImage from "../images/partners/certilingua.png";
import CardDisplay from "../common/CardDisplay";

const PartnerDisplay: React.FC = props => {
	const theme = useTheme();
	const sm = useMediaQuery(theme.breakpoints.down("sm"));
	const cards = [
		<PartnerCard 
			name="Initiative NaT"
			image={natImage}
			infoUrl="http://initiative-nat.de/"
		>
			Die Initiative NaT vernetzt Schulen, Hochschulen und Unternehmen.
		</PartnerCard>,
		<PartnerCard
			name="Pfannenberg"
			image={pfannenbergImage}
			infoUrl="https://pfannenberg.com/de/"
		>
			Elektrotechnik für die Industrie
		</PartnerCard>,
		<PartnerCard
			name="TUHH"
			image={tuhhImage}
			infoUrl="https://www.tuhh.de/"
		>
			Technische Universität Hamburg (TUHH)
		</PartnerCard>,
		<PartnerCard
			name="HCU"
			image={hcuImage}
			infoUrl="https://www.hcu-hamburg.de/"
		>
			HafenCity Universität Hamburg (HCU)
		</PartnerCard>,
		<PartnerCard
			name="TSG Bergedorf"
			image={tsgImage}
			infoUrl="http://tsg-bergedorf.de/"
		>
			Die TSG Bergedorf von 1860 e. V. ist einer der größten Sportvereine in Deutschland.
		</PartnerCard>,
		<PartnerCard
			name="The Young ClassX"
			image={youngClassXImage}
			infoUrl="https://www.theyoungclassx.de/"
		>
			Das Musikprojekt für Kinder und Jugendliche in Hamburg.
		</PartnerCard>,
		<PartnerCard
			name="mint:pink"
			image={mintPinkImage}
			infoUrl="http://www.mintpink.de/"
		>
			Schulübergreifendes Programm für neugierige Mädchen.
		</PartnerCard>,
		<PartnerCard
			name="eTwinnig"
			image={eTwinningImage}
			infoUrl="https://www.etwinning.net/"
		>
			Die Gemeinschaft für Schulen in Europa.
		</PartnerCard>,
		<PartnerCard
			name="Bilingualer Unterricht"
			image={bilingualImage}
			infoUrl="https://www.gymnasium-lohbruegge.de/info-service/dokumente/send/12-jahrbuecher-unserer-schule/160-flyer-bilinguale-klasse" // TODO update
		>
			Ausgezeichneter bilingualer Unterricht.
		</PartnerCard>,
		<PartnerCard
			name="Jugend Debattiert"
			image={jugendDebattiertImage}
			infoUrl="https://www.jugend-debattiert.de/"
		>
			Jugend debattiert - weil Kontroversen lohnen.
		</PartnerCard>,
		<PartnerCard
			name="DELF DALF"
			image={delfDalfImage}
			infoUrl="https://www.institutfrancais.de/franzoesisch-lernen/delf-dalf"
		>
			International anerkannte Zertifikate für Französisch als Fremdsprache.
		</PartnerCard>,
		<PartnerCard
			name="CertiLingua"
			image={certiLinguaImage}
			infoUrl="http://www.certilingua.net/"
		>
			Das CertiLingua Exzellenzlabel.
		</PartnerCard>
	]
	if(sm) {
		return (
			<CardDisplay numCards={{xs: 1, sm: 2, md: 2, lg: 2, xl: 2}}>
				{cards.map(i => (
					<Box flex="1 1 0" marginX={theme.spacing(0.2)}>
						{i}
					</Box>
				))}
			</CardDisplay>
		)
	}
	return (
		<Grid container spacing={2} xs={12} style={{margin: 0}}>
			{cards.map(i => (
				<Grid item xs={12} sm={6} md={4} lg={3}>
					{i}
				</Grid>
			))}
		</Grid>
	);
}

export default PartnerDisplay;
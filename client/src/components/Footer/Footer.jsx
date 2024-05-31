import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MaterialLink from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
	<Box>
		<Container
			maxWidth="lg"
			sx={{
				py: '24px',
				display: 'flex',
				justifyContent: 'center',
			}}>
			<Box>
				<MaterialLink
					href="https://github.com/chingu-voyages/v49-tier3-team-29"
					underline="none"
					target="_blank"
					rel="noopener"
					sx={{
						display: 'flex',
						gap: '8px',
					}}>
					<GitHubIcon></GitHubIcon>
					Github
				</MaterialLink>
			</Box>
		</Container>
	</Box>
);

export default Footer;

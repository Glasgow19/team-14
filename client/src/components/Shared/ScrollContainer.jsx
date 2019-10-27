import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)'
	},
	title: {
		color: "white"
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
	}
}));

const Header = styled.h5`
	width: 200px;
	font-family: Questrial;
	font-size: 20px;
	margin-top: 30px;
    margin-bottom: 0;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #fff;
`;

export default function ScrollContainer(props) {
	const classes = useStyles();
    const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vfwiFzWrPiiene-4DbUaFAHaE8%26pid%3DApi&f=1"

	// const tileData = [
	// 	{
	// 		img: image,
	// 		title: 'Image',
	// 		author: 'author'
	// 	},
	// 	{
	// 		img: image,
	// 		title: 'Image',
	// 		author: 'author'
	// 	},
	// 	{
	// 		img: image,
	// 		title: 'Image',
	// 		author: 'author'
	// 	},
	// 	{
	// 		img: image,
	// 		title: 'Image',
	// 		author: 'author'
	// 	}
	// ];
	if (props.arr === undefined){
		return null;
	}
	return (
		<div className={classes.root} style = {{background: props.bg}}>
            <Header>{props.title}</Header>
			<GridList className={classes.gridList} cols={2.5}>
				{props.arr.map((tile) => (
					<GridListTile style={{padding:15, marginTop: 10}} key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							classes={{
								root: classes.titleBar,
								title: classes.title
							}}
							actionIcon={
								<IconButton aria-label={`star ${tile.title}`}>
									<StarBorderIcon className={classes.title} />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

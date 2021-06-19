import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import Response from '../Response'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Search from './Search'

import useGoogleSearch from '../UseGoogleSearch'


function SearchPage() {
	const [{ term }, dispatch] = useStateValue()

	const {data}=useGoogleSearch(term);


	//MOCK API CALL

	// const data = Response;



	console.log(data);

	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<Link to="/">

					<img className="searchPage_logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt=" " >
					</img>

				</Link>
				<div className="searchPage_headerBody">
					<Search hideButton />

					<div className="searchPage_options">

					{/*--------searchPage_optionsLeft--------------*/}

						<div className="searchPage_optionsLeft">
							<div className="searchPage_option">
								<SearchIcon />
								<Link to="/all">All</Link>
							</div>

							<div className="searchPage_option">
								<DescriptionIcon />
								<Link to="/news">News</Link>
							</div>
							<div className="searchPage_option">
								<ImageIcon />
								<Link to="/images">Images</Link>
							</div>
							<div className="searchPage_option">
								<LocalOfferIcon />
								<Link to="/shopping">Shopping</Link>
							</div>
							<div className="searchPage_option">
								<RoomIcon />
								<Link to="/maps">Maps</Link>
							</div>
							<div className="searchPage_option">
								<MoreVertIcon />
								<Link to="/more">More</Link>
							</div>

							{/*--------searchPage_optionsRight--------------*/}

							<div className="searchPage_optionsRight">

								<div className="searchPage_option">
									<Link to="/settings">Settings</Link>
								</div>
								<div className="searchPage_option">
									<Link to="/tools">Tools</Link>
								</div>
							</div>
						</div>
					</div>

				</div>


			</div>

			{term &&(

			<div className="searchPage_results">
			<p className="searchPage_resultCount">

			{/* searchInformation.formattedTotalResults is so important it fetches the data dynamicly so we get actual result */}

			About {data?. searchInformation.formattedTotalResults} results (
				{data?.searchInformation.formattedSearchTime} seconds
			)for {term}
			</p>
			
			{/* here we making the map through so it will display the link */}

			{/* and all are coming from search term which is cool like display link title and snippet */}
			{data?.items.map(item=>(
				<div className="searchPage_result">
				<a href={item.link} >

				{item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage_resultImage"
                                        src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                                        alt=''
                                    />
                                )}


				{item.displayLink}
				</a>

				<a className='searchPage_resultTitle' href={item.link} >
				<h2>{item.title}</h2>
				</a>

				<p className="searchPage_resultSnippet">
				{item.snippet}
				</p>

				</div>
			))}


			</div>

			)}




		</div>
	)
}

export default SearchPage

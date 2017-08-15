import React,{Component} from 'react';

class H extends Component{
	  render(){
	  	return(
				<header id="header">
					 <div className="titlePicture">
							 <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
					 </div>
					 <a href="index.html" className="logo"><b>DASHGUM FREE</b></a>
					 <div className="nav notify-row" id="top_menu">
								<ul className="nav top-menu">
									 <li className="dropdown">
													<a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
															<i className="fa fa-tasks"></i>
															<span className="badge bg-theme">4</span>
													</a>
									 </li>
									 <li className="dropdown">
													<a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
															<i className="fa fa-envelope-o"></i>
															<span className="badge bg-theme">5</span>
													</a>
									</li>
								</ul>
					 </div>
					 <div className="top-menu">
								<ul className="nav pull-right top-menu">
											<li><a className="logout" href="login.html">Logout</a></li>
								</ul>
					 </div>
				</header>
	  	)
	  }
}
export default H

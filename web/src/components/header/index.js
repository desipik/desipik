import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import logoImage from '../../assets/logo.png';
import {Row} from 'reactstrap';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<Row className='justify-content-end'>
					<nav class={style.smallNav}>
						<Link activeClassName={style.active} href="/careers">We're Hiring</Link>
						<Link activeClassName={style.active} href="/about-us">About Us</Link>
						<Link activeClassName={style.active} href="/login">Login</Link>
						<Link class={style.signup}  activeClassName={style.active} href="/signup">Sign Up</Link>
					</nav>
				</Row>
				<Row className='justify-content-start'>
					<img src={logoImage} class={style.logo} alt="" />
					<nav class={style.mainNav}>
						<Link activeClassName={style.active} href="/">Home</Link>
						<Link activeClassName={style.active} href="/profile">Me</Link>
						<Link activeClassName={style.active} href="/profile/zakir">zakir</Link>
					</nav>
				</Row>
			</header>
		);
	}
}
